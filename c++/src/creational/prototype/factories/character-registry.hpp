#pragma once

#include <map>
#include <memory>
#include <functional>
#include "../character.hpp"
#include "../enums/character.hpp"

class CharacterRegistry {
  private:
    std::map<CharacterType, std::unique_ptr<Character>> characters;

  public:
    void registerCharacter(CharacterType type, Character character) {
      characters[type] = std::make_unique<Character>(character);
    }

    Character spawn(CharacterType type) const {
      return characters.at(type)->clone();
    }
    
    template <typename Func>
    std::vector<Character> spawnMany(
      CharacterType type,
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
