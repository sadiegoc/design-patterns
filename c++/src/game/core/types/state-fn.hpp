#pragma once

#include <functional>
#include <memory>

class GameState;

enum class StateType { Menu, Playing };

using ChangeStateFn = std::function<void(StateType)>;
