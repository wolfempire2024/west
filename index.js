const Discord = require("discord.js")
const client = new Discord.Client({intents:32767})
const Database = require("st.db")
const db = new Database({path:"bank"})
const probot = require("probot-tax")
const config = require("./config.json")
const prefix = config.prefix;
const token = process.env.token;
const activeRole = config.activeRole;
const activeLog = config.activeLog;
const bankAdminRole = config.bankAdminRole;
const bankAdminPassword = config.bankAdminPassword;
const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal");
DiscordModal(client);
var rn = require('random-number');
var options = {
  min:  100
, max:  1000
, integer: true
}
var opt = {

  min:  10

, max:  50

, integer: true

}
 
const cooldown = new Set();


const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});


client.on("ready",async () => {

console.log(`${client.user.username} Is Ready Now .`)

})


client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "open")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let channel = cozmo.guild.channels.cache.get(config.ads);
      channel.permissionOverwrites.edit(config.media, { 'SEND_MESSAGES': true });
      cozmo.channel.send(`**تم فتح <#${config.ads}> ✅ .**`);
    } catch (err) {
      return;
    }
  }
});


client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "close")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let channel = cozmo.guild.channels.cache.get(config.ads);
      channel.permissionOverwrites.edit(config.media, { 'SEND_MESSAGES': false });
      cozmo.channel.send(`**تم قفل <#${config.ads}> ✅ .**`);
    } catch (err) {
      return;
    }
  }
});



client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "فتح")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let channel = cozmo.guild.channels.cache.get(config.chat);
      channel.permissionOverwrites.edit(config.act, { 'SEND_MESSAGES': null });
      cozmo.channel.send(`**تم فتح <#${config.chat}> ✅ .**`);
    } catch (err) {
      return;
    }
  }
});
client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "قفل")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let channel = cozmo.guild.channels.cache.get(config.chat);
      channel.permissionOverwrites.edit(config.act, { 'SEND_MESSAGES': false });
      cozmo.channel.send(`**تم قفل <#${config.chat}> ✅ .**`);
    } catch (err) {
      return;
    }
  }
});
client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "قيم")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let channel = cozmo.guild.channels.cache.get(config.chat);
      var q1, q2;
      let filter1 = (m => m.author.id === cozmo.author.id);

      await cozmo.channel.send("**وقت القيم :**").then(coz => { 
        coz.channel.awaitMessages({ filter: filter1, max: 1, time: 180000, errors: ['time'] })
          .then(collected => {
            collected.first().delete();
            q1 = collected.first().content; 

            coz.edit("**ايديك سوني :**").then(coz => { 
              coz.channel.awaitMessages({ filter: filter1, max: 1, time: 180000, errors: ['time'] })
                .then(collected => { 
                  collected.first().delete();
                  q2 = collected.first().content; 
                  coz.edit(`**سيتم فتح القيم الآن في <#${channel.id}>**`);
                  channel.permissionOverwrites.edit(config.act, { 'SEND_MESSAGES': false });
                  channel.send(`**للحياة الواقعية | CIA SERVER
اعزائنا اعضاء مدينة CIA SERVER نود ابلاغكم بأن ، طائرة المدينة علي وشك الاقلاع . 
الرجاء من الاعضاء الكرام اضافة ،
قائد الرحلة : ${q2}
علما بأن الوقت المحدد للاقلاع ، 
الساعه :  ${q1} 
وانتضار قائد الرحلة لارسال الدعوة 
@everyone **`); 
                });
            });
          });
      });
    } catch (err) {
      return;
    }
  }
});
client.on('messageCreate', async cozmo => {
  if (cozmo.content.startsWith(prefix + "عضويات")) {
    try {
      if (!cozmo.member.roles.cache.some(r => r.id === config.staff2)) return;
      let chan = cozmo.guild.channels.cache.get(config.chat2);
      var q1, q2;
      let filter1 = (m => m.author.id === cozmo.author.id);

      await cozmo.channel.send("**وقت القيم :**").then(coz => { 
        coz.channel.awaitMessages({ filter: filter1, max: 1, time: 180000, errors: ['time'] })
          .then(collected => {
            collected.first().delete();
            q1 = collected.first().content; 

            coz.edit("**ايديك سوني :**").then(coz => { 
              coz.channel.awaitMessages({ filter: filter1, max: 1, time: 180000, errors: ['time'] })
                .then(collected => { 
                  collected.first().delete();
                  q2 = collected.first().content; 
                  coz.edit(`**سيتم فتح القيم الآن في <#${chan.id}>**`);
                  chan.send(`__**أعزائي أصحاب العضويات المذكورة بالأسفل 
نود بابلاغكم بـ :
 أنه تم فتح الرحلة و يمكن لجميع أصحاب العضويات الدخول الأن ؛
على أدمن القيم : ${q2}
و توقيت الرحلة هو : ${q1}
- يرجى التأكد من إضافة الأدمن .
@everyone **__`);
                });
            });
          });
      });
    } catch (err) {
      return;
    }
  }
});


