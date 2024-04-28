# Game of Life

Game of Life implementation for the Test Driven Development course at the University of Helsinki.

The playlist with the two part video can be found here: [Link](https://www.youtube.com/playlist?list=PL9ZVa_cTlhnjB_qiIJCYW1PDUYEQbZ_4N)

I had problems during the first recording session. After one our the recorded image froze without me noticing. Therfore I re-recorded and retyped the second half based on my previous implementation.
The implementation from the first attempt can be found in the branch `failed-recording`.

For an example execution of the game call:

```
node . ./test/rle/blinker.rle 3
```
## Prerequisites

You'll need a recent [Node.js](https://nodejs.org/) version. Then download this project's dependencies with:

    npm install

## Developing

Run tests once

    npm run test

Run tests continuously

    npm run autotest

Code reformat

    npm run format
