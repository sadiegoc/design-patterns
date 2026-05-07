#pragma once

class GameTemplate {
  public:
    void run() {
      init();

      while (isRunning) {
        // TODO: usar o DT do SFML
        float dt = 0.016f;

        processInput(dt);
        update(dt);
        render();
      }

      shutdown();
    }

  protected:
    virtual void init() {}
    virtual void shutdown() {}

    virtual void processInput(float dt) = 0;
    virtual void update(float dt) = 0;
    virtual void render() = 0;

    bool isRunning = true;
};
