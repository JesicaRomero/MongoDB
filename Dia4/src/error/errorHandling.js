function notFound(req, res, next) {
  res.status(404).json({ error: true, code: 404, message: 'Not found' })
}

function internalServer(err, req, res, next) {
  res
    .status(500)
    .json({ error: true, code: 500, message: 'Internal server error' })
}

module.exports = { notFound, internalServer }
