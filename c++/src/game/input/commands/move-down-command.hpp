#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class MoveDownCommand : public Command {
  private:
    Player& player;

  public:
    MoveDownCommand(Player& p) : player(p) {}

    void execute() override {
      player.moveDown();
    }
};
