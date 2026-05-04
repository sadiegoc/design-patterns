#pragma once

#include "../builders/assassin-builder.hpp"
#include "../builders/warrior-builder.hpp"
#include "../builders/mage-builder.hpp"
#include "../factories/character-registry.hpp"

class CharacterLoader {
  public:
    static void load(CharacterRegistry& registry) {
      registry.registerCharacter(CharacterType::Warrior, WarriorBuilder().build());
      registry.registerCharacter(CharacterType::Mage, MageBuilder().build());
      registry.registerCharacter(CharacterType::Assassin, AssassinBuilder().build());
      registry.registerCharacter(CharacterType::Custom, CharacterBuilder().build());
    }
};
