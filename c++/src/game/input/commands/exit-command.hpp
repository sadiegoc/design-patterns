#pragma once

#include "command.hpp"

#include "../../core/types/exit-fn.hpp"

class ExitCommand : public Command {
  private:
    ExitGameFn exitFn;
  public:
    ExitCommand(ExitGameFn fn) : exitFn(fn) {}

    void execute() override {
      exitFn();
    }
};
