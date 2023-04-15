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
exports.MessagingGateway = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const constants_1 = require("../utils/constants");
const typeorm_1 = require("../utils/typeorm");
let MessagingGateway = class MessagingGateway {
    constructor(sessions) {
        this.sessions = sessions;
    }
    handleConnection(socket, ...args) {
        console.log('New Incoming Connection');
        console.log(socket.user);
        this.sessions.setUserSocket(socket.user.id, socket);
        socket.emit('connected', { status: 'good' });
    }
    handleCreateMessage(data) {
        console.log('Create Message');
    }
    handleMessageCreateEvent(payload) {
        console.log('Inside message.create');
        console.log(payload);
        const { author, conversation: { creator, recipient }, } = payload;
        const authorSocket = this.sessions.getUserSocket(author.id);
        const recipientSocket = author.id === creator.id
            ? this.sessions.getUserSocket(recipient.id)
            : this.sessions.getUserSocket(creator.id);
        console.log(`Recipient Socket: ${JSON.stringify(recipientSocket.user)}`);
        recipientSocket.emit('onMessage', payload);
        authorSocket.emit('onMessage', payload);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessagingGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleCreateMessage", null);
__decorate([
    (0, event_emitter_1.OnEvent)('message.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeorm_1.Message]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleMessageCreateEvent", null);
MessagingGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: ['http://localhost:3000'],
            credentials: true,
        },
    }),
    __param(0, (0, common_1.Inject)(constants_1.Services.GATEWAY_SESSION_MANAGER)),
    __metadata("design:paramtypes", [Object])
], MessagingGateway);
exports.MessagingGateway = MessagingGateway;
//# sourceMappingURL=websocket.gateway.js.map