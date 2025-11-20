#include "maze.hpp"
#include "maze-game.hpp"
#include "maze-builder.hpp"

Maze* MazeGame::CreateMaze(MazeBuilder& builder) {
  builder.BuildMaze();

  return builder.getMaze();
}

Maze* MazeGame::CreateComplexMaze(MazeBuilder& builder) {
  builder.BuildRoom(1);
  builder.BuildRoom(1000);

  return builder.getMaze();
}
