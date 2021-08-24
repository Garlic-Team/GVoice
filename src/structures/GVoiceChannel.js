const { VoiceChannel } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice')

/**
 * The GVoiceChnanel class
 * @extends VoiceChannel
 */
class GVoiceChannel extends VoiceChannel {
    constructor() {
        Object.defineProperties(VoiceChannel.prototype, {
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

module.exports = GVoiceChannel;
