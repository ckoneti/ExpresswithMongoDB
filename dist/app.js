"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const app = (0, express_1.default)();
require("dotenv/config");
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
(0, dbConnection_1.default)();
app.use(express_1.default.json());
app.use('/api/account', contactRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});
