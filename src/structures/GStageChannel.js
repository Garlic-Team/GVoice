const { StageChannel } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice')

/**
 * The GStageChannel class
 * @extends StageChannel
 */
class GStageChannel {
    constructor() {
        Object.defineProperties(StageChannel.prototype, {
            join: {
                value: function() {
                    return joinVoiceChannel({
                        channelId: this.id,
                        guildId: this.guild.id,
                        adapterCreator: this.guild.voiceAdapterCreator
                    });
                }
            }
        })
    }
}

module.exports = GStageChannel;
