#pragma once

#include "../characters/character.hpp"

class Player {
  private:
    Character data;

  public:
    Player(const Character& c) : data(c) {}

    void moveUp() {
      std::cout << "Player move up" << std::endl;
    }

    void moveDown() {
      std::cout << "Player move down" << std::endl;
    }

    void moveLeft() {
      std::cout << "Player move left" << std::endl;
    }

    void moveRight() {
      std::cout << "Player move right" << std::endl;
    }

    void jump() {
      std::cout << "Player move jump" << std::endl;
    }

    void attack() {
      std::cout << "Player attacking" << std::endl;
    }
};