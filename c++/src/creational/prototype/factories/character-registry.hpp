#pragma once

#include <map>
#include <memory>
#include <functional>
#include "../character.hpp"

class CharacterRegistry {
  private:
    std::map<std::string, std::unique_ptr<Character>> characters;
  public:
    void registerCharacter(const std::string& name, Character character) {
      characters[name] = std::make_unique<Character>(character);
    }

    Character spawn(const std::string& type) const {
      return characters.at(type)->clone();
    }

    template <typename Func>
    std::vector<Character> spawnMany(
      const std::string& type,
      int quantity,
      Func configurator
    ) const {
      std::vector<Character> result;

      for (int i = 0; i < quantity; i++) {
        Character c = spawn(type);
        configurator(c, i);
        result.push_back(c);
      }

      return result;
    }
};
