"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const out_1 = require("connect-typeorm/out");
const typeorm_1 = require("./utils/typeorm");
const session = require("express-session");
const passport = require("passport");
const typeorm_2 = require("typeorm");
const gateway_adapter_1 = require("./gateway/gateway.adapter");
async function bootstrap() {
    const { PORT, COOKIE_SECRET } = process.env;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const sessionRepository = (0, typeorm_2.getRepository)(typeorm_1.Session);
    const adapter = new gateway_adapter_1.WebsocketAdapter(app);
    app.useWebSocketAdapter(adapter);
    app.setGlobalPrefix('api');
    app.enableCors({ origin: ['http://localhost:3000'], credentials: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(session({
        secret: COOKIE_SECRET,
        saveUninitialized: false,
        resave: false,
        name: 'CHAT_APP_SESSION_ID',
        cookie: {
            maxAge: 86400000,
        },
        store: new out_1.TypeormStore().connect(sessionRepository),
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    try {
        await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    }
    catch (err) {
        console.log(err);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map