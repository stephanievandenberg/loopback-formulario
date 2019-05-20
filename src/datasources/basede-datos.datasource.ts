import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './basede-datos.datasource.json';

export class BasedeDatosDataSource extends juggler.DataSource {
  static dataSourceName = 'BasedeDatos';

  constructor(
    @inject('datasources.config.BasedeDatos', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
