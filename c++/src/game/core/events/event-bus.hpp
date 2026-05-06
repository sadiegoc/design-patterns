#pragma once

#include <functional>
#include <unordered_map>
#include <vector>
#include "event.hpp"

class EventBus {
  private:
    using Handler = std::function<void(const Event&)>;

    std::unordered_map<EventType, std::vector<Handler>> listeners;

  public:
    void subscribe(EventType type, Handler handler) {
      listeners[type].push_back(handler);
    }

    void notify(const Event& event) {
      if (listeners.count(event.type)) {
        for (auto& handler : listeners[event.type]) {
          handler(event);
        }
      }
    }
};
