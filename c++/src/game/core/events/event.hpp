#pragma once

#include "../types/state-fn.hpp"

enum class EventType {
  Quit,
  ChangeState,
  PlayerDied,
  Attack,
};

struct Event {
  EventType type;

  StateType state;
};
