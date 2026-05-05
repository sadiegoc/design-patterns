#pragma once

#include <iostream>

class Command {
  public:
    virtual ~Command() = default;
    virtual void execute() = 0;

    void getKey() {
      // TODO: construir algoritmo para pegar o input do usuário
    }
};
