"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetewayModule = void 0;
const common_1 = require("@nestjs/common");
const geteway_service_1 = require("./geteway.service");
const geteway_controller_1 = require("./geteway.controller");
let GetewayModule = class GetewayModule {
};
GetewayModule = __decorate([
    (0, common_1.Module)({
        controllers: [geteway_controller_1.GetewayController],
        providers: [geteway_service_1.GetewayService]
    })
], GetewayModule);
exports.GetewayModule = GetewayModule;
//# sourceMappingURL=geteway.module.js.map