#pragma once

#include <vector>
#include <iostream>
#include "input-event.hpp"

class InputSystem {
  private:
    InputSystem() {}

    std::map<Key, bool> currentKeys;
    std::map<Key, bool> previousKeys;
    std::map<Key, float> holdTimes;

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

    void setKeyPressed(Key key, bool pressed) {
      currentKeys[key] = pressed;
    }

    std::vector<InputEvent> pollEvents(float dt) {
      std::vector<InputEvent> events;

      for (auto& [key, pressed] : currentKeys) {
        bool wasPressed = previousKeys[key];

        if (pressed && !wasPressed) {
          holdTimes[key] = 0.f;

          events.push_back({ key, InputEventType::Pressed, 0.f });
        }

        else if (pressed && wasPressed) {
          holdTimes[key] += dt;

          events.push_back({ key, InputEventType::Held, holdTimes[key] });
        }

        else if (!pressed && wasPressed) {
          events.push_back({ key, InputEventType::Released, holdTimes[key] });

          holdTimes[key] = 0.f;
        }
      }

      previousKeys = currentKeys;

      return events;
    }
};
