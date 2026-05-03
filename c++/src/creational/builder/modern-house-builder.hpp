#pragma once

#include "./house-builder.hpp"

class ModernHouseBuilder : public HouseBuilder {
  public:
    ModernHouseBuilder() {
      walls("Concrete walls");
      roof("Glass roof");
      windows(10);
    }
};
