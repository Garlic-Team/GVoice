const { GVoiceConnection } = require("..");
const GVoiceChannel = require("../structures/GVoiceChannel");

class GVoice {
    constructor() {
        new GVoiceChannel();
        new GVoiceConnection();

        console.log('[GVoice] Loaded!')
    }
}

module.exports = GVoice;
