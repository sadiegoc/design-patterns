#pragma once

#include <iostream>

class Command {
  public:
    virtual ~Command() = default;
    virtual void onPressed() = 0;
    virtual void onReleased() = 0;
    virtual void onHeld(float dt) = 0;
};
