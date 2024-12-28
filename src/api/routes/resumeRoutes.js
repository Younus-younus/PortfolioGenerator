import express from "express";
import { isLoggedIn } from "../middlewares/middleware.js";
import { newPortfolio } from "../controllers/postController.js";
import multer from 'multer';
import { Portfolios, show } from "../controllers/getController.js";
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/portfolio', upload.single('image'),isLoggedIn,newPortfolio);
router.get('/portfolios',Portfolios)
router.get("/:id", async (req, res) => {
    try {
        await show(req, res);
    } catch (error) {
        console.error("Error in GET /:id:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;
