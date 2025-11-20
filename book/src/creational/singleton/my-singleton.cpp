#include "singleton.hpp"
#include "my-singleton.hpp"

MySingleton::Instance() {
  Singleton::Register("MySingleton", this);
}
