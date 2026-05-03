#pragma once

#include <iostream>
#include <string>

class House {
  public:
    std::string walls;
    std::string roof;
    int windows;

    void show() {
      std::cout << "Walls: " << walls << std::endl;
      std::cout << "Roof: " << roof << std::endl;
      std::cout << "Windows: " << windows << std::endl;
    }
};
