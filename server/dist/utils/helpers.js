"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
async function hashPassword(rawPassword) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawPassword, salt);
}
exports.hashPassword = hashPassword;
async function compareHash(rawPassword, hashedPassword) {
    return bcrypt.compare(rawPassword, hashedPassword);
}
exports.compareHash = compareHash;
//# sourceMappingURL=helpers.js.map