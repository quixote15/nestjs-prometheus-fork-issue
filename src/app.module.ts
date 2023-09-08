import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrometheusModule } from './PrometheusModule';
import { ChildProcessService } from './child/ChildProcessService';

@Module({
  imports: [PrometheusModule],
  controllers: [AppController],
  providers: [ChildProcessService],
})
export class AppModule {}
