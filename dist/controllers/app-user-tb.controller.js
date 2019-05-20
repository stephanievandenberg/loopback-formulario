"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AppUserTbController = class AppUserTbController {
    constructor(appUserTbRepository) {
        this.appUserTbRepository = appUserTbRepository;
    }
    async create(appUserTb) {
        return await this.appUserTbRepository.create(appUserTb);
    }
    async count(where) {
        return await this.appUserTbRepository.count(where);
    }
    async find(filter) {
        return await this.appUserTbRepository.find(filter);
    }
    async findById(id) {
        return await this.appUserTbRepository.findById(id);
    }
};
__decorate([
    rest_1.post('/app-user-tbs', {
        responses: {
            '200': {
                description: 'AppUserTb model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.AppUserTb } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.AppUserTb]),
    __metadata("design:returntype", Promise)
], AppUserTbController.prototype, "create", null);
__decorate([
    rest_1.get('/app-user-tbs/count', {
        responses: {
            '200': {
                description: 'AppUserTb model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.AppUserTb))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUserTbController.prototype, "count", null);
__decorate([
    rest_1.get('/app-user-tbs', {
        responses: {
            '200': {
                description: 'Array of AppUserTb model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.AppUserTb } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.AppUserTb))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUserTbController.prototype, "find", null);
__decorate([
    rest_1.get('/app-user-tbs/{id}', {
        responses: {
            '200': {
                description: 'AppUserTb model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.AppUserTb } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppUserTbController.prototype, "findById", null);
AppUserTbController = __decorate([
    __param(0, repository_1.repository(repositories_1.AppUserTbRepository)),
    __metadata("design:paramtypes", [repositories_1.AppUserTbRepository])
], AppUserTbController);
exports.AppUserTbController = AppUserTbController;
//# sourceMappingURL=app-user-tb.controller.js.map