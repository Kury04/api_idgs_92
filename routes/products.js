const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
/**
 * @swagger
 * /api/product/register:
 *  post:
 *     summary: Register a new product
 *     tags: [List]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               marca:
 *                 type: string
 *               cantidad:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product registered successfully
 */
router.post('/register', productController.register);

/**
 * @swagger
 * /api/product/list:
 *   get:
 *     summary: List all products
 *     tags: [List]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   marca:
 *                     type: string
 *                   cantidad:
 *                      type: string
 *       500:
 *         description: Internal Server Error
 */
router.get('/list', productController.listProduct);

module.exports = router;

