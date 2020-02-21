const express = require('express');
const sendMail = require('./mail');
// const router = express.Router();
const cors = require('cors');
// const path = require('path')
//const proxy = require('http-proxy-middleware');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: false
}))


app.use(express.json())


app.use(cors());


app.post('/api/mail', (req, res) => {
    const {
        email,
        text
    } = req.body
    console.log('body: ', req.body)
    sendMail(email, text, (err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Internal Error'
            });
        } else {
            res.json({
                message: 'Email sent!!'
            })
        }
    })
})
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('portfolio-react/build'))
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'portfolio-react', 'build', 'index.html'))

//     });
// }

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))