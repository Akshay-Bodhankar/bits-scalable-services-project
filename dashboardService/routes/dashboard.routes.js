const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     DashboardOverview:
 *       type: object
 *       properties:
 *         totalStudents:
 *           type: number
 *           description: Total number of students
 *         vaccinationPercentage:
 *           type: string
 *           description: Percentage of vaccinated students
 *         upcomingDrives:
 *           type: number
 *           description: Number of upcoming vaccination drives
 *         upcomingDrivesList:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               vaccineName:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               grades:
 *                 type: string
 *               availableDoses:
 *                 type: number
 *     DashboardStats:
 *       type: object
 *       properties:
 *         totalDrives:
 *           type: number
 *         completedDrives:
 *           type: number
 *         activeDrives:
 *           type: number
 *         averageStudentsPerDrive:
 *           type: string
 *         studentParticipationRate:
 *           type: string
 *         vaccinationByGrade:
 *           type: object
 *           additionalProperties:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *               vaccinated:
 *                 type: number
 *               percentage:
 *                 type: string
 */

/**
 * @swagger
 * /dashboard/overview:
 *   get:
 *     summary: Get dashboard overview
 *     description: Retrieve overview statistics including total students, vaccination percentage, and upcoming drives
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard overview data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DashboardOverview'
 *       503:
 *         description: Service unavailable
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *       504:
 *         description: Request timeout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */
router.get('/overview', dashboardController.getDashboardOverview);

/**
 * @swagger
 * /dashboard/stats:
 *   get:
 *     summary: Get detailed dashboard statistics
 *     description: Retrieve detailed statistics including drive information and grade-wise vaccination data
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Dashboard statistics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DashboardStats'
 *       503:
 *         description: Service unavailable
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *       504:
 *         description: Request timeout
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */
router.get('/stats', dashboardController.getDashboardStats);

module.exports = router; 