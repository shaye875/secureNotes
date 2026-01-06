export function ifBudy(req, res, next) {
    if (req.body && typeof (req.body) === 'object') {
        next()
    }
    else {
        res.status(409)
        res.json({ "false": "missing body" })
    }
}