import { juggler } from '@loopback/repository';
export declare class BasedeDatosDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
