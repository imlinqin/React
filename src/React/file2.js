"use strict";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _item = item;
var Component = _item.component;
var title = _item.title;
var customIcon = _item.customIcon;
var icon = _item.icon;
var isClone = _item.isClone;
var
// href,
className = _item.className;

var otherProps = _objectWithoutProperties(_item, ["component", "title", "customIcon", "icon", "isClone", "className"]);

