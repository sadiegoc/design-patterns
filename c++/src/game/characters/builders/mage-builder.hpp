#pragma once

#include "./character-builder.hpp"

class MageBuilder : public CharacterBuilder {
  public:
    MageBuilder() {
      type(CharacterType::Mage);
      weapon("staff");
      health(400);
      mana(800);
      strength(StrengthLevel::Low);
      defense(700);
      agility(7);
      armor(2);
      intelligence(9);
    }
};
