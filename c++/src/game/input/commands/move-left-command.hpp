#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class startMoveLeftCommand : public Command {
  private:
    Player& player;

  public:
    startMoveLeftCommand(Player& p) : player(p) {}

    void onPressed() override {
      player.startMoveLeft();
    }

    void onReleased() override {
      player.stopMoveLeft();
    }

    void onHeld(float dt) override {}
};
