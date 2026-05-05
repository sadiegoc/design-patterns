#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class JumpCommand : public Command {
  private:
    Player& player;

  public:
    JumpCommand(Player& p) : player(p) {}

    void execute() override {
      player.jump();
    }
};
