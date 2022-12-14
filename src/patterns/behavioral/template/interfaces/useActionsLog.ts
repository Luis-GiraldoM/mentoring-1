export abstract class UserActionsLog {
  private userName: string;
  private logCreated: boolean = false;

  constructor(userName: string) {
    this.createLogFile();
    this.userName = userName;
  }

  // Se puede sobreescribir
  generateHeaderLog() {
    console.log('Log Date:' + new Date());
  }

  // Siempre se debe implementar
  abstract generateBodyLog(): void;

  // Se puede sobreescribir
  generateBottomLog() {
    console.log('Action executed by:' + this.userName);
  }

  // Nunca se sobreescribe
  generateLog() {
    this.generateHeaderLog();
    this.generateBodyLog();
    this.generateBottomLog();
    this.verifyLogFile();
  }

  private createLogFile() {
    console.log('Creating log file....');
  }

  private verifyLogFile() {
    console.log('Verifying if the ' + 'file and log was created.');
    this.logCreated = true;
  }

  isLogCreated(): boolean {
    return this.logCreated;
  }
}
