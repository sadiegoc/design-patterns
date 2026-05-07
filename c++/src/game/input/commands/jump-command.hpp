#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class JumpCommand : public Command {
  private:
    Player& player;

  public:
    JumpCommand(Player& p) : player(p) {}

    void onPressed() override {
      player.jump();
    }

    void onReleased() override {}

    void onHeld(float dt) override {}
};
