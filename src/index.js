const express = require("express")
const usuario_router = require("./routes/usuario.js")
const rede_router = require("./routes/rede.js")
const barbearia_router = require("./routes/barbearia.js")
const barbeiro_router = require("./routes/barbeiro.js")
const cliente_router = require("./routes/cliente.js")
const servico_router = require("./routes/servico.js")
const atendimento_router = require("./routes/atendimento.js")
const app = express()
const port = 5000

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/atendimento", atendimento_router)
app.use("/servico", servico_router)
app.use("/cliente", cliente_router)
app.use("/barbeiro", barbeiro_router)
app.use("/barbearia", barbearia_router)
app.use("/rede", rede_router)
app.use("/usuario", usuario_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})




app.post("/usuario", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

app.get("/usuario", (req, res) => {
    res.json(usuario_controller.index())
})

app.get("/usuario/:id", (req, res) => {
    res.json(usuario_controller.show(req.parsms.id))
})

app.put("/usuario/:id", (req, res) => {
    const code = usuario_controller.update(req.body, req.params)
    res.status(code).json()
})

app.delete("/usuario/:id", (req, res) => {
    const code = usuario_controller.destroy(req.params.id)
})