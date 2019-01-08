'use strict';
const {$, setup, stacked, unstacked, uid} = require('../core.js');

const id = uid();

setup.push(stacked(id));

Object.defineProperty(exports, '__esModule', {value: true}).default = (reducer, value) => {
  const {i, stack, unknown, update} = unstacked(id);
  if (unknown)
    stack.push([
      $(value),
      action => {
        value = reducer(value, action);
        stack[i][0] = value;
        update();
      }
    ]);
  return stack[i];
};
