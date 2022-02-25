"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

//create new user
var userRegistration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var saltRounds, hashedPassword, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            saltRounds = 10;
            hashedPassword = _bcrypt["default"].hashSync(body.password, saltRounds);
            body.password = hashedPassword;
            _context.next = 5;
            return _user["default"].create(body);

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.userRegistration = userRegistration;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var searchData, isMatch, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findOne({
              email: body.email
            });

          case 2:
            searchData = _context2.sent;

            if (!(body.email == searchData.email)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 6;
            return _bcrypt["default"].compare(body.password, searchData.password);

          case 6:
            isMatch = _context2.sent;

            if (!(isMatch == true)) {
              _context2.next = 12;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              "email": searchData.email,
              "id": searchData._id
            }, process.env.SECRET_KEY);
            return _context2.abrupt("return", token);

          case 12:
            throw new Error('password doesnt match');

          case 13:
            _context2.next = 16;
            break;

          case 15:
            throw new Error('email id doesnt match');

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;