
const getUser = async (req, res) => {
    return res.send("Hello User!");
}

const postUser = (req, res) => {
    return res.send("Hello post User!");
}


module.exports = { getUser, postUser }