
module.exports = {
    async projetos(req, res){
        return res.send({ ok: true, user: req.userId});
    }
}