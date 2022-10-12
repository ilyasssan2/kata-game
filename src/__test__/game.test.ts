import { describe, it, expect } from "@jest/globals";
import Game from "../index";

describe("its gonna test the game class", () => {
  it("its should compute score without strike or spare", () => {
    const game = new Game();
    //calling roll 20 times
    game.roll(6);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    game.roll(6);
    game.roll(2);

    game.roll(5);
    game.roll(2);

    game.roll(7);
    game.roll(1);

    game.roll(5);
    game.roll(4);

    game.roll(5);
    game.roll(1);

    game.roll(3);
    game.roll(3);

    game.roll(5);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    const score = game.score();

    expect(score).toEqual(69);
  });

  it("its should compute score and test spare without strike", () => {
    const game = new Game();
    //calling roll 20 times
    game.roll(4);
    game.roll(6);

    game.roll(3);
    game.roll(1);

    game.roll(6);
    game.roll(2);

    game.roll(5);
    game.roll(2);

    game.roll(7);
    game.roll(1);

    game.roll(5);
    game.roll(4);

    game.roll(5);
    game.roll(1);

    game.roll(3);
    game.roll(3);

    game.roll(5);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    const score = game.score();

    expect(score).toEqual(73);
  });

  it("its should compute score and test strike without spare", () => {
    const game = new Game();
    //calling roll 20 times
    game.roll(10);
    //   game.roll(6);

    game.roll(3);
    game.roll(1);

    game.roll(6);
    game.roll(2);

    game.roll(5);
    game.roll(2);

    game.roll(7);
    game.roll(1);

    game.roll(5);
    game.roll(4);

    game.roll(5);
    game.roll(1);

    game.roll(3);
    game.roll(3);

    game.roll(5);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    const score = game.score();

    expect(score).toEqual(74);
  });

  it("its should compute score and test thenth frame that it rolls a spare", () => {
    const game = new Game();
    //calling roll 20 times
    game.roll(6);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    game.roll(6);
    game.roll(2);

    game.roll(5);
    game.roll(2);

    game.roll(7);
    game.roll(1);

    game.roll(5);
    game.roll(4);

    game.roll(5);
    game.roll(1);

    game.roll(3);
    game.roll(3);

    game.roll(5);
    game.roll(3);

    game.roll(5);
    game.roll(5);

    //extra balls
    game.roll(1);

    const score = game.score();

    expect(score).toEqual(76);
  });

  it("its should compute score and test thenth frame that it rolls a strike", () => {
    const game = new Game();
    //calling roll 20 times
    game.roll(6);
    game.roll(3);

    game.roll(3);
    game.roll(1);

    game.roll(6);
    game.roll(2);

    game.roll(5);
    game.roll(2);

    game.roll(7);
    game.roll(1);

    game.roll(5);
    game.roll(4);

    game.roll(5);
    game.roll(1);

    game.roll(3);
    game.roll(3);

    game.roll(5);
    game.roll(3);

    game.roll(10);

    //extra balls
    game.roll(1);
    game.roll(1);

    const score = game.score();

    expect(score).toEqual(77);
  });
});
