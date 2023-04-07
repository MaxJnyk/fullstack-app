"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetwayModule = void 0;
const common_1 = require("@nestjs/common");
const getway_service_1 = require("./getway.service");
const getway_controller_1 = require("./getway.controller");
let GetwayModule = class GetwayModule {
};
GetwayModule = __decorate([
    (0, common_1.Module)({
        controllers: [getway_controller_1.GetwayController],
        providers: [getway_service_1.GetwayService],
    })
], GetwayModule);
exports.GetwayModule = GetwayModule;
//# sourceMappingURL=getway.module.js.map