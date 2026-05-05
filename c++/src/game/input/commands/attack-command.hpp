#pragma once

#include "command.hpp"

#include "../../entities/player.hpp"

class AttackCommand : public Command {
  private:
    Player& player;

  public:
    AttackCommand(Player& p) : player(p) {}

    void execute() override {
      player.attack();
    }
};
