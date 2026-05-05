#pragma once

#include <memory>

#include "../core/types/exit-fn.hpp"
#include "../core/types/state-fn.hpp"
#include "game-state.hpp"
#include "playing-state.hpp"
#include "menu-state.hpp"
#include "../entities/player.hpp"

class StateFactory {
  public:
    static std::unique_ptr<GameState> create(
      StateType type,
      Player& player,
      ChangeStateFn changeState,
      ExitGameFn exitFn
    ) {
      switch (type) {
        case StateType::Menu:
          return std::make_unique<MenuState>(changeState, exitFn);
        
        case StateType::Playing:
          return std::make_unique<PlayingState>(player, changeState);
        
        default:
          return nullptr;
      }
    }
};
