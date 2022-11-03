import { Memento } from './memento';
import { UserFormMemento } from './userFormMemento';

export class UserForm {
  constructor(
    private firstName: string = '',
    private lastName: string = '',
    private age: number = 0,
    private country: string = '',
    private state: string = '',
    private city: string = ''
  ) {}

  public save(): Memento<UserForm> {
    return new UserFormMemento(
      this.firstName,
      this.lastName,
      this.age,
      this.country,
      this.state,
      this.city
    );
  }

  public restore(memento: Memento<UserForm>) {
    const { firstName, lastName, age, country, state, city } =
      memento.getState();

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.state = state;
    this.city = city;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setAge(age: number) {
    this.age = age;
  }
  setCountry(country: string) {
    this.country = country;
  }
  setState(state: string) {
    this.state = state;
  }
  setCity(city: string) {
    this.city = city;
  }
}
