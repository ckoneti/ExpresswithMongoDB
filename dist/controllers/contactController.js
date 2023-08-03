"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteController = exports.putController = exports.postController = exports.getContactController = void 0;
const contactModel_1 = __importDefault(require("../models/contactModel"));
const getContactController = (req, res, nextFunction) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const checkDataExist = yield findifDataExist(id);
    if (!checkDataExist) {
        res.send(404).send("Account details not found");
    }
    else {
        res.status(200).send(checkDataExist);
    }
});
exports.getContactController = getContactController;
const postController = (req, res, nextFunction) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req body', req.body);
    const { account_id, limit, products } = req.body;
    if (!account_id || !products) {
        res.status(400).send('Bad Request, All parameters are mandatory');
    }
    else {
        const account = yield contactModel_1.default.create({
            account_id,
            limit,
            products
        });
        res.status(201).json(account);
    }
});
exports.postController = postController;
const putController = (req, res, nextFunction) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const checkDataExist = findifDataExist(id);
    if (!checkDataExist) {
        res.send(404).send("Account details not found");
    }
    else {
        const updatedAccount = yield contactModel_1.default.findOneAndUpdate();
    }
});
exports.putController = putController;
const deleteController = (req, res, nextFunction) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('id is', req.params.id);
    const id = Number(req.params.id);
    const checkDataExist = yield findifDataExist(id);
    if (!checkDataExist) {
        res.send(404).send("Account details not found");
    }
    else {
        const deleteAccount = yield contactModel_1.default.findOneAndDelete({ account_id: id });
        res.status(204).send(deleteAccount);
    }
});
exports.deleteController = deleteController;
const findifDataExist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield contactModel_1.default.find({ account_id: id });
    console.log(account, 'account');
    return account;
});
