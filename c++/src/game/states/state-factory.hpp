#pragma once

#include <memory>

#include "game-state.hpp"
#include "playing-state.hpp"
#include "menu-state.hpp"
#include "../ui/menu.hpp"
#include "../entities/player.hpp"
#include "../core/events/event-bus.hpp"

class StateFactory {
  public:
    static std::unique_ptr<GameState> create(
      StateType type,
      Player& player,
      EventBus& bus,
      Menu& menu
    ) {
      switch (type) {
        case StateType::Menu:
          return std::make_unique<MenuState>(menu, bus);
        
        case StateType::Playing:
          return std::make_unique<PlayingState>(player, bus);
        
        default:
          return nullptr;
      }
    }
};
