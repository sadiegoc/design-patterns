#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class startMoveUpCommand : public Command {
  private:
    Player& player;

  public:
    startMoveUpCommand(Player& p) : player(p) {}

    void onPressed() override {
      player.startMoveUp();
    }

    void onReleased() override {
      player.stopMoveUp();
    }

    void onHeld(float dt) override {}
};
