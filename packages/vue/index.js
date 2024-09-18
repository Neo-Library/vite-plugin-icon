"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDevtools = exports.icons = void 0;
var devtools_api_1 = require("@vue/devtools-api");
exports.icons = {};
var loadDevtools = function (app) {
    (0, devtools_api_1.setupDevtoolsPlugin)({
        id: "neo.vuejs.icon",
        app: app,
        label: "Icons",
    }, function (api) { });
};
exports.loadDevtools = loadDevtools;
