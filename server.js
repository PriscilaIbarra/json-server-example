const jsonserver = require('json-server');
const auth = require('json-server-auth');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middlewares = jsonserver.defaults()
const cors = require('cors');
server.db = router.db
server.use(cors());
server.use(auth);
server.use(router);
server.use(middlewares);
const port = process.env.PORT || 4000
server.listen(port, () => console.log('Server is listening on PORT 3000'))