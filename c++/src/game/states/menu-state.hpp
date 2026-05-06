#pragma once

#include "../core/events/event-bus.hpp"

#include "game-state.hpp"
#include "../ui/menu.hpp"

#include "../input/input-handler.hpp"
#include "../input/enums/keys.hpp"
#include "../input/commands/exit-command.hpp"
#include "../input/commands/game-start-command.hpp"
#include "../input/commands/navigate-up-command.hpp"
#include "../input/commands/navigate-down-command.hpp"
#include "../input/commands/navigate-enter-command.hpp"


class MenuState : public GameState {
  private:
    Menu& menu;
    InputHandler input;
    EventBus& bus;

  public:
    MenuState(Menu& m, EventBus& b) : bus(b), menu(m) {
      input.bind(Key::KEY_Q, std::make_unique<ExitCommand>(bus));
      input.bind(Key::KEY_P, std::make_unique<GameStartCommand>(bus));
      input.bind(Key::KEY_W, std::make_unique<NavigateUpCommand>(menu));
      input.bind(Key::KEY_S, std::make_unique<NavigateDownCommand>(menu));
      input.bind(Key::KEY_ENTER, std::make_unique<NavigateEnterCommand>(menu));
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
