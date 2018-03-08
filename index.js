'use strict';

import so from 'agk-soundobject';
import { Howler } from "howler";
/** Simple wrapper for agk-soundobject to quickly create 3D sound sources.
* @constructor
	* @param {string} file - the path to the file without base directory and extension.
	* @param {number} x - Initial X coordinate of the sound
	* @param {number} y - Initial Y coordinate of the sound
	* @param {number} z - Initial Z coordinate of the sound
	* @param {boolean} loop - True if the sound should loop
	* @return {object} A Sound Source object
*/
class SoundSource {
	constructor(file, x = 0, y = 0, z = 0, loop = true) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.loop = loop;
		this.sound = so.create(file);

		this.sound.loop = loop;
		this.sound.pos(this.x, this.y, this.z);
		this.rate = 1;
		this.speed = 0;
		this.minRate = 0.8;
		this.maxRate = 1.2;
		this.toDestroy = false;
		this.rateShiftSpeed = 0.015;
		// This.sound.currentPosition = getRandomArbitrary(0, this.sound.duration);
		this.sound.currentPosition = 0;
	}

	/** Plays the sound source */
	play() {
		// This.sound.seek(0);
		this.sound.play();
	}

	/** Positions the sound source in 3D space.
	* @param {number} x - The new X coordinate of the sound
	* @param {number} y - The new Y coordinate of the sound
	* @param {number} z - The new Z coordinate of the sound
*/
	pos(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.sound.pos(this.x, this.y, this.z);
	}

	/** Empty update method */
	update() {

	}
}

export default SoundSource;
