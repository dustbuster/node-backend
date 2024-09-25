
// Example route: Add a new item
app.post('/api/articles', (req, res) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO Articles (name, description) VALUES (?, ?)';
  connection.query(sql, [name, description], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ id: results.insertId, name, description });
  });
});

// Example route: Update an item
app.put('/api/articles/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE Articles SET name = ?, description = ? WHERE id = ?';
  connection.query(sql, [name, description, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: 'Item updated successfully' });
  });
});

// Example route: Delete an item
app.delete('/api/articles/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM Articles WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  });
});
