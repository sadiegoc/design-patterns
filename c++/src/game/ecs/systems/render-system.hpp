#pragma once

#include "../ecs.hpp"
#include "../components/position.hpp"
#include "../components/sprite.hpp"

class RenderSystem {
  public:
    void update(ECS& ecs) {
      auto entities = ecs.GetEntities();
      // auto texture = TextureManager::getInstance();

      for (auto& e : entities) {
        if (!ecs.HasComponents<Position, Sprite>(e)) continue;

        auto& position = ecs.GetComponent<Position>(e);
        auto& sprite = ecs.GetComponent<Sprite>(e);

        // sf::Sprite sf_sprite;
        // sf_sprite.setTexture(texture.getTexture(sprite.texture));

        // sf_sprite.setPosition({ position.x, position.y });
        // window.draw(sprite);
      }
    }
};
