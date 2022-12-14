import { CompanyReceiptLog } from './interfaces/companyReceiptLog';
import { CustomerRegisterLog } from './interfaces/customerRegisterLog';
import { UserActionsLog } from './interfaces/useActionsLog';

const logUserActions = (logger: UserActionsLog) => {
  logger.generateLog();

  /*if (logger instanceof CompanyReceiptLog) {
    const customerLog: UserActionsLog = new CustomerRegisterLog('USER_NAME');
    customerLog.generateLog();
  } else if (logger instanceof CustomerRegisterLog) {
    const companyReceiptLog: UserActionsLog = new CompanyReceiptLog(
      'USER_NAME'
    );
    companyReceiptLog.generateLog();
  }*/
};

export const runTemplatePattern = () => {
  const USER_NAME: string = 'Juggy';

  const customerLog: UserActionsLog = new CustomerRegisterLog(USER_NAME);

  logUserActions(customerLog);
  console.log('----------------------------------------------------------');
  const companyReceiptLog: UserActionsLog = new CompanyReceiptLog(USER_NAME);
  logUserActions(companyReceiptLog);
};
