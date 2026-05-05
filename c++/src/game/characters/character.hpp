#pragma once

#include <iostream>
#include <string>

#include "enums/strength-level.hpp"
#include "enums/character.hpp"

class Character {
  public:
    std::string id;
    std::string name;
    std::string weapon;

    Strength strength;
    CharacterType type;

    int health       = 0; // 0 - 1000
    int mana         = 0; // 0 - 1000
    int defense      = 0; // 0 - 100
    int agility      = 0; // 0 - 10
    int intelligence = 0; // 0 - 10
    int armor        = 0; // 0 - 10
    int level        = 0; // 0 - 10

    bool isBoss = false;

    Character clone() const {
      return *this;
    }

    void show() const {
      std::cout << "Type: " << toString(type) << std::endl;
      std::cout << "Id: " << id << std::endl;
      std::cout << "Name: " << name << std::endl;
      std::cout << "Weapon: " << weapon << std::endl;

      std::cout << "Health: " << health << std::endl;
      std::cout << "Mana: " << mana << std::endl;
      std::cout << "Strength: "
                << strength.toString()
                << " (" << strength.toInt() << ")"
                << std::endl;
      std::cout << "Defense: " << defense << std::endl;
      std::cout << "Agility: " << agility << std::endl;
      std::cout << "Intelligence: " << intelligence << std::endl;
      std::cout << "Armor: " << armor << std::endl;
      std::cout << "Level: " << level << std::endl;

      std::cout << "Is Boss: " << (isBoss ? "Yes" : "No") << std::endl;
    }
};
