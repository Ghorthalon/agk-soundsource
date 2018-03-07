# AGK-SoundSource

## Quick way to create 3D sound Sources using AGK-SoundObject

If you want to play 3D sounds in your game this is the quickest method to do this.

## Installation

Using NPM:
npm install agk-soundsource

## Usage
import SoundSource from "agk-soundsource";

// Look at agk-soundobject to see how the base directory and extension can be changed. For now, it assumes the sounds are in ./sounds/ and the extension is .webm.
// Load meow.webm from the ./sounds/ folder at coordinates 5, 5, 5 and loop it.

const source = new SoundSource("meow", 5, 5, 5, true);
// play the source
source.play();
// Update the position to 10, 10, 10
source.pos(10, 10, 10);
// to update listener position, use agk-soundobject

## Contributing

This thing doesn't do much yet. It will eventually get more functionality. If you have ideas, feel free to add them and PR.

## License

This code is MIT licensed.