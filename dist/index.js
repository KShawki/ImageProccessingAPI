"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("./routes/index"));
// initalize the express server
var app = (0, express_1.default)();
var PORT = 3000 || process.env.PORT;
app.listen(PORT, function () {
    console.log("Server is running on: http://localhost:".concat(PORT));
});
// parsing incoming JSON format & Logging stats
app.use(body_parser_1.default.json(), (0, morgan_1.default)('dev'));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
app.use('/resize', index_1.default);
exports.default = app;
