import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("activity")
    .setDescription("Show the past activity of all users");

export const execute = async (interaction) => {
    await interaction.reply("This is the activity of all users");
    
}