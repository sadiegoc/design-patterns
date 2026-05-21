#pragma once

#include <vector>
#include <algorithm>

#include "component-storage.hpp"

class World {
  private:
    Entity nextEntity = 0;

  public:
    ComponentStorage components;

    std::vector<Entity> entities;

    Entity createEntity() {
      Entity entity = nextEntity++;

      entities.push_back(entity);

      return entity;
    }

    void destroyEntity(Entity entity) {
      entities.erase(
        std::remove(entities.begin(), entities.end(), entity),
        entities.end()
      );

      components.positions.erase(entity);
      components.velocities.erase(entity);
      components.healths.erase(entity);
      components.sprites.erase(entity);
      components.prices.erase(entity);
      components.stocks.erase(entity);
    }
};
