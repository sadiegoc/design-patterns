#pragma once

#include "command.hpp"

#include "../../ecs/ecs.hpp"
#include "../../ecs/components/input.hpp"

class MoveDownCommand : public Command {
  private:
    ECS& ecs;
    Entity& player;

  public:
    MoveDownCommand(ECS& e, Entity& p) : ecs(e), player(p) {}

    void onPressed() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.down = true;
    }

    void onReleased() override {
      auto& input = ecs.GetComponent<Input>(player);
      input.down = false;
    }

    void onHeld(float dt) override {}
};
