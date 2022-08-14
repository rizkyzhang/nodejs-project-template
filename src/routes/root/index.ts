import express from "express"
import packageJson from "@/package.json"

const router = express.Router()

router.get("/", async (req, res) => {
  res.json({
    message: "Welcome to starter API",
    version: packageJson.version,
  })
})

export default router
