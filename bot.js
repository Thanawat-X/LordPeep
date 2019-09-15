const Disc = require('discord.js');
const client = new Disc.Client();
const token = 'NjIyNDUzMDQyNTk5NTU5MTk5.XX5y9A.6eYcyOUr-X-c7g0ZSsq8HxIIRv8'
const readline = require('readline');


client.login(token);
console.log("[Topup] : Start 24/7")
client.on('message', function(message){
    if(message.channel.type === 'dm'){
        console.log("[" + message.author.username + "]: " + message.content) //Message from : Message
        
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
  
        rl.question('REPLY TO ' + message.author.username + ': ', (answer) => {
        message.author.send(`${answer}`);
        rl.close();
     });
     }
});
