#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class MoveRightCommand : public Command {
  private:
    Player& player;

  public:
    MoveRightCommand(Player& p) : player(p) {}

    void execute() override {
      player.moveRight();
    }
};
