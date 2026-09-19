import { test } from "node:test";
import assert from "node:assert/strict";
import {
  swipeDirection,
  wrapIndex,
} from "../src/view-models/use-pastry-carousel-view-model";

test("carousel index wraps in both directions", () => {
  assert.equal(wrapIndex(4, 4), 0);
  assert.equal(wrapIndex(-1, 4), 3);
  assert.equal(wrapIndex(9, 4), 1);
  assert.equal(wrapIndex(0, 0), 0);
});

test("swipe direction requires a meaningful gesture", () => {
  assert.equal(swipeDirection(20), 0);
  assert.equal(swipeDirection(-60), 1);
  assert.equal(swipeDirection(60), -1);
});
