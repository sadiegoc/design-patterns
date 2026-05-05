#pragma once

class GameTemplate {
  public:
    void run() {
      init();

      while (isRunning) {
        processInput();
        update();
        render();
      }

      shutdown();
    }

  protected:
    virtual void init() {}
    virtual void shutdown() {}

    virtual void processInput() = 0;
    virtual void update() = 0;
    virtual void render() = 0;

    bool isRunning = true;
};
