#pragma once

#include "command.hpp"

class NavigateEnterCommand : public Command {
  public:
    NavigateEnterCommand() {}

    void execute() override {
      std::cout << "Navigate Enter" << std::endl;
    }
};
