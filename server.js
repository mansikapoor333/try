const express = require("express")
const bodyParser = require('body-parser')
const querystring = require('querystring')
const https = require('https')
const cors = require('cors')

const app = express()

const serverPort = 8080
const guardian_key = "dcf8e105-1678-40c6-8e3d-31bfa8968101"
const newyork_key = "bLImTTiycbyuHaWT8j99q2mgIgUImD0O"
const commentbox_projectid = "5765659778613248-proj"
app.use(cors('*'))
// app.options('*', cors()) 

app.get('/mainnewyork', (req, res) => {


    var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O"
    let data = '';

    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            console.log("data is", data)
            data = JSON.parse(data)
			res.send(data)
            res.end()
            
        })
            // console.log(data)
    
    }).on("error", (err) => {
        console.log(err)
    })
   
})


app.get('/othernewyork1/:section_name', (req, res) => {
    var section_name = req.params.section_name

    var url = "https://api.nytimes.com/svc/topstories/v2/" + section_name + ".json?api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O"
    let data = '';

    https.get(url, (resp) => {
       

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

    
})

app.get('/mainguardian', (req, res) => {
    // var section = req.params.section

    var url = "https://content.guardianapis.com/search?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&section=(sport|business|technology|politics)&show-blocks=all"
    let data = '';

    // https.get(url)z/
    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
            // if (section == 'sport' || section == 'business' || section == 'technology' || section == 'politics'){
            // console.log("other API::: " + data);
			res.send(data)
            res.end()
            // }
        })
    }).on("error", (err) => {
        console.log(err)
    })
    
})

app.get('/otherguardian1/:section_name', (req, res) => {
    var section_name = req.params.section_name

    var url = "https://content.guardianapis.com/" + section_name + "?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all"
    let data = '';


    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

   
})

app.get('/otherguardian/:val', (req, res) => {
    var val = req.params.val

    var url = "https://content.guardianapis.com/search?q=" + val + "&api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all"
    let data = '';


    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

   
})

app.get('/othernewyork/:val', (req, res) => {
    var val = req.params.val

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + val + "&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O"
    let data = '';

    https.get(url, (resp) => {
       

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

    
})

app.get('/otherguardian2', (req, res) => {
    var values = req.query.id

    var url = "https://content.guardianapis.com/" + values + "?api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all"
    let data = '';


    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

   
})

app.get('/othernewyork2', (req, res) => {
    var values = req.query.id

    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("' + values + '")&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O'
    let data = '';

    https.get(url, (resp) => {
       

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

    
})


app.get('/otherguardian3/:vale', (req, res) => {
    var vale = req.params.vale

    var url = "https://content.guardianapis.com/search?q=" + vale + "&api-key=dcf8e105-1678-40c6-8e3d-31bfa8968101&show-blocks=all"
    let data = '';


    https.get(url, (resp) => {
        

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

   
})

app.get('/othernewyork3/:vale', (req, res) => {
    // console.log("Here",othernewyork);
    var vale = req.params.vale

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + vale + "&api-key=bLImTTiycbyuHaWT8j99q2mgIgUImD0O"
    let data = '';
    console.log("url",url);

    https.get(url, (resp) => {
       

        resp.on('data', (chunk) => {
            data += chunk
        })
        resp.on('end', ()=> {
            console.log("search", data)
            data = JSON.parse(data)
			res.send(data)
            res.end()
        })
    }).on("error", (err) => {
        console.log(err)
    })

    
})




var server = app.listen(serverPort)


//filtering
//commentbox