const proffys = [

    {
        name: "Makiesse Kiassungua",
        avatar: "https://avatars0.githubusercontent.com/u/11598037?s=460&u=f4ae792b5258884acf7ba69a7166f3acc0661ad8&v=4",
        whatsapp: "985996584",
        bio: "Working with Technology since 2013. I'm a technology enthusiastic.<br><br>I love Oracle Data Base and programming in Java,Node , React and also Python for data",
        subject: "Developer",
        cost: "20",
        weekday: [0],
        time_from: [720],
        timo_to: [1220]

    },


    {
        name: "Gilberto Costa",
        avatar: "https://avatars0.githubusercontent.com/u/11598037?s=460&u=f4ae792b5258884acf7ba69a7166f3acc0661ad8&v=4",
        whatsapp: "985996584",
        bio: "Working with Technology since 2013. I'm a technology enthusiastic.<br><br>I love Oracle Data Base and programming in Java,Node , React and also Python for data",
        subject: "Developer",
        cost: "20",
        weekday: [1],
        time_from: [720],
        timo_to: [1220]
    }

]

function pageLanding(req, res) {
    return res.render("index.html")

}

function pageStudy(req, res) {
    return res.render("study.html")

}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")

}



const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(5500)