const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const { unknownEndpoint } = require('./middleware/notFoundMiddleware');

const app = express();

// Init middleware
app.use(errorHandler);
app.use(unknownEndpoint);

// Body Parser Middleware
app.use(express.json());

// Users API Routes
app.use('/api/users', require('./routes/usersRoutes'));
app.use('api/tours', require('./routes/toursRoutes'));
app.use('api/services', require('./routes/servicesRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));