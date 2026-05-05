#pragma once

#include "command.hpp"

class NavigateDownCommand : public Command {
  public:
    NavigateDownCommand() {}

    void execute() override {
      std::cout << "Navigate Down" << std::endl;
    }
};
