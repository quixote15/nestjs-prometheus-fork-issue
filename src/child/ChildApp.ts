import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { setTimeout } from 'timers/promises';
import { AppModule } from '../app.module';
import { Service } from '../MetricService';
import { PrometheusModule } from '../PrometheusModule';
const CONSUMER_NAME = `[APP-DEFAULT-BACKGROUND]`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.init();

  Logger.log('Child Application running...', CONSUMER_NAME);
  await setTimeout(500);
  const service = app.select(PrometheusModule).get(Service, { strict: true });
  console.log(service);
  let i = 0;
  while (true) {
    console.log('incrementing prometheus counter in background... ' + i++);
    service.increment();
    await setTimeout(500);
  }
}

bootstrap();
