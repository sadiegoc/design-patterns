#pragma once

#include <vector>

#include "entity.hpp"

class IComponentPool {
  public:
    virtual ~IComponentPool() = default;
};

template<typename T>
class ComponentPool : public IComponentPool {
  private:
    std::vector<T> m_pool;
    std::vector<bool> m_hasComponent;

  public:
    ComponentPool(int size) {
      m_pool.resize(size);
      m_hasComponent.resize(size, false);
    }

    void Add(Entity entity, const T& component) {
      m_pool[entity] = component;
      m_hasComponent[entity] = true;
    }

    void Remove(Entity entity) {
      m_hasComponent[entity] = false;
    }

    bool Has(Entity entity) {
      return m_hasComponent[entity];
    }

    T* Get(Entity entity) {
      return &m_pool[entity];
    }
};
