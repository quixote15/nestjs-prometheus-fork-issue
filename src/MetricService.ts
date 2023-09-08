// service.ts
import { Injectable } from '@nestjs/common';
import { Counter } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class Service {
  constructor(@InjectMetric('metric_name') public counter: Counter<string>) {}

  increment() {
    this.counter.inc(1);
  }
}
