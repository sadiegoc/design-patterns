#pragma once

#include <memory>

#include "game-template.hpp"

#include "../core/types/exit-fn.hpp"
#include "../core/types/state-fn.hpp"

#include "../entities/player.hpp"

#include "../states/state-factory.hpp"
#include "../states/game-state.hpp"

#include "../characters/factories/character-registry.hpp"
#include "../characters/loaders/character-loader.hpp"
#include "../entities/player.hpp"

class Game : public GameTemplate {
  private:
    CharacterRegistry registry;
    std::unique_ptr<Player> player;
    std::unique_ptr<GameState> state;
    ExitGameFn exitFn;

  private:
    void init() override {
      CharacterLoader::load(registry);

      player = std::make_unique<Player>(registry.spawn(CharacterType::Warrior));

      ChangeStateFn changeStateFn = [this](StateType type) {
        this->changeState(type);
      };

      exitFn = [this]() {
        this->stop();
      };

      state = StateFactory::create(
        StateType::Menu,
        *player,
        changeStateFn,
        exitFn
      );
    }

    void stop() {
      isRunning = false;
    }

    void changeState(StateType type) {
      ChangeStateFn changeStateFn = [this](StateType t) {
        this->changeState(t);
      };

      exitFn = [this]() {
        this->stop();
      };

      state = StateFactory::create(
        type,
        *player,
        changeStateFn,
        exitFn
      );
    }

    void processInput() override {
      state->handleInput();
    }

    void update() override {
      state->update();
    }

    void render() override {
      state->render();
    }
};