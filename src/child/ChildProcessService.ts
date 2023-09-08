import { Injectable, Logger } from '@nestjs/common';
import { join } from 'path';
import { fork } from 'child_process';
import { existsSync } from 'fs';

@Injectable()
export class ChildProcessService {
  async forkApplication() {
    const fileName = join(__dirname, 'ChildApp.js');
    console.log(fileName);
    try {
      if (existsSync(fileName)) {
        fork(fileName);
      }
    } catch (error) {
      // TODO: Inform new relic of this error
      Logger.error(error);
    }
  }
}
