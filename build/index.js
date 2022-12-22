"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = 3000 || process.env.PORT;
app.listen(PORT, function () {
    console.log("Server is running on: http://localhost:".concat(PORT));
});
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
app.get('/Hello', function (req, res) {
    console.log(req.query);
    res.send('Hello, its khaled');
});
