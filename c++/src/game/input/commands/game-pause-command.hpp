#pragma once

#include "command.hpp"

#include "../../core/events/event-bus.hpp"

class GamePauseCommand : public Command {
  private:
    EventBus bus;

  public:
    GamePauseCommand(EventBus b) : bus(b) {}

    void onPressed() override {
      bus.notify({ EventType::ChangeState, StateType::Menu });
    }

    void onReleased() override {}

    void onHeld(float dt) override {}
};
