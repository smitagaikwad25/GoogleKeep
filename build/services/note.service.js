"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNote = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _note = _interopRequireDefault(require("../models/note.model"));

//create new user
var addNote = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body.UserID = body.data.id;
            console.log("userId", body.UserID);
            _context.next = 4;
            return _note["default"].create(body);

          case 4:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addNote(_x) {
    return _ref.apply(this, arguments);
  };
}(); // //get all users
// export const getAllUsers = async () => {
//     const data = await User.find();
//     return data;
// };
// //update single user
// export const updateUser = async (_id, body) => {
//     const data = await User.findByIdAndUpdate(
//         {
//             _id
//         },
//         body,
//         {
//             new: true
//         }
//     );
//     return data;
// };
// //delete single user
// export const deleteUser = async (id) => {
//     await User.findByIdAndDelete(id);
//     return '';
// };
// //get single user
// export const getUser = async (id) => {
//     const data = await User.findById(id);
//     return data;
// };


exports.addNote = addNote;