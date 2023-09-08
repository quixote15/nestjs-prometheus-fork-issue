import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChildProcessService } from './child/ChildProcessService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const service = app
    .select(AppModule)
    .get(ChildProcessService, { strict: true });

  // Create a fork of this app to run in background
  await service.forkApplication();
  await app.listen(3000);
}
bootstrap();
