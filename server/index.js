const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/element-test", {
    useNewUrlParser: true
})
app.use(require('cors')())      //解决跨域问题
app.use(express.json())
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String }
}))
app.get('/', (req, res) => {

})
app.listen(3000, () => {
    console.log("http://localhost:3000")
})
app.post('/api/articles/create', async (req, res) => {
    const data = await Article.create(req.body)
    res.send("ok")
})
app.get('/api/articles/list', async (req, res) => {
    const data = await Article.find()
    res.send(data)
})
app.delete('/api/articles/remove/:id', async (req, res) => {
    const data = await Article.findByIdAndDelete(req.params.id)
    res.send('ok')
})
app.get('/api/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id)
    res.send(data)
})
app.post('/api/articles/edit/:id', async (req, res) => {
    const data = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(data)
})