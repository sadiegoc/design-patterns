#pragma once

#include "../ecs.hpp"
#include "../components/position.hpp"
#include "../components/velocity.hpp"

class MovementSystem {
  public:
    void Update(ECS& ecs) {
      auto entities = ecs.GetEntities();

      for (auto& e : entities) {
        if (!ecs.HasComponents<Position, Velocity>(e)) continue;

        auto& position = ecs.GetComponent<Position>(e);
        auto& velocity = ecs.GetComponent<Velocity>(e);

        position.x += velocity.dx;
        position.y += velocity.dy;
      }
    }
};
