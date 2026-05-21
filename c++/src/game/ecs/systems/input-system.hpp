#pragma once

#include "../ecs.hpp"
#include "../components/input.hpp"
#include "../components/velocity.hpp"
#include "../components/movement-speed.hpp"

class InputSystem {
  public:
    void Update(ECS& ecs) {
      auto entities = ecs.GetEntities();

      for (auto& e : entities) {
        if (!ecs.HasComponents<Input, Velocity, MovementSpeed>(e)) continue;

        auto& input = ecs.GetComponent<Input>(e);
        auto& velocity = ecs.GetComponent<Velocity>(e);
        auto& speed = ecs.GetComponent<MovementSpeed>(e);

        velocity.dx = 0;
        velocity.dy = 0;

        if (input.up) velocity.dy = -speed.value;
        if (input.down) velocity.dy = speed.value;
        if (input.left) velocity.dx = -speed.value;
        if (input.right) velocity.dx = speed.value;
      }
    }
};
