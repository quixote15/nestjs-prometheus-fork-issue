import { Controller, Get } from '@nestjs/common';
import { Service } from './MetricService';

@Controller()
export class AppController {
  constructor(private readonly metricService: Service) {}

  @Get()
  getHello() {
    this.metricService.increment();
    return 'ok';
  }
}
