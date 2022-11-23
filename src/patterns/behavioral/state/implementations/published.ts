import { State } from '../interfaces/state';
import { ModerationState } from './moderation';

export class PublishedState extends State {
  public render(): void {
    console.log('PublishedState handles render.');
  }

  public publish(): void {
    console.log('DraftSate handles publish.');
    console.log('DraftSate does nothing');
  }
}
