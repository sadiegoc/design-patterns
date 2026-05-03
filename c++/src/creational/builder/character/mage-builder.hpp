#pragma once

#include "./character-builder.hpp"

class MageBuilder : public CharacterBuilder {
  public:
    MageBuilder() {
      weapon("staff");

      health(400);
      mana(800);
      strength(200);
      defense(700);
      agility(7);
      armor(2);
      intelligence(9);
    }
};
