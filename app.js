require('./config/passport');
const app = require('./express.conf');

app.listen(process.env.SERVER_INTERNAL_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_INTERNAL_PORT}/`));
