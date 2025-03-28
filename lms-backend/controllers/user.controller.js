const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await userService.getById(id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.updateUserRole = async (req, res) => {
  const id = parseInt(req.params.id);
  const { role } = req.body;
  const updated = await userService.updateRole(id, role);
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  await userService.delete(id);
  res.json({ message: 'User deleted' });
};
