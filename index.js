const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Your bot is running!');
});

server.listen(8080, () => {
    console.log("listen");
});

const Entbot = require("entbot");
const bot = new Entbot();

bot.addEventListener("login", function(){
    console.log("로그인 완료!");
});

bot.addEventListener("error", function(message){
    console.log(`오류: ${message}`);
});

bot.login("님 아이디", process.env.pass)
.then(function(bot){
    const app = bot.createApp();

    app.addEventListener("create", async function(message, data){

        console.log(message, data);

        const t = message;
        if (t == ".안녕") {
            app.reply(data.id, "안녕하세요!");
        } else if (t == ".현재시각") {
            const delta = 9 * 3600 * 1000;
            const date = new Date(+new Date() + delta);
            const hour = date.getHours().toString().padStart(2, "0");
            const minute = date.getMinutes().toString().padStart(2, "0");
            app.reply(data.id, `현재 시각은 ${date.getMonth()+1}월 ${date.getDate()}일 ${hour}:${minute}`);
        }
    });

    app.run();
});
