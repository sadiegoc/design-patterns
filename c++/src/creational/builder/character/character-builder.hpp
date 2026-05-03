#pragma once

#include "./character.hpp"

class CharacterBuilder {
  private:
    Character character;

  public:
    virtual ~CharacterBuilder() = default;

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

    CharacterBuilder& strength(int strength) {
      character.strength = strength;
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

    Character build() {
      return character;
    }
};
