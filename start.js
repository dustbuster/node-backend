const app = require('./server');
const config = require('./config');

const PORT = config.server.port || 5001; // Use config port or default to 5001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});