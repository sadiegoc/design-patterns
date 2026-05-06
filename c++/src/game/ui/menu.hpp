#pragma once

#include <vector>
#include <string>

class Menu {
  private:
    std::vector<std::string> options;
    int selected = 0;

  public:
    Menu(std::vector<std::string> items) : options(std::move(items)) {}

    void moveUp() {
      selected = (selected - 1 + options.size()) % options.size();
    }

    void moveDown() {
      selected = (selected + 1) % options.size();
    }

    int getSelected() const {
      return selected;
    }

    const std::string& getCurrent() const {
      return options[selected];
    }
};
