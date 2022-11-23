import { State } from './state';

export class Document {
  private state: State = null as any;

  constructor(state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public render(): void {
    this.state.render();
  }

  public publish(): void {
    this.state.publish();
  }
}
