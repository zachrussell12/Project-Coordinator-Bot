const Discord = require('discord.js');


function printEmebed(projName, projDescription, nameString, completionDate, createdDate, projectManager, projectstate){
                        
    var tempSplit = projName.split(' ');

    for(i = 0; i < tempSplit.length; i++){
        tempSplit[i] = tempSplit[i][0].toUpperCase() + tempSplit[i].substr(1);
    }

    projName = '';

    for(i = 0; i < tempSplit.length; i++){
        projName += tempSplit[i] + ' ';
    }

    if(projectstate.includes('-')){
        var tempSplitTwo = projectstate.split('-');

        for(r = 0; r < tempSplitTwo.length; r++){
            tempSplitTwo[r] = tempSplitTwo[r][0].toUpperCase() + tempSplitTwo[r].substr(1);
        }

        projectstate = '';

        for(k = 0; k < tempSplitTwo.length; k++){
            projectstate += tempSplitTwo[k] + ' ';
        }
    }



    console.log('Called');
    
    if(nameString == null || nameString == 'null'){
        const projEmbed = new Discord.MessageEmbed()
            .setColor('#059618')
            .setTitle(projName)
            //.setURL('https://discord.js.org/')
            .setAuthor('Project Information', 'http://clipart-library.com/images_k/green-checkmark-transparent-background/green-checkmark-transparent-background-12.png', 'https://discord.js.org')
            .setDescription(projDescription)
            //.setThumbnail('https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif')
            .addFields(
                {name: 'Project Created on: ', value: createdDate},
                {name: 'Project Needs to be Completed By: ', value: completionDate}
            )
            .addFields(
                {name: 'Project Manager: ', value: projectManager}
            )
            .addFields(
                { name: 'Project State: ', value: projectstate, inline: true },
            )
            .setImage('')
            .setTimestamp()
            .setFooter('Created by Project Coordinator Bot',);

        return projEmbed;
    }
    else{
        const projEmbedNames = new Discord.MessageEmbed()
            .setColor('#059618')
            .setTitle(projName)
            //.setURL('https://discord.js.org/')
            .setAuthor('Project Information', 'http://clipart-library.com/images_k/green-checkmark-transparent-background/green-checkmark-transparent-background-12.png', 'https://discord.js.org')
            .setDescription(projDescription)
            //.setThumbnail('https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif')
            .addFields(
                {name: 'Project Created on: ', value: createdDate},
                {name: 'Project Needs to be Completed By: ', value: completionDate}
            )
            .addFields(
                {name: 'Project Manager: ', value: projectManager}
            )
            .addFields(
                { name: 'Team Members: ', value: nameString, inline: true },
            )
            .addFields(
                { name: 'Project State: ', value: projectstate, inline: true },
            )
            .setImage('')
            .setTimestamp()
            .setFooter('Created by Project Coordinator Bot',);

        return projEmbedNames;
    }
}

