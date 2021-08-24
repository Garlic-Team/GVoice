const GVoiceConnection = require('../structures/GVoiceConnection');
const GVoiceChannel = require('../structures/GVoiceChannel');
const GStageChannel = require('../structures/GStageChannel');

class GVoice {
    constructor() {
        new GVoiceChannel();
        new GStageChannel();
        new GVoiceConnection();

        console.log('[GVoice] Loaded!')
    }
}

module.exports = GVoice;
