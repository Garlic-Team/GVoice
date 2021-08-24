const { VoiceConnection, StreamType, createAudioPlayer, createAudioResource } = require('@discordjs/voice')

/**
 * The GVoiceConnection class
 * @extends VoiceConnection
 */
class GVoiceConnection {
    constructor() {
        Object.defineProperties(VoiceConnection.prototype, {
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
