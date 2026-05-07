#pragma once

#include "../characters/character.hpp"

class Player {
  private:
    Character player;

  public:
    Player(const Character& c) : player(c) {}

    void startMoveUp() {
      std::cout << "Player start move up" << std::endl;
    }

    void startMoveDown() {
      std::cout << "Player start move down" << std::endl;
    }

    void startMoveLeft() {
      std::cout << "Player start move left" << std::endl;
    }

    void startMoveRight() {
      std::cout << "Player start move right" << std::endl;
    }

    void stopMoveUp() {
      std::cout << "Player stop move up" << std::endl;
    }

    void stopMoveDown() {
      std::cout << "Player stop move down" << std::endl;
    }

    void stopMoveLeft() {
      std::cout << "Player stop move left" << std::endl;
    }

    void stopMoveRight() {
      std::cout << "Player stop move right" << std::endl;
    }

    void jump() {
      std::cout << "Player move jump" << std::endl;
    }

    void attack() {
      std::cout << "Player attacking" << std::endl;
    }
};