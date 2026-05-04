#pragma once

#include <string>

enum class CharacterType {
  Warrior,
  Mage,
  Assassin,
  Custom,
};

inline std::string toString(CharacterType type) {
  switch (type) {
    case CharacterType::Warrior: return "warrior";
    case CharacterType::Mage: return "mage";
    case CharacterType::Assassin: return "assassin";
    case CharacterType::Custom: return "character";
  }
  return "unknown";
}
