#pragma once

#include "command.hpp"

#include "../../ui/menu.hpp"

class NavigateEnterCommand : public Command {
  private:
    Menu& menu;

  public:
    NavigateEnterCommand(Menu& m) : menu(m) {}

    void execute() override {
      std::cout << menu.getCurrent() << std::endl;
    }
};
