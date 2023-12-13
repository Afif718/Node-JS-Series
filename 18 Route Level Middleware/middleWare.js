//Now middleware in a separate file
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Please provide ur age</h1>");
  } else if (req.query.age < 18) {
    res.send(
      "<h1>You are under aged..Only 18 or 18+ ppl are allowed here</h1>"
    );
  } else {
    next();
  }
};

module.exports = reqFilter;
