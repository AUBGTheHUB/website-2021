import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "The HUB" });
});

export default routes;
