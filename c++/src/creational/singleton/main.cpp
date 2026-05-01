#include <iostream>
#include <vector>

class Logger {
  public:
    static Logger& getInstance() {
      static Logger* s_instance = new Logger;

      return *s_instance;
    }

    void log(const std::string& msg) {
      std::cout << msg << std::endl;
    }

    void printMessages() {
      std::cout << "Accessing the log" << std::endl;

      for (auto& e: m_messages) {
        std::cout << e << std::endl;
      }
    }

    void addMessage(std::string s) {
      m_messages.push_back(s);
    }

  private:
    Logger() {
      std::cout << "Logger was created." << std::endl;
    }

    ~Logger() {
      std::cout << "Logger was destructor" << std::endl;
    }

    std::vector<std::string> m_messages;
};

int main() {
  Logger::getInstance().addMessage("[LOG] message 1");
  Logger::getInstance().addMessage("[LOG] message 2");
  Logger::getInstance().addMessage("[LOG] message 3");

  Logger::getInstance().printMessages();

  return 0;
}