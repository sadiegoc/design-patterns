#pragma once

#include "command.hpp"

#include "../../core/events/event-bus.hpp"

class ExitCommand : public Command {
  private:
    EventBus bus;

  public:
    ExitCommand(EventBus& b) : bus(b) {}

    void execute() override {
      bus.notify({ EventType::Quit });
    }
};
