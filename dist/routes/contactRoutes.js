"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controllers/contactController");
const router = express_1.default.Router();
//get request
router.get('/:id', contactController_1.getContactController);
// post
router.post('/', contactController_1.postController);
// update contact details
router.put('/:id', contactController_1.putController);
// deleted contact details
router.delete('/:id', contactController_1.deleteController);
exports.default = router;
