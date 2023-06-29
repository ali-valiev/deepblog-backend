const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(8000, (req, res) => {
  console.log(`server has started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Base Directory");
});

// get all blogs
app.get("/blogs", async (req, res) => {
  try {
    const allBlogs = await pool.query("SELECT * FROM blogs");
    res.json(allBlogs.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get one blog with id
app.get("/blogs/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const blog = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
    res.json(blog.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//create a blog
app.post("/blogs", async (req, res) => {
  try {
    const { title, author, date, body } = req.body;
    console.log(req.body);
    const newBlog = await pool.query(
      "INSERT INTO blogs (title, author, date, body) VALUES ($1, $2, $3, $4)RETURNING *",
      [title, author, date, body]
    );
    res.json(newBlog.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Delete a blog
// app.delete("/blogs/:id", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const blogDelete = pool.query("DELETE FROM blogs WHERE id=$1 RETURNING *", [
//       id,
//     ]);
//     res.send(`Deleted blog with id of ${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// });
