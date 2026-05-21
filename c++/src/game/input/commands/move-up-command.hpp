#pragma once

#include "command.hpp"

#include "../../ecs/ecs.hpp"
#include "../../ecs/components/input.hpp"

class MoveUpCommand : public Command {
  private:
    ECS& ecs;
    Entity& player;

  public:
    MoveUpCommand(ECS& e, Entity& p) : ecs(e), player(p) {}

    void onPressed() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.up = true;
    }

    void onReleased() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.up = false;
    }

    void onHeld(float dt) override {}
};
