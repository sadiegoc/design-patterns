#include "./house-builder.hpp"
#include "./modern-house-builder.hpp"
#include "./old-house-builder.hpp"

int main() {
  House custom = HouseBuilder()
    .walls("Steel")
    .roof("Solar roof")
    .windows(30)
    .build();

  House modern = ModernHouseBuilder().windows(15).build();

  House old = OldHouseBuilder().build();

  custom.show();
  modern.show();
  old.show();

  return 0;
}