function printUrgent(projName, projDescription, nameString, completionDate, createdDate, projectManager){
                        
    var tempSplit = projName.split(' ');

    for(i = 0; i < tempSplit.length; i++){
        tempSplit[i] = tempSplit[i][0].toUpperCase() + tempSplit[i].substr(1);
    }

    projName = '';

    for(i = 0; i < tempSplit.length; i++){
        projName += tempSplit[i] + ' ';
    }

    console.log('Called');
    
    if(nameString == null || nameString == 'null'){
        const projEmbed = new Discord.MessageEmbed()
            .setColor('#e01e00')
            .setTitle(projName)
            //.setURL('https://discord.js.org/')
            .setAuthor('Project Information', 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-siren-alarm-icon-png-image_1609902.jpg', 'https://discord.js.org')
            .setDescription(projDescription)
            //.setThumbnail('https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif')
            .addFields(
                {name: 'Project Created on: ', value: createdDate},
                {name: 'Project Needs to be Completed By: ', value: completionDate}
            )
            .addFields(
                {name: 'Project Manager: ', value: projectManager}
            )
            .setImage('')
            .setTimestamp()
            .setFooter('Created by Project Coordinator Bot',);

        return projEmbed;
    }
    else{
        const projEmbedNames = new Discord.MessageEmbed()
            .setColor('#e01e00')
            .setTitle(projName)
            //.setURL('https://discord.js.org/')
            .setAuthor('Project Information', 'https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-siren-alarm-icon-png-image_1609902.jpg', 'https://discord.js.org')
            .setDescription(projDescription)
            //.setThumbnail('https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif')
            .addFields(
                {name: 'Project Created on: ', value: createdDate},
                {name: 'Project Needs to be Completed By: ', value: completionDate}
            )
            .addFields(
                {name: 'Project Manager: ', value: projectManager}
            )
            .addFields(
                { name: 'Team members: ', value: nameString, inline: true },
            )
            .setImage('')
            .setTimestamp()
            .setFooter('Created by Project Coordinator Bot',);

        return projEmbedNames;
    }
}

function printCommands(){

    var embedArray = new Array(6);
    
    const createNewcommand = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Create New Command:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!createnew <projectName>**', value: 'This command starts the process of creating a new project. <projectName> is where the name of the project goes in the command. Once the project is created all team members will have a role with the project name and their own channels to collaborate in that only they have access to.'}
        )

    const deletecommand = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Delete Command:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!delete <projectName>**', value: 'This command will delete a project from the database. If it does not exist it will tell you. <projectName> is where the name of the project goes in the command.'}
        )

    const updatecommand = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Update Command:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!update**', value: 'The update command allows you to change one of the fields of a project that is already located in the database. *Simply running !update will start the process.*'}
        )

    const progresscommands = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Progress Command:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!progress**', value:'This command progresses the project state. A project starts with the state of \'Created\' and can progress to -> \'In Planning\' -> \'In Development\' -> \'Finished\''},
            {name: '**\\❗Important Note: **', value:'This command can only be used inside a project\'s designated text channel.'},
        )


    const displaycommands = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Display Commands:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!display created**', value:'Displays all projects in the recently created category.', inline: true},
            {name: '**\\➡️!display in-planning**', value: 'Displays all projecs in the planning stage.', inline: true},
            {name: '**\\➡️!display in-development**', value:'Displays all project in the development stage.', inline: true},
            {name: '**\\➡️!display finished**', value: 'Displays all projects that have been scompleted.', inline: true},
            {name: '**\\➡️!display all**', value: 'Displays all the projects in the database.', inline: true}
        )

    const remindcommands = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Remind Command:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!remind**', value:'This command allows you to make a custom reminder for yourself. The bot will have you pick a date and remind you at 10:00am on that day.'},
            {name: '**\\❗Important Note: **', value:'This command can only be used inside a project\'s designated text channel.'},
        )

    const notecommands = new Discord.MessageEmbed()
        .setColor('#166bf5')
        .setTitle('Note Commands:')
        .setAuthor('Commands', 'https://betanews.com/wp-content/uploads/2015/05/PSReadLine200-175.png?w=144', 'https://discord.js.org')
        .addFields(
            {name: '**\\➡️!note**', value:'This command allows you to make a note for the project for you and others to see. You can use this to mark when certain items are completed or leave other important information.', inline: true},
            {name: '**\\➡️!printnotes**', value:'This command allows you to print out all notes related to the project you are in.', inline: true},

            {name: '**\\❗Important Note: **', value:'This command can only be used inside a project\'s designated text channel.'},
        )

    embedArray[0] = createNewcommand;
    embedArray[1] = deletecommand;
    embedArray[2] = updatecommand;
    embedArray[3] = progresscommands;
    embedArray[4] = displaycommands;
    embedArray[5] = remindcommands;
    embedArray[6] = notecommands;

    return embedArray;

}

function printReminder(reminder){
    const remindEmbed = new Discord.MessageEmbed()
        .setColor('#d9b534')
        .setTitle('Reminder')
        .setAuthor('Remind Message', 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/bell-icon.png', 'https://discord.js.org')
        .addFields(
            {name: `**${reminder.reminderName}**`, value: `${reminder.remindNote}`}
        )
        .setTimestamp()
        .setFooter('Created by Project Coordinatior Bot',);

    return remindEmbed;
}

function printNote(user, date, note){
    const noteEmbed = new Discord.MessageEmbed()
        .setColor('#44db86')
        .setAuthor('Note', 'https://www.pngrepo.com/png/99586/180/note.png', 'https://discord.js.org')
        .addFields(
            {name: 'Created by: ', value: `${user}`, inline: true},
            {name: `Made on: `, value: `${date}`, inline: true},
            {name: 'Note:', value: `${note}`}
        )
        .setTimestamp()
        .setFooter('Created by Project Coordinator Bot',);

    return noteEmbed;

}

module.exports = {printEmebed, printCommands, printReminder, printUrgent, printNote};