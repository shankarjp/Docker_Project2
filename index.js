express = require('express');
redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send("Visits: " + visits);
        client.set('visits', parseInt(visits)+1);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
