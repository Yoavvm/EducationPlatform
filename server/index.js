const express = require('express');
const cors = require('cors');

const { connectToMongoDB } = require('./configs/mongodb.config');


const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = require('./configs/swagger.config').options;
const swaggerSpec = swaggerJSDoc(swaggerOptions);

const app = express();
connectToMongoDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(3001, () => console.log("listening on port 3001"));