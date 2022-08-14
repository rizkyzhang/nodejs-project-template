/* eslint-disable @typescript-eslint/no-empty-interface */
import express from "express"

declare global {
  namespace Express {
    interface Request {
      test?: string
    }
  }
}
