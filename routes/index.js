const router = require("express").Router();
const queryRoutes = require("./api/queryRoutes");
const userRoutes = require("./api/userRoutes");
const projectRoutes = require("./api/projectRoutes");
const moduleRoutes = require("./api/modulesRoutes");

//use new routes here like
//http://localhost:8080/user/....

//router.use("/order", ordersRoutes);

router.use("/user", userRoutes);
router.use("/query", queryRoutes);
router.use("/project", projectRoutes);
router.use("/module", moduleRoutes);

module.exports = router;