client.on("messageCreate", async (cozmo) => {
  if (cozmo.content.startsWith(prefix + "نداء")) {
    if (!cozmo.member.roles.cache.has(config.staff)) return;
    let user = cozmo.mentions.users.first();
    if (!user) return cozmo.channel.send("**منشن الشخص ❌ .**");

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**<a:828419855778316308:976042712606339132> - الاداري ( <@!${cozmo.author.id}> ) يناديك .
تكتك للحين مفتوح وعليك انك تراجعه ؛ 
<:emoji_87:960215491337678918> - تكتك (  <#${cozmo.channel.id}> )**`)
      .setFooter(user.username, user.displayAvatarURL({ dynamic: true }));

    cozmo.channel.send(`**تم نداء <@!${user.id}> ✅ .**`);
    user.send({ embeds: [embed] });
  }
});
client.on("messageCreate", async (cozmo) => {
  if (cozmo.content.startsWith(prefix + "خصم")) {
    try {
      let args1 = cozmo.content.split(' ')[1];
      let args2 = cozmo.content.split(' ')[2];
      if (!args1) return cozmo.channel.send(`**اكـتـب الـمـبـلـغ**`);
      if (isNaN(args1) || isNaN(args2)) return cozmo.channel.send(`**هـذا لـيـس رقـمـا**`);
      if (args2 > 100) return cozmo.channel.send("**لا يـوجـد خـصـم اكـثـر مـن 100**");

      let num1 = parseInt(args1);
      let num2 = parseInt(args2);
      let discount = num1 - Math.floor(num1 * num2 / 100);
      let tax = probot.taxs(discount);

      const embed = new MessageEmbed()
        .setTitle("**الخصم**")
        .setColor("RED")
        .setDescription(`**💳 - المبلغ : \`${args1}\`
🔑 - الخصم : \`${args2}\`
<a:emoji_99:960216112707022909> - المبلغ بعد الخصم : \`${discount}\`
<a:emoji_71:948283318879780916> - المبلغ بعد الخصم مع الضريبة : \`${tax}\`**`)
        .setImage("https://media.discordapp.net/attachments/996363642335412236/998280648416567448/3f23f7353e265268.png")
        .setFooter(cozmo.author.username, cozmo.author.displayAvatarURL());

      cozmo.channel.send({ embeds: [embed] });
    } catch (err) {
      return;
    }
  }
});
client.on("messageCreate", async (wolf) => {
  if (wolf.content.startsWith(prefix + 'ضريبة')) {
    try {
      let args = wolf.content.split(' ')[1];
      if (!args) return wolf.channel.send(`**اكـتـب الـمـبـلـغ**`);
      if (isNaN(args)) return wolf.channel.send(`**هـذا لـيـس رقـمـا**`);

      let tax = probot.taxs(args);
      let num = parseInt(args);
      if (!num) return;
      
      let tax4 = Math.floor(num * (20) / (19) + (1) - (num));  // تعديل الحسابات إذا لزم الأمر
      const embed = new MessageEmbed()
        .setTitle("**الـضـريـبـة**")
        .setColor("RED")
        .setDescription(`**💵 - المبلغ : \`${args}\`
💳 - المبلغ مع الضريبة : \`${tax}\`
<a:emoji_95:960215729997754368> - المبلغ مع ضريبة الوسيط : \`${tax4}\`**`)
        .setImage("https://media.discordapp.net/attachments/996363642335412236/998280648416567448/3f23f7353e265268.png")
        .setFooter(wolf.author.username, wolf.author.displayAvatarURL());

      wolf.channel.send({ embeds: [embed] });
    } catch (err) {
      return;
    }
  }
});



client.on("messageCreate",async wolf => {
    if(wolf.content.startsWith(prefix + "setActiveChannel") || wolf.content.startsWith(prefix + "sac")){
    if(!wolf.member.permissions.has("ADMINISTRATOR")) return;
        
      let channel = wolf.mentions.channels.first() 
      
      if(!channel) return wolf.channel.send("**🙄 - يجب ان تقوم بمنشن للشات الذي تريده .**")
        
        let chat = wolf.guild.channels.cache.get(channel.id)
        
      if(!chat) return wolf.channel.send("**❌ - هذا الشات غير موجود داخل السيرفر .**")
        
        
        let embed = new Discord.MessageEmbed()
        
      .setTitle("**Activation section - قسم التفعيل**")
        .setColor("#2f3136")
       .setDescription("**مرحباً بكم يا اعضاء ويست 🤗 .\nانتم الآن في محطة التفعيل ⚙ .\nيرجى الضغط على الزر اسفل الرساله والاجابة على كامل الاسئلة التي ستظهر لكم 👌 .\nملاحظة : الاجابة ستكون فقط بنعم او لا 😁 .**")
        
 let button = new Discord.MessageButton()
.setCustomId("active")
.setLabel("تفعيل")
.setStyle("PRIMARY")
 
 let row = new Discord.MessageActionRow()
.addComponents(button)
 
 wolf.channel.send({embeds:[embed],components:[row]})
    }
    })




client.on("interactionCreate", async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === "active") {
        
        const m = interaction.guild.members.cache.get(interaction.user.id);

        if (m.roles.cache.has(activeRole)) {
            await interaction.reply({ content: "**❌ - انت مفعل بالفعل .**", ephemeral: true });
            return;
        }
        
        // إرسال رسالة تحتوي على التعليمات للمستخدم
        await interaction.reply({ content: "**✅ - تم إرسال الأسئلة بالخاص، يرجى الإجابة على كافة الأسئلة.**", ephemeral: true });

        try {
            const user = interaction.user;
            const dmChannel = await user.createDM();

            // قائمة الأسئلة والأجوبة الجديدة
            const questionsAndAnswers = [
                { question: "اسمك :", correctAnswer: null },
                { question: "عمرك :", correctAnswer: null },
                { question: "ايديك سوني :", correctAnswer: null },  // السؤال الثالث
                { question: "الـ LAR هو الدعس بشكل متعمد :", correctAnswer: "نعم" },
                { question: "الـ RDM هو القتل بشكل عشوائي :", correctAnswer: "نعم" },
                { question: "الـ VDM هو الصدم بشكل عشوائي :", correctAnswer: "نعم" },
                { question: "هل يسمح باستخدام الحاجز السمعي ؟ :", correctAnswer: "لا" },
                { question: "هل يسمح الخطف بالمنطقة الآمنة ؟ :", correctAnswer: "لا" },
                { question: "هل يسمح سرقة الممتلكات الحكومية ؟ :", correctAnswer: "لا" },
                { question: "هل يسمح الإزعاج بالمراكز الحكومية ؟ :", correctAnswer: "لا" },
                { question: "هل يجب التوقف بعد انفجار كفرين ؟ :", correctAnswer: "نعم" },
                { question: "هل يسمح القدوم للمراكز اول عشر دقائق ؟ :", correctAnswer: "لا" },
                { question: "هل يسمح الخطف اول عشر دقائق ؟ :", correctAnswer: "لا" }
            ];

            const yesNoFilter = response => {
                return ["نعم", "لا"].includes(response.content.toLowerCase());
            };

            let correctAnswers = 0;
            let wrongAnswers = 0;
            let userResponses = [];
            let newNickname = null;  // لتخزين الإجابة من السؤال الثالث

            for (let i = 0; i < questionsAndAnswers.length; i++) {
                let validResponse = false;

                while (!validResponse) {
                    await dmChannel.send(questionsAndAnswers[i].question);

                    const collected = await dmChannel.awaitMessages({
                        filter: response => response.author.id === user.id,
                        max: 1,
                        time: 30000, // 30 ثانية للرد على كل سؤال
                        errors: ['time']
                    });

                    if (collected.size === 0) {
                        await dmChannel.send("⏰ - انتهى الوقت للإجابة على هذا السؤال.");
                        break;
                    }

                    const userAnswer = collected.first().content;

                    if (i === 2) {
                        // تخزين الإجابة من السؤال الثالث لاستخدامها كـ Nickname
                        newNickname = userAnswer;
                    }

                    if (i < 3 || yesNoFilter(collected.first())) {
                        // إضافة الإجابة إلى اللوق فقط إذا كانت من الأسئلة الثلاثة الأولى أو إذا كانت الإجابة نعم/لا
                        userResponses.push({ question: questionsAndAnswers[i].question, answer: userAnswer });

                        validResponse = true; // تعتبر الإجابة صالحة للخروج من التكرار

                        if (i >= 3 && userAnswer.toLowerCase() === questionsAndAnswers[i].correctAnswer.toLowerCase()) {
                            correctAnswers++;
                        } else if (i >= 3 && userAnswer.toLowerCase() !== questionsAndAnswers[i].correctAnswer.toLowerCase()) {
                            wrongAnswers++;
                            
                 
                            
                   /*        
                            if (wrongAnswers > 3) {
                        //        await dmChannel.send("❌ - لقد فشلت في الاختبار بسبب تجاوز عدد الإجابات الخاطئة المسموح بها.");
                                return;
                            }
                     */       
                        
                     } 
                    } else {
                        await dmChannel.send("❌ - يجب أن تكون الإجابة 'نعم' أو 'لا'. يرجى محاولة الإجابة مرة أخرى.");
                    }
                    
                }
            }
            var status;

            if (wrongAnswers <= 3) {
        //        await dmChannel.send(`✨ - لقد تم الاختبار! \nالإجابات الصحيحة: ${correctAnswers}\nالإجابات الخاطئة: ${wrongAnswers}`);
                let embed = new Discord.MessageEmbed()
               .setTitle("**Active Status - حالة التفعيل**")
                .setColor("#008000")
                .setDescription(`**تم تفعيلك بنجاح ✅🤗 .\nعدد اجاباتك الصحيحة : \`${correctAnswers}\`\nعدد اجاباتك الخاطئة : \`${wrongAnswers}\`\nالان يمكنك الانتقال من محطة التفعيل الى المحطة الرئيسية في المدينة 😇 .\nنتمنى لك وقتاً ممتعاً 👏.**`)
                dmChannel.send({embeds:[embed]})
                status = "تم التفعيل ✅";
                
            

                const guild = interaction.guild;

                const member = guild.members.cache.get(user.id);

                await member.setNickname(newNickname)
                   member.roles.add(activeRole)
            
            }  else {
       //         await dmChannel.send(`❌ - لقد فشلت في الاختبار.\nالإجابات الصحيحة: ${correctAnswers}\nالإجابات الخاطئة: ${wrongAnswers}`);
                
                let embed = new Discord.MessageEmbed()
                .setTitle("**Activation Status - حالة التفعيل**")
                .setColor("#ff0000")
                .setDescription(`**للاسف لم يتم تفعيلك ❌☹ .\nعدد اجابتك الصحيحة :\`${correctAnswers}\`\nعدد اجاباتك الخاطئة : \`${wrongAnswers}\`\nلا تحزن لانه يمكنك المحاولة مجدداً 😊 .\nيرجى قراءة القوانين بشكل جيد قبل اعادة التفعيل 👌📜 .**`)
                dmChannel.send({embeds:[embed]})
                status = "لم يتم التفعيل ❌"
             }


            // تسجيل الإجابات في قناة محددة
            const logChannelId = activeLog; // استبدل هذا بـ ID القناة التي تريد إرسال اللوق إليها
            const logChannel = await client.channels.fetch(logChannelId);
            if (logChannel) {
                let logMessage = `**اجوبة الشخص ${user.tag}:**\n`;
                userResponses.forEach(response => {
                    logMessage += `**${response.question}**: ${response.answer}\n`;
                });
                logMessage += `**الإجابات الصحيحة:** ${correctAnswers}\n**الإجابات الخاطئة:** ${wrongAnswers}`;
                
                let embedMsg = new Discord.MessageEmbed()
                .setColor("#2f3136")
                .setTitle("**Activation Log - لوق التفعيل**")
                .setDescription(`**العضو : ${user}\nالحالة :${status}**\n${logMessage}`)

                logChannel.send({embeds:[embedMsg]});
            } else {
                console.error("Couldn't find the log channel.");
            }

        } catch (error) {
            console.error("Failed to send DM to the user:", error);
            await interaction.followUp({ content: "❌ - لم أتمكن من إرسال الرسائل بالخاص. يرجى التأكد من إعدادات الرسائل الخاصة.", ephemeral: true });
        }
    }
});


