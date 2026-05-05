#pragma once

#include "../core/types/state-fn.hpp"

#include "game-state.hpp"
#include "../entities/player.hpp"

#include "../input/enums/keys.hpp"
#include "../input/input-handler.hpp"
#include "../input/commands/game-pause-command.hpp"
#include "../input/commands/attack-command.hpp"
#include "../input/commands/move-up-command.hpp"
#include "../input/commands/move-down-command.hpp"
#include "../input/commands/move-left-command.hpp"
#include "../input/commands/move-right-command.hpp"
#include "../input/commands/jump-command.hpp"

class PlayingState : public GameState {
  private:
    Player& player;
    InputHandler input;
    ChangeStateFn changeState;

  public:
    PlayingState(Player& p, ChangeStateFn fn) : player(p), changeState(fn) {
      input.bind(Key::KEY_P, std::make_unique<GamePauseCommand>(changeState));
      input.bind(Key::KEY_W, std::make_unique<MoveUpCommand>(player));
      input.bind(Key::KEY_S, std::make_unique<MoveDownCommand>(player));
      input.bind(Key::KEY_A, std::make_unique<MoveLeftCommand>(player));
      input.bind(Key::KEY_D, std::make_unique<MoveRightCommand>(player));
      input.bind(Key::KEY_J, std::make_unique<AttackCommand>(player));
      input.bind(Key::KEY_SPACE, std::make_unique<JumpCommand>(player));
    }

    void handleInput() override {
      input.handle();
    }

    void update() override {
      // Physics, AI
    }

    void render() override {
      // Draw game
    }
};
