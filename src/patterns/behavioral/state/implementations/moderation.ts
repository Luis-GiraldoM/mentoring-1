import { State } from '../interfaces/state';
import { DraftSate } from './draft';
import { PublishedState } from './published';

export class ModerationState extends State {
  public render(): void {
    console.log('ModerationState handles render.');
  }

  public publish(): void {
    console.log('ModerationState handles publish.');
    console.log('ModerationState wants to change the state of the context.');
    this.context.transitionTo(new PublishedState());
  }
}
