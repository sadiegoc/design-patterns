#pragma once

#include "../core/events/event-bus.hpp"

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
    EventBus& bus;

  public:
    PlayingState(Player& p, EventBus& b) : player(p), bus(b) {
      input.bind(Key::KEY_P, std::make_unique<GamePauseCommand>(bus));
      input.bind(Key::KEY_W, std::make_unique<startMoveUpCommand>(player));
      input.bind(Key::KEY_S, std::make_unique<startMoveDownCommand>(player));
      input.bind(Key::KEY_A, std::make_unique<startMoveLeftCommand>(player));
      input.bind(Key::KEY_D, std::make_unique<startMoveRightCommand>(player));
      input.bind(Key::KEY_J, std::make_unique<AttackCommand>(player));
      input.bind(Key::KEY_SPACE, std::make_unique<JumpCommand>(player));
    }

    void handleInput(float dt) override {
      input.handle(dt);
    }

    void update(float dt) override {
      // Physics, AI
    }

    void render() override {
      // Draw game
    }
};
