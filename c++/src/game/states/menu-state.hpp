#pragma once

#include "../core/types/exit-fn.hpp"
#include "../core/types/state-fn.hpp"

#include "game-state.hpp"
#include "../input/input-handler.hpp"

#include "../input/enums/keys.hpp"
#include "../input/commands/exit-command.hpp"
#include "../input/commands/game-start-command.hpp"
#include "../input/commands/navigate-up-command.hpp"
#include "../input/commands/navigate-down-command.hpp"
#include "../input/commands/navigate-left-command.hpp"
#include "../input/commands/navigate-right-command.hpp"
#include "../input/commands/navigate-enter-command.hpp"


class MenuState : public GameState {
  private:
    InputHandler input;
    ChangeStateFn changeState;
    ExitGameFn exit;

  public:
    MenuState(ChangeStateFn fn, ExitGameFn ex) : changeState(fn), exit(ex) {
      input.bind(Key::KEY_Q, std::make_unique<ExitCommand>(exit));
      input.bind(Key::KEY_P, std::make_unique<GameStartCommand>(changeState));
      input.bind(Key::KEY_W, std::make_unique<NavigateUpCommand>());
      input.bind(Key::KEY_A, std::make_unique<NavigateLeftCommand>());
      input.bind(Key::KEY_S, std::make_unique<NavigateDownCommand>());
      input.bind(Key::KEY_D, std::make_unique<NavigateRightCommand>());
      input.bind(Key::KEY_ENTER, std::make_unique<NavigateEnterCommand>());
    }

    void handleInput() override {
      input.handle();
    }

    void update() override {
      // Nothing
    }

    void render() override {
      // Draw menu
    }
};
