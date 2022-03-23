const Entbot = require("entbot");
const bot = new Entbot();

bot.addEventListener("login", function(){
    console.log("로그인 완료!");
});

bot.addEventListener("error", function(message){
    console.log(`오류: ${message}`);
});

bot.login("ddoeeybot123", process.env.pass)
.then(function(bot){
    const app = bot.createApp();

    app.addEventListener("create", async function(message, data){

        console.log(message, data);

        const t = message;
        if (t == ".또이봇 안녕") {
            app.reply(data.id, "안녕하세요. 또이봇이에요!");
        } 
    });

    app.run();
});
