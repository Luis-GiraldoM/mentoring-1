import { UserForm } from './interfaces/userForm';
import { UserFormHistory } from './interfaces/userFormHistory';

export const runMementoPattern = () => {
  const userForm = new UserForm();
  const userFormHistory = new UserFormHistory(userForm);

  userFormHistory.backup();

  userForm.setFirstName('Lucho');
  userForm.setLastName('Giraldo');
  userForm.setAge(26);

  userFormHistory.backup();

  userForm.setCountry('Colombia');
  userForm.setCity('Bello');

  userFormHistory.backup();

  userForm.setState('Antioquia');
  userForm.setFirstName('Santiagos');
  userForm.setLastName('Sánchez y López');

  userFormHistory.backup();

  userFormHistory.showHistory();

  console.log('UserForm Current State', userForm);

  userFormHistory.undo();

  console.log('UserForm Current State', userForm);

  userFormHistory.undo();

  console.log('UserForm Current State', userForm);

  userFormHistory.undo();

  console.log('UserForm Current State', userForm);

  userFormHistory.showHistory();

  userFormHistory.undo();

  console.log('UserForm Current State', userForm);
};
