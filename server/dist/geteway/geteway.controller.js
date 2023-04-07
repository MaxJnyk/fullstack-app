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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetewayController = void 0;
const common_1 = require("@nestjs/common");
const geteway_service_1 = require("./geteway.service");
let GetewayController = class GetewayController {
    constructor(getewayService) {
        this.getewayService = getewayService;
    }
};
GetewayController = __decorate([
    (0, common_1.Controller)('geteway'),
    __metadata("design:paramtypes", [geteway_service_1.GetewayService])
], GetewayController);
exports.GetewayController = GetewayController;
//# sourceMappingURL=geteway.controller.js.map