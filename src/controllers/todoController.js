import { prisma } from "../config/db.js";

// GET single task by ID
export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await prisma.tasks.findUnique({
      where: { id },
    });

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    return res.status(200).json({ success: true, data: todo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// GET all tasks
export const getAllTodo = async (req, res) => {
  try {
    const todos = await prisma.tasks.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({ success: true, data: todos });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// CREATE a new task
export const createTodo = async (req, res) => {
  try {
    const { title, description, priority, status } = req.validBody;
    const { id } = req.user;

    const newTodo = await prisma.tasks.create({
      data: {
        title,
        description,
        priority, // "low" | "medium" | "high"
        status: status || "todo", // "todo" | "ongoing" | "completed"
        user_id: id,
      },
    });

    return res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    console.log(error);

    // unique constraint violation (duplicate title)
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ success: false, message: "A task with this title already exists" });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// EDIT/UPDATE an existing task
export const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    const todo = await prisma.tasks.findUnique({
      where: { id },
    });

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    const updatedTodo = await prisma.tasks.update({
      where: { id },
      data: {
        title: title ?? todo.title,
        description: description ?? todo.description,
        status: status ?? todo.status,
        priority: priority ?? todo.priority,
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

// DELETE a task
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await prisma.tasks.findUnique({
      where: { id },
    });

    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }

    await prisma.tasks.delete({
      where: { id },
    });

    return res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};