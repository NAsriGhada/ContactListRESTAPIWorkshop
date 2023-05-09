
// const userControllers = require("../controllers/userController");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");


const allUserRoutes = (app) => {
//   console.log("what is inside app", app);
  app.post("/api/add/user", createUser);
  app.get("/api/get/users", getAllUsers);
  app.get("/api/get/user/:id", getOneUser);
  app.put("/api/update/user/:id", updateUser);
  app.delete("/api/delete/user/:id", deleteUser);
};

module.exports = allUserRoutes;