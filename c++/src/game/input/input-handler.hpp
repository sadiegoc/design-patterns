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

    void handle() {
      auto& inputSystem = InputSystem::getInstance();

      auto keys = inputSystem.pollEvents();

      for (auto key : keys) {
        if (commands.count(key)) {
          commands[key]->execute();
        }
      }
    }
};
