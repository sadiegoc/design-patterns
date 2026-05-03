#pragma once

#include "./character-builder.hpp"

class AssassinBuilder : public CharacterBuilder {
  public:
    AssassinBuilder() {
      weapon("daggers");

      health(600);
      mana(0);
      strength(600);
      defense(400);
      agility(10);
      armor(2);
      intelligence(7);
    }
};
