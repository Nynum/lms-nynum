exports.adminDashboard = (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard', user: req.user });
};

exports.studentDashboard = (req, res) => {
  res.json({ message: 'Welcome to Student Dashboard', user: req.user });
};
