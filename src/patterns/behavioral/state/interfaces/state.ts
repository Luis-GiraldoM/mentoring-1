import { Document } from './document';

export abstract class State {
  protected context: Document = null as any;

  public setContext(context: Document) {
    this.context = context;
  }

  public abstract render(): void;

  public abstract publish(): void;
}
