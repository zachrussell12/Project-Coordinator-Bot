const { Message } = require('discord.js');
var mysql = require('mysql');
const printer = require('./printembed');
var db = null;

function login(){
    
    var database = mysql.createConnection({
        host: 'host.docker.internal',
        user: 'projBot',
        password: '**********',
        database: '**********',
        port: '****'
    });

    database.connect(function(err){
        if(err) throw err;
        console.log("Connected!");
    });

    db = database;
}

function insertNewProject(serverID, projName, projDesc, datecreated, datedue, team, projectManager){

    const insertStatement = `INSERT INTO projects (serverID, projectname, projectdescription, datecreated, datedue, projectmanager, teammembers, projectstate) VALUES ('${serverID}', '${projName.toLowerCase()}', '${projDesc}',  '${datecreated}', '${datedue}', '${projectManager}', '${team}', 'created')`;

    try{        
        db.query(insertStatement, function(err){
            if(err)console.log("Some error occured with the insert new project query", err);

        });
        return "The project was successfully added to the database.";
    }
    catch(error){
        return "Something went wrong adding that project to the database. Let's try again but ensure everything is correct.";
    }

}

function insertNewNote(note, serverID, projName){

    const insertNoteStatement = `UPDATE projects SET notes = '${note}' WHERE serverID = '${serverID}' AND projectname = '${projName}'`;

    try{
        db.query(insertNoteStatement, function(err){
            if(err){
                console.log("Some error occured adding a note", err);
            }
        });

        return "Added the note to the project.";
    }
    catch(err){
        return "Something went wrong adding that note to the database. Can you try adding it again please?";
    }
}

function getNotes(serverID, projName, callback){

    const selectNoteStatement = `SELECT * FROM projects WHERE serverID = '${serverID}' AND projectname = '${projName}'`;

    try{
        db.query(selectNoteStatement, function(err, result){
            if(err){
                console.log("Some error occured adding a note", err);
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
    }
    catch(err){
        return "Something went wrong adding that note to the database. Can you try adding it again please?";
    }
}

function displayProjects(projState, serverID, callback){
    
    var displayStatement = '';

    if(projState == null){
        displayStatement = `SELECT * FROM projects WHERE serverID = '${serverID}'`;
    }
    else{
        displayStatement = `SELECT * FROM projects WHERE projectstate = '${projState}' AND serverID = '${serverID}';`;
    }

    try{
        db.query(displayStatement,  function(err, result){
            if(err){
                callback(err, null);
            }
            else{
                //console.log('Selected successfull', result);                
                callback(null, result);
            }
            
        });
    }
    catch(err){
        console.log(err);
        return "Something went wrong displaying those projects. Check your command and try again."
    }
}

function dueAlert(projState, serverID, dueDate, callback){

    var alertStatement = '';

    if(projState == null){
        alertStatement = `SELECT * FROM projects WHERE serverID = '${serverID}' AND datedue = '${dueDate}'`;
    }
    else{
        alertStatement = `SELECT * FROM projects WHERE projectstate = '${projState}' AND serverID = '${serverID}' AND datedue = '${dueDate}`;
    }

    try{
        db.query(alertStatement,  function(err, result){
            if(err){
                callback(err, null);
            }
            else{
                //console.log('Selected successfull', result);                
                callback(null, result);
            }
            
        });
    }
    catch(err){
        console.log(err);
        return "Something went wrong displaying those projects. Check your command and try again."
    }
}

function deleteProject(serverID, name, callback){

    var deleteStatement = `DELETE FROM projects WHERE projectname = '${name}' AND serverID = '${serverID}'`;
    console.log(deleteStatement);
    db.query(deleteStatement, function(err, result){
        if(err){
            console.log(err);
            var tempS = "Something went wrong deleting that project.";
            callback(err, tempS);
        }
        else{
            var tempSS = `${name} Project was successfully deleted from the database.`;
            callback(null, tempSS);
        }
    });
}

function checkDatabaseDuplicate(name, callback){

    const checkStatement = `SELECT * FROM projects WHERE projectname = '${name}'`;

    try{
       db.query(checkStatement, function(err, result){
            if(err){
                console.log(err)
            }
            console.log(result);
            callback(null, result);
        });
    }
    catch(err){
        console.log(err);
    }

}

function getNames(serverID, callback){

     const namesStatement = `SELECT * FROM projects WHERE serverID = '${serverID}'`;

     try{
        db.query(namesStatement, function(err, result){
            if(err)console.log(err);

            callback(null, result);
        });
     }
     catch(err){
         console.log(err);
     }

}

function changeField(serverID, project, field, newValue, callback){

    var updateStatement = `UPDATE projects SET ${field} = '${newValue}' WHERE serverID = '${serverID}' AND projectname = '${project}'`;


    db.query(updateStatement, function(err, result){
        if(err){
            callback(err, 'Something went wrong');
        }
        else{
            callback(err, result);
        }
    });
}

function checkExists(serverID, projectname, callback){

    var checkStatement = `SELECT * FROM projects WHERE serverID = '${serverID}' AND projectname = '${projectname}'`;

    db.query(checkStatement, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            callback(null, result);
        }
    });
}

function dontDisconnect(){
    db.query('SELECT 1', function(err,){
        if(err)console.log('select error', err);
    })
}

module.exports = {login, insertNewProject, displayProjects, deleteProject, checkDatabaseDuplicate, getNames, changeField, checkExists, dueAlert, insertNewNote, getNotes, dontDisconnect};