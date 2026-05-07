#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class startMoveDownCommand : public Command {
  private:
    Player& player;

  public:
    startMoveDownCommand(Player& p) : player(p) {}

    void onPressed() override {
      player.startMoveDown();
    }

    void onReleased() override {
      player.stopMoveDown();
    }

    void onHeld(float dt) override {}
};
