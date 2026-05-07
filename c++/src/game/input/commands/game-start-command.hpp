#pragma once

#include "command.hpp"

#include "../../core/events/event-bus.hpp"

class GameStartCommand : public Command {
  private:
    EventBus bus;

  public:
    GameStartCommand(EventBus b) : bus(b) {}

    void onPressed() override {
      bus.notify({ EventType::ChangeState, StateType::Playing });
    }

    void onReleased() override {}

    void onHeld(float dt) override {}
};
