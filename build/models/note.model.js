"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true
  },
  Descreption: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    trim: true
  },
  isArchived: {
    type: Boolean // trim: true

  },
  isDeleted: {
    type: Boolean,
    trim: true
  },
  UserID: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Note', userSchema);

exports["default"] = _default;