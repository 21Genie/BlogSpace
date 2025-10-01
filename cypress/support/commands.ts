import * as loginCommands from './commands/common';
import * as profileCommands from './commands/profile';

Cypress.Commands.addAll(loginCommands);
Cypress.Commands.addAll(profileCommands);

export {};
