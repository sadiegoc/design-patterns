#include "singleton.hpp"

Singleton* Singleton::_instance = 0;

Singleton* Singleton::Instance () {
  if (_instance == 0) {
    const char* singletonName = getenv("SINGLETON");

    _instance = Lookup(singletonName);
  }

  return _instance;
}
