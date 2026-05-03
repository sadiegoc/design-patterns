#pragma once

#include "./character-builder.hpp"

class BossBuilder : public CharacterBuilder {
  public:
    BossBuilder() {
      health(2000);
      mana(1000);
      strength(1000);
      defense(1000);
      agility(10);
      armor(10);
      intelligence(10);
      isBoss(true);
    }
};
