// Middleware to check if user is logged in
// redirect to login page if not logged in
// Code source from the UofU Coding Bootcamp

const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
