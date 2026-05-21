#pragma once

#include <string>

#include "../../resources/textures.hpp"

struct Sprite {
  TextureId texture;

  void setTexture(TextureId t) {
    texture = t;
  }
};
