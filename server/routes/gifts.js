import express from 'express';
import giftData from '../data/gifts.js'
import GiftsController from '../controllers/gifts.js'

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json(giftData)
})

router.get('/:giftId', GiftsController.getGiftById)

export default router;
