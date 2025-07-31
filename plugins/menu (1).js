const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alise: ["list"],
    react: "📂",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {title: 'DOWNLOAD MENU 📥',
                     //description: ``,
                     : prefix + `downmenu`
                  }, {
                     title: 'MAIN MENU 🎀',
                    //description: ``,
                     id: prefix + `mainmenu`
                  }, {
                     title: 'MOVIE MENU 🎬',
                    //description: ``,
                     id: prefix + `extra`
                  }, {
                     title: 'SEARCH MENU 🔎',
                     //description: ``,
                     id: prefix + `searchmenu`
                  }, {
                     title: 'CONVERT MENU 🌀',
                     //description: ``,
                     id: prefix + `convertmenu`
                  }, {
                     title: 'GROUP MENU 🎩',
                     //description: ``,
                     id: prefix + `groupmenu`
                  }, {
                     title: 'OTHER MENU 👾',
                     //description: ``,
                     id: prefix + `othermenu`
                  }, {
                     title: 'OWNER MENU 👨‍💻',
                     //description: ``,
                     id: prefix + `ownermenu`
                  }, {
                     title: 'AI MENU 👨‍🔧',
                     //description: ``,
                     id: prefix + `aimenu`
                  }, {
                    title: 'FUN MENU 👨‍🔧',
                    //description: ``,
                    id: prefix + `funmenu`
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `🎭 *HelloW  ${pushname}*

> **☠️ K A V I D U - M D ☠ -  LIST MENU ☠️**

* ${menu.main}
* ${menu.download}    
* ${menu.group}
* ${menu.convert}

${config.FOOTER}`;

      await robin.sendPresenceUpdate('recording', from);

      await robin.sendMessage(
        from,
        { audio: { url: "" }, mimetype: 'audio/mpeg', ptt: true },
        { quoted: mek }
      );

      await robin.sendMessage(
        from,
        {
          image: { url: config.ALIVE_IMG },
          caption: madeMenu
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
