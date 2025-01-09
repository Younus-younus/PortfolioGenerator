import express from "express";
import { isLoggedIn } from "../middlewares/middleware.js";
import { newPortfolio } from "../controllers/postController.js";
import multer from 'multer';
import { Portfolios, show } from "../controllers/getController.js";
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/portfolio', upload.single('image'),isLoggedIn,newPortfolio);
router.get('/portfolios',Portfolios)
router.get("/portfolio/:id",show);

export default router;
