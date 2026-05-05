#pragma once

#include "command.hpp"

class NavigateLeftCommand : public Command {
  public:
    NavigateLeftCommand() {}

    void execute() override {
      std::cout << "Navigate Left" << std::endl;
    }
};
