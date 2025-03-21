const express = require('express');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Authentication middleware
const authenticate = (req, res, next) => {
    // Placeholder for authentication logic
    console.log('Authenticating user...');
    next();
};

// Routes for Admin
app.use('/admin', authenticate, (req, res) => {
    res.send('Admin Form: Fill out the required details.');
});

// Routes for Headteacher
app.use('/headteacher', authenticate, (req, res) => {
    res.send('Headteacher Form: Fill out the required details.');
});

// Routes for Student
app.use('/student', authenticate, (req, res) => {
    res.send('Student Form: Fill out the required details.');
});

// Routes for Parent
app.use('/parent', authenticate, (req, res) => {
    res.send('Parent Form: Fill out the required details.');
});

// Routes for Teacher
app.use('/teacher', authenticate, (req, res) => {
    res.send('Teacher Form: Fill out the required details.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});