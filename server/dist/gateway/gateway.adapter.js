"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("../utils/typeorm");
const cookieParser = require("cookie-parser");
const cookie = require("cookie");
const class_transformer_1 = require("class-transformer");
class WebsocketAdapter extends platform_socket_io_1.IoAdapter {
    createIOServer(port, options) {
        const sessionRepository = (0, typeorm_1.getRepository)(typeorm_2.Session);
        const server = super.createIOServer(port, options);
        server.use(async (socket, next) => {
            console.log('Inside Websocket Adapter Middleware');
            const { cookie: clientCookie } = socket.handshake.headers;
            if (!clientCookie) {
                console.log('Client has no cookies');
                return next(new Error('Not Authenticated. No cookies were sent'));
            }
            const { CHAT_APP_SESSION_ID } = cookie.parse(clientCookie);
            if (!CHAT_APP_SESSION_ID) {
                console.log('CHAT_APP_SESSION_ID DOES NOT EXIST');
                return next(new Error('Not Authenticated'));
            }
            console.log(CHAT_APP_SESSION_ID);
            const signedCookie = cookieParser.signedCookie(CHAT_APP_SESSION_ID, process.env.COOKIE_SECRET);
            console.log(signedCookie);
            if (!signedCookie)
                return next(new Error('Error signing cookie'));
            const sessionDB = await sessionRepository.findOne({ id: signedCookie });
            const userDB = (0, class_transformer_1.plainToInstance)(typeorm_2.User, JSON.parse(sessionDB.json).passport.user);
            socket.user = userDB;
            next();
        });
        return server;
    }
}
exports.WebsocketAdapter = WebsocketAdapter;
//# sourceMappingURL=gateway.adapter.js.map