client.on('messageCreate',async wolf => {
    
  
    if(wolf.content.startsWith(prefix + "setBankChannel") || wolf.content.startsWith(prefix + "sbc")){
        if(!wolf.member.permissions.has("ADMINISTRATOR")) return;
        
        let channel = wolf.mentions.channels.first() 
      
      if(!channel) return wolf.channel.send("**🙄 - يجب ان تقوم بمنشن للشات الذي تريده .**")
        
        let chat = wolf.guild.channels.cache.get(channel.id)
        
      if(!chat) return wolf.channel.send("**❌ - هذا الشات غير موجود داخل السيرفر .**")
        
        
        let embed = new Discord.MessageEmbed()
        
      .setTitle("**Bank section - قسم البنك**")
        .setColor("#2f3136")
       .setDescription("**مرحباً بكم يا اعضاء ويست 🤗 .\nانتم الآن في محطة البنك 🏛 .\nيرجى الضغط على الزر اسفل الرساله لانشاء حسابك البنكي .\nيرجى الاحتفاظ برقم حسابك `الايبان` ورمز بطاقتك `cvc` 👌 .**")
        
 let button = new Discord.MessageButton()
.setCustomId("bank_create")
.setLabel("إنشاء")
.setStyle("SUCCESS")
 
 let controlButton = new Discord.MessageButton()
 .setLabel("لوحة التحكم")
 .setCustomId("bank_control")
 .setStyle("PRIMARY")
 
 let row = new Discord.MessageActionRow()
.addComponents(button)
.addComponents(controlButton)
 
 wolf.channel.send({embeds:[embed],components:[row]})
                
        }
})

