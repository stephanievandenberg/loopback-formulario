import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { AppUserTb } from '../models';
import { AppUserTbRepository } from '../repositories';

export class AppUserTbController {
  constructor(
    @repository(AppUserTbRepository)
    public appUserTbRepository: AppUserTbRepository,
  ) { }

  @post('/app-user-tbs', {
    responses: {
      '200': {
        description: 'AppUserTb model instance',
        content: { 'application/json': { schema: { 'x-ts-type': AppUserTb } } },
      },
    },
  })
  async create(@requestBody() appUserTb: AppUserTb): Promise<AppUserTb> {
    return await this.appUserTbRepository.create(appUserTb);
  }

  @get('/app-user-tbs/count', {
    responses: {
      '200': {
        description: 'AppUserTb model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(AppUserTb)) where?: Where,
  ): Promise<Count> {
    return await this.appUserTbRepository.count(where);
  }

  @get('/app-user-tbs', {
    responses: {
      '200': {
        description: 'Array of AppUserTb model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': AppUserTb } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(AppUserTb)) filter?: Filter,
  ): Promise<AppUserTb[]> {
    return await this.appUserTbRepository.find(filter);
  }


  @get('/app-user-tbs/{id}', {
    responses: {
      '200': {
        description: 'AppUserTb model instance',
        content: { 'application/json': { schema: { 'x-ts-type': AppUserTb } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<AppUserTb> {
    return await this.appUserTbRepository.findById(id);
  }
}
