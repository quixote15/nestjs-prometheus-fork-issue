import { Global, Module } from '@nestjs/common';
import {
  PrometheusModule as Prometheus,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import { Service } from './MetricService';

@Global()
@Module({
  imports: [
    Prometheus.register({
      path: '/prometheus',
      defaultMetrics: {
        enabled: false,
        config: {
          gcDurationBuckets: [0.1, 0.5, 1, 1.5],
        },
      },
    }),
  ],
  providers: [
    Service,
    makeCounterProvider({
      name: 'metric_name',
      help: 'metric_help',
    }),
  ],
  exports: [Service],
})
export class PrometheusModule {}