client.on("interactionCreate",async interaction => {
    if(!interaction.isButton()) return;
    if(interaction.customId === "bank_create"){
        let user = interaction.user;
        let bank = db.get({key:`bank_SA${user.id}`})
   //     let balance = db.get({key: `balance_SA${user.id}`})
    //    let cash = db.get({key:`cash_SA${user.id}`})
        let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})
        
        if(bank){
            interaction.reply({content:`**🙄 - انت تمتلك بالفعل حساب بنكي .\nمعلومات حسابك :\nالإيبان : ${bank.iban}\nرمز حسابك :${bank.cvc}\nرصيد حسابك في البنك :${bank.balance}\nرصيدك في الكاش : ${bank.cash}**`,ephemeral:true})
            
            } else {
                db.set({
                   key:`bank_SA${user.id}`,
value: {
iban:`SA${user.id}`,
cvc: rn(options),
balance:5000,
cash: 0,
daily: "available"
}
})
                                    
                let b = db.get({key:`bank_SA${user.id}`})
    interaction.reply({content:`**تم انشاء حسابك البنكي ✅🏛 .\nإيبان حسابك : ${b.iban}\nرمز حسابك : ${b.cvc}\nرصيدك حسابك في البنك : ${b.balance}\nرصيد حسابك في الكاش : ${b.cash}**`,ephemeral:true})
                
                
              }
        } else if(interaction.customId === "bank_control"){
            
            let user = interaction.user;
            
            let bank = db.get({key:`bank_SA${user.id}`})
            
            if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
            
            let blacklist = db.get({key:`blacklist_${user.id}`})
         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})


         
            let but1 = new Discord.MessageButton()
 .setLabel("معلومات الحساب")
 .setCustomId("bank_info")
 .setStyle("SECONDARY")
            
            let but2 = new Discord.MessageButton()
.setLabel("تحويل")
.setStyle("SECONDARY")
.setCustomId("bank_transfer")
            
            let but3 = new Discord.MessageButton()
 .setLabel("راتب")
 .setCustomId("bank_daily")
 .setStyle("SECONDARY")
            
            let but4= new Discord.MessageButton()
.setLabel("حذف الحساب")
.setStyle("DANGER")
.setCustomId("bank_delete")
        
        let but5 = new Discord.MessageButton()
        .setLabel("اوامر المسؤولين")
        .setCustomId("bank_admin")
        .setStyle("PRIMARY")
        
        

        let but6 = new Discord.MessageButton()

        .setLabel("سحب فلوس")

        .setCustomId("bank_take")

        .setStyle("SECONDARY")
        
        let but7 = new Discord.MessageButton()
        .setLabel("إيداع فلوس")
        .setCustomId("bank_enter")
        .setStyle("SECONDARY")
        
                      
            
            
      
      
      
      
     const guild = interaction.guild;

                const member = guild.members.cache.get(user.id);
            
            if(member.roles.cache.some(r => r.id === bankAdminRole)){
      
      interaction.reply({
          components:[
              {
                  type:1,
                  components: [but1,but2,but3,but4,but5]
                  
                  },
              {
                  type:1,
                  components: [but6,but7]
                  
                  }
              
          ],ephemeral:true})
                } else {                
                    interaction.reply({
                        components:[
                            {
                                type:1,
                                components: [but1,but2,but3,but4]
                                },
                         {
                             type:1,
                             components: [but6,but7]
                             }
                        ],ephemeral:true})
                    }
            }
    })

