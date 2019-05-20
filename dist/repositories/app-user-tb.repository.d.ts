import { DefaultCrudRepository } from '@loopback/repository';
import { AppUserTb } from '../models';
import { BasedeDatosDataSource } from '../datasources';
export declare class AppUserTbRepository extends DefaultCrudRepository<AppUserTb, typeof AppUserTb.prototype.id> {
    constructor(dataSource: BasedeDatosDataSource);
}
