#include "character-builder.hpp"
#include "warrior-builder.hpp"
#include "mage-builder.hpp"
#include "assassin-builder.hpp"

int main() {
  Character custom = CharacterBuilder()
    .name("Diego")
    .weapon("Keyboard")
    .health(1000)
    .mana(0)
    .strength(40)
    .defense(60)
    .agility(7)
    .intelligence(5)
    .armor(0)
    .level(5)
    .isBoss(false)
    .build();

  Character warrior = WarriorBuilder()
    .name("Paçoca")
    .level(8)
    .build();

  Character mage = MageBuilder()
    .name("Núbia")
    .level(6)
    .isBoss(true)
    .build();

  Character assassin = AssassinBuilder()
    .name("Cerveja")
    .level(2)
    .isBoss(true)
    .build();

  custom.show();
  std::cout << std::endl;
  warrior.show();
  std::cout << std::endl;
  mage.show();
  std::cout << std::endl;
  assassin.show();

  return 0;
}