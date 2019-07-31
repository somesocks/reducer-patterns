"use strict";
/** @namespace reducer-patterns */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConditionalReducer_1 = __importDefault(require("./ConditionalReducer"));
exports.ConditionalReducer = ConditionalReducer_1.default;
var InitState_1 = __importDefault(require("./InitState"));
exports.InitState = InitState_1.default;
var PostprocessState_1 = __importDefault(require("./PostprocessState"));
exports.PostprocessState = PostprocessState_1.default;
var SeriesReducer_1 = __importDefault(require("./SeriesReducer"));
exports.SeriesReducer = SeriesReducer_1.default;
var SwitchReducer_1 = __importDefault(require("./SwitchReducer"));
exports.SwitchReducer = SwitchReducer_1.default;
var async_1 = __importDefault(require("./async"));
exports.async = async_1.default;
