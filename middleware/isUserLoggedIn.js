module.exports = (req, res, next) => {
  if (!req.user === 1) {
    req.flash('error', 'You must be logged in as an admin to access this page');
    res.redirect('/auth/login');
  } else {
    next();
  }
};