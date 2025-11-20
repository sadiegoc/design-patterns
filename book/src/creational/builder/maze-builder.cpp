#include "maze-builder.hpp"
#include "maze-game.hpp"

Maze* MazeGame::CreateComplexMaze (MazeBuilder& builder) {
  builder.BuildRoom(1);
  builder.BuildRoom(1000);

  return builder.getMaze();
}