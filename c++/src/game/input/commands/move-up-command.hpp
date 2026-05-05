#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class MoveUpCommand : public Command {
  private:
    Player& player;

  public:
    MoveUpCommand(Player& p) : player(p) {}

    void execute() override {
      player.moveUp();
    }
};
