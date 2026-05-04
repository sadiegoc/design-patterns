#pragma once

#include "../character.hpp"

class CharacterBuilder {
  private:
    Character character;

  public:
    virtual ~CharacterBuilder() = default;

    Character build() {
      return character;
    }

    CharacterBuilder& type(CharacterType type) {
      character.type = type;
      return *this;
    }

    CharacterBuilder& id(const std::string& id) {
      character.id = id;
      return *this;
    }

    CharacterBuilder& name(const std::string& name) {
      character.name = name;
      return *this;
    }

    CharacterBuilder& weapon(const std::string& weapon) {
      character.weapon = weapon;
      return *this;
    }

    CharacterBuilder& health(int health) {
      character.health = health;
      return *this;
    }

    CharacterBuilder& mana(int mana) {
      character.mana = mana;
      return *this;
    }

    CharacterBuilder& strength(StrengthLevel strength) {
      character.strength.value = strength;
      return *this;
    }

    CharacterBuilder& defense(int defense) {
      character.defense = defense;
      return *this;
    }

    CharacterBuilder& agility(int agility) {
      character.agility = agility;
      return *this;
    }

    CharacterBuilder& intelligence(int intelligence) {
      character.intelligence = intelligence;
      return *this;
    }

    CharacterBuilder& armor(int armor) {
      character.armor = armor;
      return *this;
    }

    CharacterBuilder& level(int level) {
      character.level = level;
      return *this;
    }

    CharacterBuilder& isBoss(bool isBoss) {
      character.isBoss = isBoss;
      return *this;
    }
};
