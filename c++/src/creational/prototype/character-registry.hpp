#pragma once

#include <map>
#include <memory>
#include "character.hpp"

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
};
