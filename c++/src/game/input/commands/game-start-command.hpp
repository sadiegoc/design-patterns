#pragma once

#include "../../core/types/state-fn.hpp"
#include "command.hpp"

class GameStartCommand : public Command {
  private:
    ChangeStateFn changeState;

  public:
    GameStartCommand(ChangeStateFn fn) : changeState(fn) {}

    void execute() override {
      changeState(StateType::Playing);
    }
};
