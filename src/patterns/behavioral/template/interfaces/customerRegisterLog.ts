import { UserActionsLog } from './useActionsLog';

export class CustomerRegisterLog extends UserActionsLog {
  constructor(userName: string) {
    super(userName);
  }

  public generateHeaderLog() {
    console.log('Customer Log Date:' + new Date());
  }

  public generateBodyLog() {
    console.log('Generating Customer body log..');
  }
}
