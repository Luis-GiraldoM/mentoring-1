import { UserActionsLog } from './useActionsLog';

export class CompanyReceiptLog extends UserActionsLog {
  constructor(userName: string) {
    super(userName);
  }

  public generateBodyLog() {
    console.log('Generating Company Receipt body log..');
  }
}
