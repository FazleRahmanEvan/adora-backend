import express from "express";

import upload from "../middlewares/multer.js";
import exp from "constants";
import authAdmin from "../middlewares/authAdmin.js";
import {
  addDoctor,
  allDoctors,
  appointmentCancel,
  appointmentsAdmin,
  loginAdmin,
} from "../controllers/adminController.js";
import { changeAvailablity } from "../controllers/doctorController.js";

const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin);
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);

adminRouter.get("/appointments", authAdmin, appointmentsAdmin);

adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);

export default adminRouter;
