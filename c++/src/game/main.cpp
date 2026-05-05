#include <iostream>

#include "engine/game.hpp"
#include "states/menu-state.hpp"
#include "states/playing-state.hpp"
#include "characters/factories/character-registry.hpp"
#include "characters/loaders/character-loader.hpp"

int main() {
  Game game;

  std::cout << "Pressione alguma tecla para testar as entradas..." << std::endl;

  game.run();

  return 0;
}
