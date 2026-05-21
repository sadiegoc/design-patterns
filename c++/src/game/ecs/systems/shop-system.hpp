#pragma once

#include <iostream>

#include "../world.hpp"

class ShopSystem {
  public:
    void buy(World& world, Entity item) {
      if (!world.components.prices.count(item)) return;

      if (!world.components.stocks.count(item)) return;

      auto& price = world.components.prices[item];
      auto& stock = world.components.stocks[item];

      if (stock.quantity <= 0) {
        std::cout << "Item out of stock" << std::endl;
        return;
      }

      stock.quantity--;

      std::cout
        << "Bought item "
        << item
        << " for "
        << price.value
        << " gold"
        << std::endl;
    }
};
