#pragma once

#include "command.hpp"

class NavigateUpCommand : public Command {
  public:
    NavigateUpCommand() {}

    void execute() override {
      std::cout << "Navigate Up" << std::endl;
    }
};
