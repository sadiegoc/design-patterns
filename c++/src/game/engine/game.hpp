#pragma once

#include <memory>

#include "game-template.hpp"

#include "../core/events/event-bus.hpp"

#include "../entities/player.hpp"
#include "../ui/menu.hpp"

#include "../states/state-factory.hpp"
#include "../states/game-state.hpp"

#include "../characters/factories/character-registry.hpp"
#include "../characters/loaders/character-loader.hpp"
#include "../entities/player.hpp"

class Game : public GameTemplate {
  private:
    CharacterRegistry registry;
    std::unique_ptr<Menu> menu;
    std::unique_ptr<Player> player;
    std::unique_ptr<GameState> state;
    EventBus eventBus;

  private:
    void init() override {
      this->setupPlayer();
      this->setupMenu();
      this->setupEventBus();
      this->setupState();
    }

    void setupEventBus() {
      eventBus.subscribe(EventType::Quit, [this](const Event&) {
        this->stop();
      });

      eventBus.subscribe(EventType::ChangeState, [this](const Event& e) {
        this->changeState(e.state);
      });
    }

    void setupPlayer() {
      CharacterLoader::load(registry);
      player = std::make_unique<Player>(registry.spawn(CharacterType::Warrior));
    }

    void setupState() {
      this->changeState(StateType::Menu);
    }

    void setupMenu() {
      menu = std::make_unique<Menu>(
        std::vector<std::string>{ "Start", "Options", "Exit" }
      );
    }

    void stop() {
      isRunning = false;
    }

    void changeState(StateType type) {
      state = StateFactory::create(
        type,
        *player,
        eventBus,
        *menu
      );
    }

    void processInput(float dt) override {
      state->handleInput(dt);
    }

    void update(float dt) override {
      state->update(dt);
    }

    void render() override {
      state->render();
    }
};