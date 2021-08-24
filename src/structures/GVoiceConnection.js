const { VoiceConnection, StreamType, createAudioPlayer } = require('@discordjs/voice')

/**
 * The GVoiceConnection class
 * @extends VoiceConnection
 */
class GVoiceConnection extends VoiceConnection {
    constructor() {
        Object.defineProperties(GVoiceConnection.prototype, {
            play: {
                value: function (stream) {
                    const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
                    const player = createAudioPlayer();

                    player.play(resource);
                    this.subscribe(player);

                    return player;
                }
            }
        })
    }
}

module.exports = GVoiceConnection;
