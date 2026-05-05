#pragma once

#include "../../core/types/state-fn.hpp"
#include "command.hpp"

class GamePauseCommand : public Command {
  private:
    ChangeStateFn changeState;

  public:
    GamePauseCommand(ChangeStateFn fn) : changeState(fn) {}

    void execute() override {
      changeState(StateType::Menu);
    }
};
