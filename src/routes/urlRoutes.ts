import express, { Request, Response, NextFunction } from "express";
import { shortenUrl, redirectUrl } from "../controllers/urlController";

const router = express.Router();


const asyncHandler = (fn: any) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post("/shorten", asyncHandler(shortenUrl));
router.get("/:shortUrl", asyncHandler(redirectUrl));

export default router;
