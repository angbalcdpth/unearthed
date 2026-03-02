import pool from '../config/database.js'

const getGiftById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM gifts
      WHERE id=$1
    `

    const giftId = req.params.giftId

    const results = await pool.query(selectQuery, [giftId])

    res.status(200).json(results.rows[0])

  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default { getGiftById }
