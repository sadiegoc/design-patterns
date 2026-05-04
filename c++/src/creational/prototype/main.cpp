#include <vector>
#include <map>
#include <memory>

#include "character-registry.hpp"

#include "character-builder.hpp"
#include "warrior-builder.hpp"
#include "mage-builder.hpp"
#include "assassin-builder.hpp"

int main() {
  std::vector<Character> warriors;
  CharacterRegistry registry;

  registry.registerCharacter("warrior", WarriorBuilder().build());
  registry.registerCharacter("mage", MageBuilder().build());
  registry.registerCharacter("assassin", AssassinBuilder().build());
  registry.registerCharacter("character", CharacterBuilder().build());

  Character warrior = registry.spawn("warrior");
  Character mage = registry.spawn("mage");
  Character assassin = registry.spawn("assassin");
  Character character = registry.spawn("character");

  for (int i = 0; i < 20; i++) {
    Character w = registry.spawn("warrior");
    w.id = "warrior-" + std::to_string(i);
    w.name = "Warrior " + std::to_string(i);
    i % 2 == 0 ? w.isBoss = true : w.isBoss = false;
    warriors.push_back(w);
  }

  for (int i = 0; i < 20; i++) {
    warriors[i].show();
    std::cout << std::endl;
  }

  return 0;
}