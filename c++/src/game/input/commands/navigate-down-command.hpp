#pragma once

#include "command.hpp"

#include "../../ui/menu.hpp"

class NavigateDownCommand : public Command {
  private:
    Menu& menu;

  public:
    NavigateDownCommand(Menu& m) : menu(m) {}

    void onPressed() override {
      menu.navigateDown();
    }

    void onReleased() override {}

    void onHeld(float dt) override {}
};
