type Frame = [number, number, number];
const NUMBER_OF_FRAMES = 10;
// const NUMBER_OF_FRAME_S_ROLLS = 2;
// const NUMBER_OF_MAX_BALLS = 3;

class Game {
  private frames: Frame[] = [];
  private indexs: [number, number];

  constructor() {
    this.indexs = [0, 0];
    for (let i = 0; i < NUMBER_OF_FRAMES; i++) {
      this.frames[i] = [0, 0, 0];
    }
  }
  score(): number {
    return this.frames.flat().reduce((a, b) => a + b, 0);
  }
  roll(i: number) {
    //exist if the game ended
    if (this.indexs[0] === NUMBER_OF_FRAMES) return;

    //setting the role value
    this.frames[this.indexs[0]][this.indexs[1]] = i;

    const isFrameEnded = this.indexs[1] === 1;
    const isFrameStarted = this.indexs[1] === 0;
    const isLastFrame = this.indexs[0] + 1 === NUMBER_OF_FRAMES;

    // should compute the strike
    if (this.indexs[0] !== 0) {
      const lastFrameIndex = this.indexs[0] - 1;
      if (isFrameEnded && this.frames[lastFrameIndex][0] === 10) {
        const totalFrame =
          this.frames[this.indexs[0]][0] + this.frames[this.indexs[0]][1];
        this.frames[lastFrameIndex][2] = totalFrame;
      }
    }

    // should compute the spare
    if (this.indexs[0] !== 0) {
      const lastFrameIndex = this.indexs[0] - 1;
      const totalOfLastFrame =
        this.frames[lastFrameIndex][0] + this.frames[lastFrameIndex][1];
      if (isFrameStarted && totalOfLastFrame === 10) {
        this.frames[lastFrameIndex][2] = i;
      }
    }

    //check if last frame is strike or spare
    const isLastGameSpareOrStrike =
      this.frames[this.indexs[0]][0] === 10 ||
      this.frames[this.indexs[0]][0] + this.frames[this.indexs[0]][1] === 10;
    //adjust indexs
    if (isLastFrame && isLastGameSpareOrStrike) {
      this.indexs[0] =
        this.indexs[1] === 2 ? this.indexs[0] + 1 : this.indexs[0];
      this.indexs[1] = this.indexs[1] === 2 ? 0 : this.indexs[1] + 1;
    } else {
      this.indexs[0] =
        isFrameEnded || i === 10 ? this.indexs[0] + 1 : this.indexs[0];
      this.indexs[1] = isFrameEnded || i === 10 ? 0 : 1;
    }
  }
}

export default Game;
