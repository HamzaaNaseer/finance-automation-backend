const router = require("express").Router();
const queryRoutes = require("./api/queryRoutes");
const userRoutes = require("./api/userRoutes");

//use new routes here like
//http://localhost:8080/user/....

//router.use("/order", ordersRoutes);

router.use("/user", userRoutes);
router.use("/query", queryRoutes);

module.exports = router;
