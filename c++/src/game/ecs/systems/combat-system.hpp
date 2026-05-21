#pragma once

#include <iostream>

#include "../world.hpp"

class CombatSystem {
  public:
    void damage(World& world, Entity entity, int damage) {
      if (!world.components.healths.count(entity)) return;

      auto& health = world.components.healths[entity];

      health.current -= damage;

      if (health.current < 0) health.current = 0;

      std::cout
        << "Entity "
        << entity
        << " HP: "
        << health.current
        << "/"
        << health.max
        << std::endl;
    }
};
