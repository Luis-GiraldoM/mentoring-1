import { DraftSate } from './implementations/draft';
import { Document } from './interfaces/document';

export const runStatePattern = () => {
  const document = new Document(new DraftSate());

  document.render();
  document.publish();

  document.render();
  document.publish();

  document.render();
  document.publish();
};
