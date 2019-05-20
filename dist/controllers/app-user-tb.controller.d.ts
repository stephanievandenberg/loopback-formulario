import { Count, Filter, Where } from '@loopback/repository';
import { AppUserTb } from '../models';
import { AppUserTbRepository } from '../repositories';
export declare class AppUserTbController {
    appUserTbRepository: AppUserTbRepository;
    constructor(appUserTbRepository: AppUserTbRepository);
    create(appUserTb: AppUserTb): Promise<AppUserTb>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<AppUserTb[]>;
    findById(id: string): Promise<AppUserTb>;
}
