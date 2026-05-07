#pragma once

#include "enums/keys.hpp"

enum class InputEventType {
  Pressed,
  Released,
  Held,
};

struct InputEvent {
  Key key;
  InputEventType type;
  float heldTime = 0.f;
};
