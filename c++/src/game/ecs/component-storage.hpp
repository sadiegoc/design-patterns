#pragma once

#include <unordered_map>

#include "entity.hpp"

#include "components/health.hpp"
#include "components/position.hpp"
#include "components/price.hpp"
#include "components/sprite.hpp"
#include "components/stock.hpp"
#include "components/velocity.hpp"

struct ComponentStorage {
  std::unordered_map<Entity, Health> healths;
  std::unordered_map<Entity, Position> positions;
  std::unordered_map<Entity, Price> prices;
  std::unordered_map<Entity, Sprite> sprites;
  std::unordered_map<Entity, Stock> stocks;
  std::unordered_map<Entity, Velocity> velocities;
};
