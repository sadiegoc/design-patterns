#include <vector>
#include <map>
#include <memory>

#include "factories/character-registry.hpp"
#include "loaders/character-loader.hpp"

int main() {
  CharacterRegistry registry;

  CharacterLoader::load(registry);

  auto characters = registry.spawnMany(CharacterType::Warrior, 10, [](Character& c, int i) {
    c.id = std::to_string(i + 1);
    c.name = toString(CharacterType::Warrior) + " " + std::to_string(i + 1);
  });

  for (const auto& character : characters) {
    character.show();
    std::cout << std::endl;
  }

  return 0;
}