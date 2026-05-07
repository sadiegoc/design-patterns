#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class startMoveRightCommand : public Command {
  private:
    Player& player;

  public:
    startMoveRightCommand(Player& p) : player(p) {}

    void onPressed() override {
      player.startMoveRight();
    }

    void onReleased() override {
      player.stopMoveRight();
    }

    void onHeld(float dt) override {}
};