client.on('interactionCreate',async interaction => {
    
    if(!interaction.isButton()) return;
  
    if(interaction.customId === "bank_admin"){
        
        
        let but1 = new Discord.MessageButton()
 .setLabel("اضافة فلوس")
 .setCustomId("add_money")
 .setStyle("SECONDARY")
            
            let but2 = new Discord.MessageButton()
.setLabel("ازالة فلوس")
.setStyle("SECONDARY")
.setCustomId("remove_money")
            
            let but3 = new Discord.MessageButton()
 .setLabel("تصفير")
 .setCustomId("delete_money")
 .setStyle("SECONDARY")
            
            let but4= new Discord.MessageButton()
.setLabel("اضافة بلاك ليست")
.setStyle("DANGER")
.setCustomId("add_blacklist")
        
        let but5 = new Discord.MessageButton()
        .setLabel("ازالة بلاك ليست")
        .setCustomId("remove_blacklist")
        .setStyle("SUCCESS")
        
        let row = new Discord.MessageActionRow()  

     .addComponents(but1)

     .addComponents(but2)

     .addComponents(but3)

     .addComponents(but4)
        
     .addComponents(but5)
         
      interaction.reply({components:[row],ephemeral:true})
        
  } else if(interaction.customId === "bank_info"){
         
        let user = interaction.user;
        let bank = db .get({key: `bank_SA${user.id}`})
                      if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
      let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})
        var st;
      if(bank.daily === "unavailable"){
        st = "تم استلام الراتب اليومي ."
          } else if(bank.daily === "available"){
        st = "لم يتم استلام الراتب اليومي بعد ."
              }
      
        
                     
        let embed = new Discord.MessageEmbed()
       .setTitle("**Account Information - معلومات الحساب**")
        
       .setColor("#2f3136")
       .setDescription(`**معلومات حسابك البنكي 🏛 :\nإيبان حسابك : \`${bank.iban}\`\nرمز حسابك : \`${bank.cvc}\`\nرصيد حسابك في البنك : \`${bank.balance}\`\nرصيد حسابك في الكاش : \`${bank.cash}\`\n${st}**`)
        
     interaction.reply({embeds:[embed] ,ephemeral:true})
     
    } else if(interaction.customId === "bank_transfer"){
        
       
      let user = interaction.user;
      
                    let bank = db.get({key:`bank_SA${user.id}`})
                                  if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
      
        let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})
        
      const modal = new ModalBuilder()


        .setCustomId('bank_modal')
        .setTitle('Bank Section - محطة البنك')
              .addComponents(
            new ModalField()
        .setCustomId('user_iban')
        .setLabel("ايدي حساب الشخص :")
              .setRequired(true)
              .setPlaceholder("ضع فقط ايدي حساب الدسكورد الخاص بالشخص المراد تحويله .")
              .setMin(1)
              .setMax(100)
        .setStyle('SHORT'),

       new ModalField()
        .setCustomId('user_amount')
        .setLabel("المبلغ المراد تحويله :")
              .setRequired(true)
              .setPlaceholder("ضع المبلغ المراد تحويله .")
              .setMin(1)
              .setMax(100)
        .setStyle('SHORT'),

           new ModalField()
        .setCustomId('user_cvc')
        .setLabel("كلمة سر حسابك البنكي :")
              .setRequired(true)
              .setPlaceholder("ضع كلمة حسابك البنكي cvc .")
              .setMin(3)
              .setMax(4)
              .setStyle('SHORT'),
      
              )
      
      await client.modal.open(interaction , modal);
      
      
        } else if(interaction.customId === "bank_delete"){
                        let bank = db.get({key:`bank_SA${interaction.user.id}`})
            
                          if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
   
            let blacklist = db.get({key:`blacklist_${interaction.user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})
            
            const modal = new ModalBuilder()

        .setCustomId('bank_modal2')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('acc_iban')

        .setLabel("ايدي حسابك :")

              .setRequired(true)

              .setPlaceholder("ضع فقط ايدي حسابك الدسكورد الخاص بك.")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),

       new ModalField()

        .setCustomId('acc_cvc')

        .setLabel("كلمة سر حسابك البنكي :")

              .setRequired(true)

              .setPlaceholder("ضع كلمة سر حسابك البنكي .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
                

    await client.modal.open(interaction , modal);
            
            
            } else if(interaction.customId === "bank_daily"){
                let user = interaction.user;
                  let bank = db.get({key:`bank_SA${user.id}`})
                                if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
                
                let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})
                
                let daily = bank.daily
                
                if(daily === "available"){
                  let balance = parseInt(bank.balance)
                  let dmoney = parseInt(rn(opt))
                  let total = balance + dmoney
                  db.set({
                      key: `bank_SA${user.id}`,value: {
                          iban:bank.iban,
                          cvc:bank.cvc,
                          balance: total,
                          cash: bank.cash,
                          daily: "unavailable"
                           }
                          })
                    let b = db.get({key:`bank_SA${user.id}`})
                    interaction.reply({content:`**تم استلام الراتب وقدره \`${dmoney}\` بنجاح 🏛✅ .\nعد غداً لاستلام راتبك مرة اخرى 😊 .**`,ephemeral:true})
       setTimeout(function(){
                     
                                            db.set({
                                                key:`bank_SA${user.id}`,value: {
           iban:b.iban,
           cvc: b.cvc, 
           balance:b.balance, 
           cash: b.cash,
           daily: "available"                                      
      }                                      })
                        
                        },10000)
                    
                      
                    } else if(daily === "unavailable"){
                         
                      interaction.reply({content:"**🙄 - لا تستطيع استلام راتبك الآن , انتظر قليلاً .**",ephemeral:true})
                        
                        }

          
                } else if(interaction.customId === "bank_take"){
                    let user = interaction.user;                    
                                let bank = db.get({key:`bank_SA${user.id}`})
                                if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
                    
                    let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})

           const modal = new ModalBuilder()

        .setCustomId('bank_modal3')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('acc_bank_amount')

        .setLabel("المبلغ المراد سحبه :")

              .setRequired(true)

              .setPlaceholder("ضع المبلغ الذي تريد ان تسحبه .")

              .setMin(1)

        .setStyle('SHORT'),
                  new ModalField()

        .setCustomId('acc_bank_cvc')

        .setLabel("كلمة سر حسابك البنكي :")

              .setRequired(true)

              .setPlaceholder("ضع كلمة سر حسابك البنكي cvc .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
               await client.modal.open(interaction , modal);
           
                  
                    }  else if(interaction.customId === "bank_enter"){
                    let user = interaction.user;                    
                                let bank = db.get({key:`bank_SA${user.id}`})
                                if(!bank) return interaction.reply({content:"**🙄 - انت لا تملك حساب بنكي .**",ephemeral:true})
                        
                        let blacklist = db.get({key:`blacklist_${user.id}`})

         if(blacklist) return interaction.reply({content:`**⚠️ - انت موجود ضمن قائمة المحظورين ! .\nسبب الحظر : ${blacklist.res}\nمدة الحظر : \`${blacklist.time}\` يوم\nالمسؤول الذي قام بحظرك : <@!${blacklist.admin}> **`,ephemeral:true})

           const modal = new ModalBuilder()

        .setCustomId('bank_modal4')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('acc_bank_a')

        .setLabel("المبلغ المراد إيداعه :")

              .setRequired(true)

              .setPlaceholder("ضع المبلغ الذي تريد ان تسحبه .")

              .setMin(1)

        .setStyle('SHORT'),
                  new ModalField()

        .setCustomId('acc_bank_c')

        .setLabel("كلمة سر حسابك البنكي :")

              .setRequired(true)

              .setPlaceholder("ضع كلمة سر حسابك البنكي cvc .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
               await client.modal.open(interaction , modal);
           
                  
                    } else if(interaction.customId === "add_money"){
                        let user = interaction.user;
                        const modal = new ModalBuilder()

        .setCustomId('bank_modal5')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('m_id')

        .setLabel("ايدي حساب الشخص")

              .setRequired(true)

              .setPlaceholder("ضع فقط ايدي حساب الدسكورد الخاص بالشخص.")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('m_amount')

        .setLabel("المبلغ المراد إضافته :")

              .setRequired(true)

              .setPlaceholder("ضع فقط المبلغ المراد إضافته .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  new ModalField()

        .setCustomId('m_password')

        .setLabel("كلمة سر البنك :")

              .setRequired(true)

              .setPlaceholder("ضع فقط كلمة السر الخاصة بالمسؤولين .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
                            await client.modal.open(interaction , modal);
                        
                        } else if(interaction.customId === "remove_money"){
                        let user = interaction.user;
                        const modal = new ModalBuilder()

        .setCustomId('bank_modal6')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('a_id')

        .setLabel("ايدي حساب الشخص")

              .setRequired(true)

              .setPlaceholder("ضع فقط ايدي حساب الدسكورد الخاص بالشخص.")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('a_amount')

        .setLabel("المبلغ المراد إضافته :")

              .setRequired(true)

              .setPlaceholder("ضع فقط المبلغ المراد إزالته .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  new ModalField()

        .setCustomId('a_password')

        .setLabel("كلمة سر البنك :")

              .setRequired(true)

              .setPlaceholder("ضع فقط كلمة السر الخاصة بالمسؤولين .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
                            await client.modal.open(interaction , modal);    
                            
                            } else if(interaction.customId === "delete_money"){
                                const modal = new ModalBuilder()

        .setCustomId('bank_modal7')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('h_id')

        .setLabel("ايدي حساب الشخص :")

              .setRequired(true)

              .setPlaceholder("ضع فقط ايدي حساب الدسكورد الخاص بالشخص .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('h_password')

        .setLabel("كلمة سر البنك :")

              .setRequired(true)

              .setPlaceholder("ضع فقط كلمة السر الخاصة بالمسؤولين .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
                                    await client.modal.open(interaction , modal);
                 } else if(interaction.customId === "add_blacklist"){
                     let user = interaction.user;
                     const modal = new ModalBuilder()

        .setCustomId('bank_modal8')

        .setTitle('Bank Section - محطة البنك')

              .addComponents(

            new ModalField()

        .setCustomId('black_id')

        .setLabel("ايدي حساب الشخص :")

              .setRequired(true)

              .setPlaceholder("ضع فقط ايدي حساب الدسكورد الخاص بالشخص .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('black_reason')

        .setLabel("سبب البلاك لبست :")

              .setRequired(true)

              .setPlaceholder("ضع فقط سبب البلاك ليست .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('black_duration')

        .setLabel("مدة البلاك ليست :")

              .setRequired(true)

              .setPlaceholder(`ضع فقط مدة البلاك ليست "ضع فقط عدد الايام مثل 15 , 10 . . " .`)

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  
                  new ModalField()

        .setCustomId('black_password')

        .setLabel("كلمة سر البنك :")

              .setRequired(true)

              .setPlaceholder("ضع فقط كلمة سر الخاصة بالمسؤولين .")

              .setMin(1)

              .setMax(100)

        .setStyle('SHORT'),
                  )
                         await client.modal.open(interaction , modal);
                  
                    
                     
                     
                     }
    })


client.on('modalSubmitInteraction', async interaction => {
  if(interaction.customId == "bank_modal") {
      
      let user = interaction.member;
      let bank = db.get({key:`bank_SA${user.id}`})
      let cash = parseInt(bank.cash)
      let accountID = interaction.fields.getTextInputValue("user_iban")
      let u = interaction.guild.members.cache.get(accountID)
      let m = interaction.guild.members.cache.get(user.id)
      if(!u) return interaction.reply({content:"**🙄 - لا يوجد هكذا ايدي داخل السيرفر .**",ephemeral:true})
      
      if(accountID === user.id) return interaction.reply({content:"**😁 - لا يمكنكك التحويل لنفسك .**",ephemeral:true})
      
      let amount = interaction.fields.getTextInputValue("user_amount")
      let a2 = parseInt(amount)
           if(isNaN(amount)) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
      if(a2 < 1) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})

      
      let money = parseInt(amount)
      
      if(money > cash) return interaction.reply({content:"**😕 - انت لا تملك هذا القدر من المال .**",ephemeral:true})
      
      let cvc = parseInt(bank.cvc);
      
      let password = parseInt(interaction.fields.getTextInputValue("user_cvc"))
      
     
      
      if(password !== cvc) return interaction.reply({content:`**⚠️ - كلمة السر خاطئة .**`,ephemeral:true})
      
      let userBank = db.get({key:`bank_SA${accountID}`})
      
      if(!userBank) return interaction.reply({content:"**😕 - لا يملك هذا الشخص حساباً بنكياً .**",ephemeral:true})
      
      let userCash = userBank.cash;
      let ucash = parseInt(userCash)   
      let total = money + ucash
      let mtotal = cash - money
      db.set({
          key:`bank_SA${accountID}`,value:{
              iban: userBank.iban,
              cvc: userBank.cvc,
              balance: userBank.balance,
              cash:total
          }
      })
 db.set({
     key:`bank_SA${user.id}`,value:{
         iban: bank.iban,
         cvc: bank.cvc,
         balance: bank.balance,
         cash:mtotal
                      }
 })
      interaction.reply({content:`**تم التحويل لـ <@!${accountID}> بنجاح وخصم منك مبلغ قدره \`${amount}\` ريال 🏛✅ .**`,ephemeral:true})
      
      u.send({content:`**تم استلام مبلغ قدره  \`${amount}\` ريال من ${m.user.tag} بنجاح 🏛✅ .**`})
        } else if(interaction.customId === "bank_modal2"){
            
            let user = interaction.member;
            let guild = interaction.guild;
            let member = guild.members.cache.get(user.id)
            
            let accID = interaction.fields.getTextInputValue("acc_iban")
            if(parseInt(accID) !== parseInt(user.id)) return interaction.reply({content:"**⚠️ - هذا ليس حسابك .**",ephemeral:true})
            
            let bank = db.get({key:`bank_SA${user.id}`})
            
            let cvc = parseInt(bank.cvc)
            
            let password = parseInt(interaction.fields.getTextInputValue("acc_cvc"))
            
            if(password !== cvc) return interaction.reply({content:"**⚠️ - كلمة المرور خاطئة .**",ephemeral:true})
            
            db.delete({key:`bank_SA${user.id}`})
            
          interaction.reply({content:"**تم حذف حسابك بنجاح ✅ .**",ephemeral:true})
            
            
            } else if(interaction.customId == "bank_modal3"){
                let user = interaction.member;
                let bank = db.get({key:`bank_SA${user.id}`})
                let balance = parseInt(bank.balance)
                let amount = interaction.fields.getTextInputValue("acc_bank_amount")
               let money = parseInt(amount)
 if(isNaN(amount)) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
 
                if(money < 1) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                
                if(money > balance) return interaction.reply({content:"**😕 - انت لا  تملك هذا القدر من المال في حسابك البنكي .**",ephemeral:true})
                
                let cvc = parseInt(bank.cvc)
                let password = interaction.fields.getTextInputValue("acc_bank_cvc")
              let pass = parseInt(password)
              if(pass !== cvc) return interaction.reply({content: "**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                
                let btotal = balance - money
                let cash = parseInt(bank.cash)
                
                let ctotal = cash + money
                
              db.set({
                  key: `bank_SA${user.id}`,
value:{
iban: bank.iban,
cvc: bank.cvc, 
balance: btotal,
cash: ctotal,
daily: bank.daily
}
})
interaction.reply({content: `**تم سحب مبلغ قدره \`${amount}\`  ريال من حسابك البنكي واضافته للكاش ✅🏛 .**`,ephemeral:true})
                    } else if(interaction.customId === "bank_modal4"){
                        
                        let user = interaction.member;
                let bank = db.get({key:`bank_SA${user.id}`})
                let cash = parseInt(bank.cash)
                let amount = interaction.fields.getTextInputValue("acc_bank_a")
               let money = parseInt(amount)
 if(isNaN(amount)) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
 
                if(money < 1) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                
                if(money > cash) return interaction.reply({content:"**😕 - انت لا  تملك هذا القدر من المال في الكاش .**",ephemeral:true})
                
                let cvc = parseInt(bank.cvc)
                let password = interaction.fields.getTextInputValue("acc_bank_c")
              let pass = parseInt(password)
              if(pass !== cvc) return interaction.reply({content: "**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                
                let ctotal = cash - money
                let balance = parseInt(bank.balance)
                
                let btotal = balance + money
                
              db.set({
                  key: `bank_SA${user.id}`,
value:{
iban: bank.iban,
cvc: bank.cvc, 
balance: btotal,
cash: ctotal,
daily: bank.daily
}
})
interaction.reply({content: `**تم إبداع مبلغ قدره \`${amount}\`  ريال الى حسابك البنكي وسحبه من الكاش ✅🏛 .**`,ephemeral:true})
                        
                        } else if(interaction.customId === "bank_modal5"){
                            let user = interaction.member;
                            let guild = interaction.guild;                            let memberID = interaction.fields.getTextInputValue("m_id")
                            let member = guild.members.cache.get(memberID)
                            if(!member) return interaction.reply({content: "**🙄 - لا يوجد هكذا شخص داخل السيرفر .**",ephemeral:true})
                            let bank = db.get({key: `bank_SA${memberID}`})
                          if(!bank) return interaction.reply({content: "**🙄 - هذا الشخص لا يملك حساب بنكي .**",ephemeral:true})
                            let amount = interaction.fields.getTextInputValue("m_amount")
                            if(isNaN(amount)) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                            let money = parseInt(amount)
                            if(money < 1) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                            
                            let password = interaction.fields.getTextInputValue("m_password")
                            if(password === bankAdminPassword){                            
                            let cash = parseInt(bank.cash)
                            let total = cash + money
                            db.set({
                                key: `bank_SA${memberID}`,
                                value: {
                                   iban:bank.iban,
                                    cvc:bank.cvc,
                                    balance:bank.balance,
                                    cash:total,
                                    daily:bank.daily
                         
                                  }
                                })
                                interaction.reply({content:`**تم اضافة مبلغ قدره \`${amount}\` ريال لـ <@!${memberID}> بنجاح 🏛✅ .**`,ephemeral:true})
                                } else {
                                interaction.reply({content:"**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                                }
                      } else if(interaction.customId === "bank_modal6"){
                          let user = interaction.member;
                            let guild = interaction.guild;                            let memberID = interaction.fields.getTextInputValue("a_id")
                            let member = guild.members.cache.get(memberID)
                            if(!member) return interaction.reply({content: "**🙄 - لا يوجد هكذا شخص داخل السيرفر .**",ephemeral:true})
                            let bank = db.get({key: `bank_SA${memberID}`})
                          if(!bank) return interaction.reply({content: "**🙄 - هذا الشخص لا يملك حساب بنكي .**",ephemeral:true})
                            let amount = interaction.fields.getTextInputValue("a_amount")
                            if(isNaN(amount)) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                            let money = parseInt(amount)
                            if(money < 1) return interaction.reply({content:"**🙄 - ادخل رقم صحيح .**",ephemeral:true})
                            
                            let password = interaction.fields.getTextInputValue("a_password")
                            if(password === bankAdminPassword){                            
                            let cash = parseInt(bank.cash)
                            let total = cash - money
                            db.set({
                                key: `bank_SA${memberID}`,
                                value: {
                                   iban:bank.iban,
                                    cvc:bank.cvc,
                                    balance:bank.balance,
                                    cash:total,
                                    daily:bank.daily
                         
                                  }
                                })
                                interaction.reply({content:`**تم ازالة مبلغ قدره \`${amount}\`ريال من <@!${memberID}> بنجاح 🏛✅ .**`,ephemeral:true})
                                } else {
                                interaction.reply({content:"**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                                }
                          
                          } else if(interaction.customId === "bank_modal7"){
                              let user = interaction.member;
                              let memberID = interaction.fields.getTextInputValue("h_id")
                              let guild = interaction.guild;
                            let member = guild.members.cache.get(memberID)
                          if(!member) return  interaction.reply({content:"**🙄 - لا يوجد هكذا شخص داخل السيرفر .**",ephemeral:true})
                            let bank = db.get({key:`bank_SA${memberID}`})
                            if(!bank) return interaction.reply({content:"**🙄 - هذا الشخص لا يملك حساب بنكي .**",ephemeral:true})
                            let password = interaction.fields.getTextInputValue("h_password")
                         if(password === bankAdminPassword){
                          db.set({
                            key:`bank_SA${memberID}`,
                            value:{
                                iban:bank.iban,
                                cvc:bank.cvc,
                            balance:0,
                                cash:0,
                                daily:bank.daily
                               }
                              })
                             interaction.reply({content:`**تم تصفير <@!${memberID}> بنجاح ✅🏛 .**`,ephemeral:true})
                               
                          
                          } else {
                              interaction.reply({content:"**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                              }
                          } else if(interaction.customId === "bank_modal8"){
                              let user = interaction.member;
                              let guild = interaction.guild;
                              let memberID = interaction.fields.getTextInputValue("black_id")
                              let member = guild.members.cache.get(memberID)
                              if(!member) return interaction.reply({content:"**🙄 - لا يوجد هكذا شخص داخل السيرفر .**",ephemeral:true})
                            let bank = db.get({key:`bank_SA${memberID}`})
                            if(!bank) return interaction.reply({content:"**🙄 - هذا الشخص لا يملك حساب بنكي .**",ephemeral:true})
                            let blacklist = db.get({key:`blacklist_${memberID}`})
                            if(blacklist) return interaction.reply({content:"**🙄 - هذا الشخص تم اضافته مسبقاً بقائمة البلاك ليست .**",ephemeral:true})
                            let reason = interaction.fields.getTextInputValue("black_reason")
                          let duration = interaction.fields.getTextInputValue("black_duration")
                          if(isNaN(duration)) return interaction.reply({content:"**🙄 - ضع رقم صحيح لعدد الايام .**",ephemeral:true})
                              
                              let days = parseInt(duration)
                              if(days < 1) return interaction.reply({content:"**🙄 - ضع رقم صحيح لعدد الايام .**",ephemeral:true})
                              
                              let password = interaction.fields.getTextInputValue("black_password")
                           if(password === bankAdminPassword){
                          
                   db.set({
                       key: `blacklist_${memberID}`,
                       value: {
                           admin:user.id,
                           res:reason,
                           time:days
                           
                         }
                       })
                            interaction.reply({content:`**تم اضافة <@!${memberID}> الى قائمة البلاك ليست لمدة \`${days}\` يوم بنجاح ✅🏛.**`,ephemeral:true})
                          
                          } else {
                              interaction.reply({content:"**⚠️ - كلمة السر خاطئة .**",ephemeral:true})
                              }
    } 
    
    })
    
   

client.login(token);
