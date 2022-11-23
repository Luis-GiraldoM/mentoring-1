import { State } from '../interfaces/state';
import { ModerationState } from './moderation';

export class DraftSate extends State {
  public render(): void {
    console.log('Draft handles render.');
  }

  public publish(): void {
    console.log('DraftSate handles publish.');
    console.log('DraftSate wants to change the state of the context.');
    this.context.transitionTo(new ModerationState());
  }
}
