import { DefaultCrudRepository } from '@loopback/repository';
import { AppUserTb } from '../models';
import { BasedeDatosDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class AppUserTbRepository extends DefaultCrudRepository<
  AppUserTb,
  typeof AppUserTb.prototype.id
  > {
  constructor(
    @inject('datasources.BasedeDatos') dataSource: BasedeDatosDataSource,
  ) {
    super(AppUserTb, dataSource);
  }
}
