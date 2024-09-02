let nextId = 1

const mode1 = (body, id = nextId++) => {
    if (
        body.email != undefined &&
        body.senha != undefined &&
        body.email != "" &&
        body.senha != ""
    ) {
        return {
            id,
            email: body.email,
            senha: body.senha
        }
    }
}

module.exports = mode1