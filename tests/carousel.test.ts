import { test } from "node:test";
import assert from "node:assert/strict";
import {
  swipeDirection,
  wrapIndex,
  arcOffset,
} from "../src/view-models/use-pastry-carousel-view-model";

test("carousel index wraps in both directions", () => {
  assert.equal(wrapIndex(4, 4), 0);
  assert.equal(wrapIndex(-1, 4), 3);
  assert.equal(wrapIndex(9, 4), 1);
  assert.equal(wrapIndex(0, 0), 0);
});

test("seven-item arc keeps immediate neighbors across the loop seam", () => {
  assert.equal(arcOffset(6, 0, 7), -1);
  assert.equal(arcOffset(0, 6, 7), 1);
  for (let active = 0; active < 7; active++) {
    const slots = Array.from({ length: 7 }, (_, i) => arcOffset(i, active, 7));
    assert.deepEqual(slots.sort((a, b) => a - b), [-3, -2, -1, 0, 1, 2, 3]);
  }
});

test("swipe direction requires a meaningful gesture", () => {
  assert.equal(swipeDirection(20), 0);
  assert.equal(swipeDirection(-60), 1);
  assert.equal(swipeDirection(60), -1);
});
