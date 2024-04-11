const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alaa",
    database: "task_mn"
});
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database");
        return;
    }
    console.log("Connected to the database");
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO tasks (`name`, `title`, `cont`, `date`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.title,
        req.body.cont,
        req.body.date
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(data);
    });
});
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE tasks SET name = ?, title = ?, cont = ?, date = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.title,
        req.body.cont,
        req.body.date
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(data);
    });
});
app.delete('/tasks/:id', (req, res) => {
    const sql = "DELETE FROM tasks  WHERE id = ?";
    const values = [
        req.body.name,
        req.body.title,
        req.body.cont,
        req.body.date
    ];
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(data);
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
