#include "maze.hpp"
#include "maze-builder.hpp"

class MazeGame {
  private:
    MazeGame();
  public:
    Maze* CreateMaze(MazeBuilder& builder);
    Maze* CreateComplexMaze(MazeBuilder& builder);
};
