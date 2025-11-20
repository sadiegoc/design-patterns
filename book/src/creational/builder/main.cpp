#include <iostream>

#include "maze.hpp"
#include "maze-builder.hpp"
#include "maze-factory.hpp"
#include "maze-game.hpp"
#include "standard-maze-builder.hpp"

using namespace std;

int main() {
  Maze* maze;
  MazeGame* game;
  StandardMazeBuilder* builder;

  game->CreateMaze(builder);

  return 0;
}
