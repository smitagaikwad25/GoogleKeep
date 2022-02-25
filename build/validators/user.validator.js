"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noteValidator = exports.newUserValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var newUserValidator = function newUserValidator(req, res, next) {
  var schema = _joi["default"].object({
    fName: _joi["default"].string().min(4).required(),
    lName: _joi["default"].string().min(4).required(),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newUserValidator = newUserValidator;

var noteValidator = function noteValidator(req, res, next) {
  var schema = _joi["default"].object({
    Title: _joi["default"].string().min(4).required(),
    Descreption: _joi["default"].string().min(4).required(),
    color: _joi["default"].string()
  });

  var _schema$validate2 = schema.validate(req.body),
      error = _schema$validate2.error,
      value = _schema$validate2.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.noteValidator = noteValidator;