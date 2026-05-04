#include <vector>
#include <map>
#include <memory>

#include "factories/character-registry.hpp"
#include "loaders/character-loader.hpp"

int main() {
  CharacterRegistry registry;

  CharacterLoader::load(registry);

  auto warriors = registry.spawnMany("warrior", 10, [](Character& c, int i) {
    c.id = std::to_string(i + 1);
    c.name = "Warrior " + std::to_string(i + 1);
  });

  for (int i = 0; i < 10; i++) {
    warriors[i].show();
    std::cout << std::endl;
  }

  return 0;
}