// backend/src/controllers/taskController.js
const pool = require('../db'); // ดูให้ดีว่าถอยจุดไปดึง db.js ถูกต้องไหม (ถ้าอยู่ในโฟลเดอร์ controllers ต้องถอย 1 ชั้นด้วย ../)

// 1. ฟังก์ชันดึงข้อมูลทั้งหมด
const getAllTasks = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
    return res.json(rows); // ส่งข้อมูลกลับไปหาคนเรียก
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// 2. ฟังก์ชันอื่น ๆ (เขียนโครงสร้างรอไว้ก่อนได้)
const getTaskById = async (req, res) => { res.json({ message: "get by id" }); };
const createTask = async (req, res) => { res.json({ message: "create" }); };
const updateTask = async (req, res) => { res.json({ message: "update" }); };
const deleteTask = async (req, res) => { res.json({ message: "delete" }); };

// สำคัญมาก: ต้องส่งออกไปให้ครบทุกตัวตามที่ routes เรียกใช้!
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};