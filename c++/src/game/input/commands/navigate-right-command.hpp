#pragma once

#include "command.hpp"

class NavigateRightCommand : public Command {
  public:
    NavigateRightCommand() {}

    void execute() override {
      std::cout << "Navigate Right" << std::endl;
    }
};
