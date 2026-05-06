#pragma once

#include "command.hpp"

#include "../../core/events/event-bus.hpp"

class GameStartCommand : public Command {
  private:
    EventBus bus;

  public:
    GameStartCommand(EventBus b) : bus(b) {}

    void execute() override {
      bus.notify({ EventType::ChangeState, StateType::Playing });
    }
};
