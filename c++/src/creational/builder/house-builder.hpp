#pragma once

#include "./house.hpp"

class HouseBuilder {
  private:
    House house;

  public:
    virtual ~HouseBuilder() = default;

    HouseBuilder& walls(const std::string& w) {
      house.walls = w;
      return *this;
    }

    HouseBuilder& roof(const std::string& r) {
      house.roof = r;
      return *this;
    }

    HouseBuilder& windows(int w) {
      house.windows = w;
      return *this;
    }

    House build() {
      return house;
    }
};
