import { EmailValidatorFnProtocol, EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

const email = 'diegosa@gmailcom';

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log('É válido (CLASS)');
  } else {
    console.log('É inválido (CLASS)');
  }
}

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
  if (emailValidator(email)) {
    console.log('É válido (FN)');
  } else {
    console.log('É inválido (FN)');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);