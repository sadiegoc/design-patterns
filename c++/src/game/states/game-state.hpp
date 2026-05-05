#pragma once

class GameState {
  public:
    virtual ~GameState() = default;

    virtual void handleInput() = 0;
    virtual void update() = 0;
    virtual void render() = 0;
};
