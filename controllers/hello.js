function getHello(req, res) {
    let environment = process.env.NODE_ENV
    if(environment === 'test') {
    res.status(200).send({
        msg: "Hola Mundo desde controllers! desde test",
    })
} else {
    res.status(200).send({
        msg: "Hola Mundo desde controllers!",
    })
}
};

module.exports = {
    getHello,
}