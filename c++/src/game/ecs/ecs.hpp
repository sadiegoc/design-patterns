#pragma once

#include <unordered_map>
#include <memory>
#include <typeindex>
#include <set>

#include "component-pool.hpp"

class ECS {
  private:
    using TypeIndex = std::type_index;
    using ComponentPoolMap = std::unordered_map<TypeIndex, std::unique_ptr<IComponentPool>>;

    ComponentPoolMap m_componentPools;

    std::set<Entity> m_entities;

    Entity m_nextEntity = 0;

    const int MAX_ENTITIES;

    template<typename T>
    ComponentPool<T>* GetComponentPool() {
      TypeIndex type = std::type_index(typeid(T));

      auto it = m_componentPools.find(type);

      return static_cast<ComponentPool<T>*>(it->second.get());
    }

  public:
    ECS(int MAX_ENTITIES): MAX_ENTITIES(MAX_ENTITIES) {}

    Entity CreateEntity() {
      Entity entity = m_nextEntity++;
      m_entities.insert(entity);
      return entity;
    }

    const std::set<Entity>& GetEntities() const {
      return m_entities;
    }

    void DestroyEntity(Entity entity) {
      m_entities.erase(entity);

      // depois podemos remover os componentes
    }

    template<typename T>
    void RegisterComponent() {
      TypeIndex type = std::type_index(typeid(T));

      m_componentPools.insert({
        type,
        std::make_unique<ComponentPool<T>>(MAX_ENTITIES)
      });
    }

    template<typename T>
    void AddComponent(Entity entity, const T& component) {
      GetComponentPool<T>()->Add(entity, component);
    }

    template<typename T>
    void RemoveComponent(Entity entity) {
      GetComponentPool<T>()->Remove(entity);
    }

    template<typename T>
    T& GetComponent(Entity entity) {
      return *GetComponentPool<T>()->Get(entity);
    }

    template<typename T>
    bool HasComponent(Entity entity) {
      return GetComponent<T>()->Has(entity);
    }

    template<typename... TComponents>
    bool HasComponents(Entity entity) {
      return (HasComponent<TComponents>(entity) && ...);
    }
};
