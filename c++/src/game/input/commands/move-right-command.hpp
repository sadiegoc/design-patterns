#pragma once

#include "command.hpp"

#include "../../ecs/ecs.hpp"
#include "../../ecs/components/input.hpp"

class MoveRightCommand : public Command {
  private:
    ECS& ecs;
    Entity& player;

  public:
    MoveRightCommand(ECS& e, Entity& p) : ecs(e), player(p) {}

    void onPressed() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.right = true;
    }

    void onReleased() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.right = false;
    }

    void onHeld(float dt) override {}
};
