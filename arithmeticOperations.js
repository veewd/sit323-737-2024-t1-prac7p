const express = require("express");
const app = express();

// Addition function
const add = (n1, n2) => { return n1 + n2; }

// Subtraction function
const subtract = (n1, n2) => { return n1 - n2; }

// Multiplication function
const multiply = (n1, n2) => { return n1 * n2; }

// Division function
const divide = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Division by zero");
    }
    return n1 / n2;
}

// Exponentiation function
const exponentiate = (n, exp) => { return Math.pow(n, exp); }

// Square root function
const squareRoot = (n) => { return Math.sqrt(n); }

// Modulo function
const modulo = (n1, n2) => { return n1 % n2; }

// Endpoint for addition
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = add(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for subtraction
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for multiplication
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for division
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for exponentiation
app.get("/exponentiate", (req, res) => {
    try {
        const base = parseFloat(req.query.base);
        const exp = parseFloat(req.query.exp);
        if (isNaN(base) || isNaN(exp)) {
            throw new Error("Invalid input. Both base and exponent must be valid numbers.");
        }
        const result = exponentiate(base, exp);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for square root
app.get("/sqrt", (req, res) => {
    try {
        const num = parseFloat(req.query.num);
        if (isNaN(num)) {
            throw new Error("Invalid input. The number must be a valid number.");
        }
        const result = squareRoot(num);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for modulo
app.get("/modulo", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = modulo(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
