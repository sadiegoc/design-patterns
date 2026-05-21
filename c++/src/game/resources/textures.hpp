#pragma once

#include <string>

enum class TextureId {
  Player,
  Crawler,
  Chaser,
  Bloater,
  Blood,
  Crosshair,
  HealthPickup,
  Background,
  BackgroundSheet,
  AmmoPickup,
  AmmoIcon,
};

namespace std {
  template<>
  struct hash<TextureId> {
    size_t operator()(const TextureId& id) const {
      return hash<int>()(static_cast<int>(id));
    }
  };
}
