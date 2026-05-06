#pragma once

#include "command.hpp"

#include "../../ui/menu.hpp"

class NavigateUpCommand : public Command {
  private:
    Menu& menu;

  public:
    NavigateUpCommand(Menu& m) : menu(m) {}

    void execute() override {
      menu.moveUp();
    }
};
