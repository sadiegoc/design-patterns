#pragma once

#include "../builders/assassin-builder.hpp"
#include "../builders/warrior-builder.hpp"
#include "../builders/mage-builder.hpp"
#include "../builders/assassin-builder.hpp"
#include "../factories/character-registry.hpp"

class CharacterLoader {
  public:
    static void load(CharacterRegistry& registry) {
      registry.registerCharacter("warrior", WarriorBuilder().build());
      registry.registerCharacter("mage", MageBuilder().build());
      registry.registerCharacter("assassin", AssassinBuilder().build());
      registry.registerCharacter("character", CharacterBuilder().build());
    }
};
