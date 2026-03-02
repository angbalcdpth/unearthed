import express from 'express';
import path from 'path';

import {fileURLToPath} from 'url';
import giftData from '../data/gifts.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/giftId', (req, res) => {
  res.status(200).json(giftData)
})

router.get('/:id', (req, res) => {
  const gift = giftData.find(gift => gift.id === Number(req.params.id))
  if (!gift) return res.status(404).json({ message: 'Gift not found' })

  if (req.headers.accept && req.headers.accept.includes('text/html')) {
    res.sendFile(path.join(__dirname, '../../client/public/gift.html'))
  } else {
    res.status(200).json(gift)
  }
})

export default router;
