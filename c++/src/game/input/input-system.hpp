#pragma once

#include <vector>
#include <iostream>
#include "enums/keys.hpp"

class InputSystem {
  private:
    InputSystem() {}

    Key mapKey(int raw) {
      char c = std::tolower(raw);

      switch (c) {
          case 'w': return KEY_W;
          case 'a': return KEY_A;
          case 's': return KEY_S;
          case 'd': return KEY_D;
          case 'p': return KEY_P;
          case 'q': return KEY_Q;
          case 'j': return KEY_J;
          case ' ': return KEY_SPACE;
          case '\n': return KEY_ENTER;
          default: return KEY_UNKNOWN;
      }
    }

  public:
    static InputSystem& getInstance() {
      static InputSystem instance;
      return instance;
    }

    std::vector<Key> pollEvents() {
      std::vector<Key> keys;

      int raw = std::cin.get();

      Key key = mapKey(raw);

      if (key != Key::KEY_UNKNOWN) {
        keys.push_back(key);
      }

      return keys;
    }
};
