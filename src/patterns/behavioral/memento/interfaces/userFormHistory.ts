import { Memento } from './memento';
import { UserForm } from './userForm';

export class UserFormHistory {
  private mementos: Memento<UserForm>[] = [];

  private originator: UserForm;

  constructor(originator: UserForm) {
    this.originator = originator;
  }

  public backup(): void {
    console.log("\nCaretaker: Saving Originator's state...");

    if (this.mementos.length >= 3) {
      this.mementos.shift();
    }

    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento?.getDate()}`);
    this.originator.restore(memento!);
  }

  public showHistory(): void {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getDate());
    }
  }
}
