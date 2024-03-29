const router = require("express").Router();
const queryRoutes = require("./api/queryRoutes");
const userRoutes = require("./api/userRoutes");
const projectRoutes = require("./api/projectRoutes");
const moduleRoutes = require("./api/modulesRoutes");
const docRouets = require("./api/DocRoutes");
const procurementRoutes = require("./api/procurementRoutes");
const upcomingPayments = require("./api/upcomingPaymentRoutes");
const transactionRoutes = require("./api/transacionRoutes");
const chartRoutes = require("./api/chartsRoute");
const monthlyRoutes = require("./api/monthlyRoute")
const { auth } = require("../middlewares/auth");
const { projectManagement } = require("../controllers/projectManagement");
const { financialManagement } = require("../controllers/financialmanagement");
//use new routes here like
//http://localhost:8080/user/....

//router.use("/order", ordersRoutes);

router.use("/user", userRoutes);
router.use("/query", queryRoutes);
router.use("/project", projectRoutes);
router.use("/module", moduleRoutes);
router.use("/doc", docRouets);
router.use("/procurement", procurementRoutes);
router.use("/upcoming-payments", upcomingPayments);
router.use("/transactions", transactionRoutes);
router.use("/charts", chartRoutes);

router.use("/project-management", auth, projectManagement);
router.use("/financial-management",auth,financialManagement)
router.use("/monthly",monthlyRoutes)

module.exports = router;
