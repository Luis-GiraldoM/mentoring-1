import { Memento } from './memento';
import { UserForm } from './userForm';

export class UserFormMemento implements Memento<UserForm> {
  private date: Date;

  constructor(
    private firstName: string = '',
    private lastName: string = '',
    private age: number = 0,
    private country: string = '',
    private state: string = '',
    private city: string = ''
  ) {
    this.date = new Date();
  }

  getState(): UserForm {
    return new UserForm(
      this.firstName,
      this.lastName,
      this.age,
      this.country,
      this.state,
      this.city
    );
  }

  getDate(): Date {
    return this.date;
  }
}
