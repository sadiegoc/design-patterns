#pragma once

#include "./house-builder.hpp"

class OldHouseBuilder : public HouseBuilder {
  public:
    OldHouseBuilder() {
      walls("Wood walls");
      roof("Clay roof");
      windows(4);
    }
};
