#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class MoveLeftCommand : public Command {
  private:
    Player& player;

  public:
    MoveLeftCommand(Player& p) : player(p) {}

    void execute() override {
      player.moveLeft();
    }
};
