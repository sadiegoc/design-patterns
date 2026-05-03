import { LightIntensityCommand } from './commands/light-intensity-command';
import { LightPowerCommand } from './commands/light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedrommLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const bedrommLightIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedrommLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);

smartHouseApp.addCommand('btn-3', bedrommLightIntensityCommand);
smartHouseApp.addCommand('btn-4', bathroomLightIntensityCommand);

// smartHouseApp.executeCommand('btn-1');
// smartHouseApp.undoCommand('btn-1');

// smartHouseApp.executeCommand('btn-2');
// smartHouseApp.undoCommand('btn-2');

// smartHouseApp.executeCommand('btn-3');
// smartHouseApp.undoCommand('btn-3');

// smartHouseApp.executeCommand('btn-4');
// smartHouseApp.undoCommand('btn-4');

for (let i = 100; i > -100; i--) {
  smartHouseApp.undoCommand('btn-3');
}
