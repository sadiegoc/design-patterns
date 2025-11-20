#include "maze-builder.hpp"

class StandardMazeBuilder : public MazeBuilder {
  public:
    StandardMazeBuilder();

    virtual void BuildMaze();
    virtual void BuildRoom(int);
    virtual void BuildMaze(int, int);

    virtual Maze* getMaze();
  private:
    Direction CommonWall(Room*, Room*);
    Maze* _currentMaze;
};
