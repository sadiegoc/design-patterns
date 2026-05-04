#pragma once

#include "./character-builder.hpp"

class WarriorBuilder : public CharacterBuilder {
  public:
    WarriorBuilder() {
      type(CharacterType::Warrior);
      weapon("sword");
      health(800);
      mana(200);
      strength(StrengthLevel::High);
      defense(90);
      agility(4);
      armor(7);
      intelligence(6);
      level(5);
      isBoss(false);
    }
};
