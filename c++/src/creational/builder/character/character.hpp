#pragma once

#include <iostream>
#include <string>

class Character {
  public:
    std::string name;
    std::string weapon;

    int health; // 0 - 1000
    int mana; // 0 - 1000
    int strength; // 0 - 100
    int defense; // 0 - 100
    int agility; // 0 - 10
    int intelligence; // 0 - 10
    int armor; // 0 - 10
    int level; // 0 - 10

    bool isBoss;

    void show() {
      std::cout << "Name: " << name << std::endl;
      std::cout << "Weapon: " << weapon << std::endl;

      std::cout << "Health: " << health << std::endl;
      std::cout << "Mana: " << mana << std::endl;
      std::cout << "Strength: " << strength << std::endl;
      std::cout << "Defense: " << defense << std::endl;
      std::cout << "Agility: " << agility << std::endl;
      std::cout << "Intelligence: " << intelligence << std::endl;
      std::cout << "Armor: " << armor << std::endl;
      std::cout << "Level: " << level << std::endl;

      std::cout << "Is Boss: " 
                << (isBoss ? "Yes" : "No") 
                << std::endl;
    }
};
