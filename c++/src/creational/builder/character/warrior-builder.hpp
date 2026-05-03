#pragma once

#include "./character-builder.hpp"

class WarriorBuilder : public CharacterBuilder {
  public:
    WarriorBuilder() {
      weapon("sword");

      health(800);
      mana(200);
      strength(90);
      defense(90);
      agility(4);
      armor(7);
      intelligence(6);
    }
};
