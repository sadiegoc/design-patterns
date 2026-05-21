#pragma once

#include <memory>

#include "game-template.hpp"

#include "../core/events/event-bus.hpp"
#include "../ui/menu.hpp"
#include "../states/state-factory.hpp"
#include "../states/game-state.hpp"

#include "../ecs/ecs.hpp"
#include "../ecs/components/health.hpp"
#include "../ecs/components/position.hpp"
#include "../ecs/components/price.hpp"
#include "../ecs/components/sprite.hpp"
#include "../ecs/components/stock.hpp"
#include "../ecs/components/velocity.hpp"
#include "../ecs/components/input.hpp"
#include "../ecs/components/movement-speed.hpp"

class Game : public GameTemplate {
  private:
    CharacterRegistry registry;
    std::unique_ptr<Menu> menu;
    Entity player;
    std::unique_ptr<GameState> state;
    EventBus eventBus;
    ECS ecs;

  private:
    void init() override {
      this->setupECS();
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

    void setupECS() {
      ecs.RegisterComponent<Health>();
      ecs.RegisterComponent<Position>();
      ecs.RegisterComponent<Price>();
      ecs.RegisterComponent<Sprite>();
      ecs.RegisterComponent<Stock>();
      ecs.RegisterComponent<Velocity>();
      ecs.RegisterComponent<Input>();
      ecs.RegisterComponent<MovementSpeed>();
    }

    void setupPlayer() {
      player = ecs.CreateEntity();

      ecs.AddComponent(player, Position{10, 20});
      ecs.AddComponent(player, Health{100, 100});
      ecs.AddComponent(player, Velocity{10, 10});
      ecs.AddComponent(player, MovementSpeed{100});
      ecs.AddComponent(player, Sprite{TextureId::Player});
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
        player,
        ecs,
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