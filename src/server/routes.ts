import * as express from "express";

import db from "./db";

const router = express.Router();

router.get("/api/chirps/:id?", async (req, res) => {
  let id = Number(req.params.id);
  if (id) {
    try {
        let [chirp] = await db.Chirpr.one(id);
        res.json(chirp);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
  } else {
          try {
      let chirps = await db.Chirpr.all();
      res.json(chirps);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
});

// POST /api/chirps/
router.post("/api/chirps", async (req, res, next) => {
    const chirp = req.body;
    try {
      const result = await db.Chirpr.insert(chirp.userid, chirp.content);
      res.json({ id: result.insertId });
    } catch (error) {
      next(error);
    }
  });
  
  // PUT /api/chirps/1
  router.put("/api/chirps/:id", async (req, res, next) => {
    const id = Number(req.params.id);
    const chirp = req.body;
    try {
      await db.Chirpr.update(id, chirp.content);
      res.json({ msg: "edited", id });
    } catch (error) {
      next(error);
    }
  });
  
  // DELETE /api/chirps/1
  router.delete("/api/chirps/:id", async (req, res, next) => {
    const id = Number(req.params.id);
    try {
      await db.Chirpr.destroy(id);
      res.json({ msg: "destroyed" });
    } catch (error) {
      next(error);
    }
  });

  
  
  export default router;