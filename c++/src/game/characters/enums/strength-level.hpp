#pragma once

#include <string>

enum class StrengthLevel {
  Low    = 10,
  Medium = 50,
  High   = 100,
};

struct Strength {
  StrengthLevel value;

  int toInt() const {
    return static_cast<int>(value);
  }
  
  std::string toString() const {
    switch (value) {
      case StrengthLevel::Low:    return "Low";
      case StrengthLevel::Medium: return "Medium";
      case StrengthLevel::High:   return "High";
      default:                    return "Unknown";
    }
  }
};
