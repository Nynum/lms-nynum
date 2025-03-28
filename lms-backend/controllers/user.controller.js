const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "ไม่สามารถดึงข้อมูลผู้ใช้ได้", error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "เกิดข้อผิดพลาด", error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "ไม่สามารถอัปเดตผู้ใช้ได้", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "ลบผู้ใช้เรียบร้อยแล้ว" });
  } catch (error) {
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการลบผู้ใช้", error: error.message });
  }
};
