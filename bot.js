import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as showActivity from './commands/showActivity.js';

config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once(Events.ClientReady, () => {
    console.log('Ready!');
});

client.on(Events.InteractionCreate, handleInteraction);

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    if (commandName === "activity") {
        await showActivity.execute(interaction);
    }
}

client.on(Events.MessageCreate, async (message) => {
    console.log(message);
    console.log(message.content);
    if (message.content === '!activity') {
        await showActivity.execute(message);
    }
});

client.login(process.env.TOKEN);