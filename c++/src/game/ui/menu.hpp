#pragma once

#include <vector>
#include <string>

class Menu {
  private:
    std::vector<std::string> options;
    int selected = 0;

  public:
    Menu(std::vector<std::string> items) : options(std::move(items)) {}

    void navigateUp() {
      selected = (selected - 1 + options.size()) % options.size();
    }

    void navigateDown() {
      selected = (selected + 1) % options.size();
    }

    void select() {
      std::cout << "Select: " << options[selected] << std::endl;
    }

    int getSelected() const {
      return selected;
    }

    const std::string& getCurrent() const {
      return options[selected];
    }
};
