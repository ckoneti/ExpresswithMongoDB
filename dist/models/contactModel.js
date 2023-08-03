"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new mongoose_1.default.Schema({
    account_id: {
        type: Number,
        requir: [true, "Please add account_id"]
    },
    limit: {
        type: Number
    },
    products: {
        type: Array,
        require: [true, "Please add products for an account_id"]
    }
});
exports.default = mongoose_1.default.model("accounts", accountSchema);
