#include "maze.hpp"

class MazeBuilder {
  public:
    virtual void BuildMaze() {}
    virtual void BuildRoom(int room) {}
    virtual void BuildDoor(int roomFrom, int roomTo) {}

    virtual Maze* getMaze() { return 0; }
  protected:
    MazeBuilder();
};
