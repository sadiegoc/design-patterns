#pragma once

#include <map>
#include <memory>
#include "input-system.hpp"
#include "commands/command.hpp"

class InputHandler {
  private:
    std::map<Key, std::unique_ptr<Command>> commands;

  public:
    InputHandler() {}

    void bind(Key key, std::unique_ptr<Command> cmd) {
      commands[key] = std::move(cmd);
    }

    void handle(float dt) {
      auto& inputSystem = InputSystem::getInstance();

      auto events = inputSystem.pollEvents(dt);

      for (auto& event : events) {
        if (!commands.count(event.key)) continue;

        auto& cmd = commands[event.key];

        switch (event.type) {
          case InputEventType::Pressed:
            cmd->onPressed();
            break;
          case InputEventType::Released:
            cmd->onReleased();
            break;
          case InputEventType::Held:
            cmd->onHeld(event.heldTime);
            break;
        }
      }
    }
};
