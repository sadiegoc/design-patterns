#pragma once

#include "./character-builder.hpp"

class AssassinBuilder : public CharacterBuilder {
  public:
    AssassinBuilder() {
      type(CharacterType::Assassin);
      weapon("daggers");
      health(600);
      mana(0);
      strength(StrengthLevel::Medium);
      defense(400);
      agility(10);
      armor(2);
      intelligence(7);
    }
};
