import { Request, Response } from "express";
import Url from "../models/Url";
import validUrl from "valid-url";

export const shortenUrl = async (req: Request, res: Response) => {
  const { originalUrl } = req.body;

  if (!validUrl.isUri(originalUrl)) {
    return res.status(400).json({ message: " Invalid URL" });
  }

  let url = await Url.findOne({ originalUrl });
  console.log(url);
  if (!url) {
    url = await Url.create({ originalUrl });
    console.log(url);
  }

  res.status(200).json({
    shortUrl: `http://localhost:5000/${url.shortUrl}`,
  });
};

export const redirectUrl = async (req: Request, res: Response) => {
  const { shortUrl } = req.params;

  const url = await Url.findOne({ shortUrl });

  if (url) {
    res.redirect(url.originalUrl);
    //res.status(200).json({ message: url.shortUrl });

  } else {
    res.status(404).json({ message: "URL Not Found" });
  }
};
