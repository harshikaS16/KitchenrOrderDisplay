const express = require("express");
const router = express.Router();
const Promise = require("bluebird");

const Dish = require('../models/dish');

/**
 * API to Create Order
 * @returns {JSON}
 */
router.post('/createOrder', (req, res) => {
    Dish.addOrderedQuantity(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

/**
 * API to Get All Item Details
 * @returns {Array}
 */
router.get('/getData', (req, res) => {
    Dish.getAllData(function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});

/**
 * API to Set Prediction
 * @returns {JSON}
 */
router.post('/setPrediction', (req, res) => {
    Dish.setPredictions(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

/**
 * API for Update Created Quantity Count
 * @returns {JSON}
 */
router.post('/createdCount', (req, res) => {
    Dish.setCreatedCount(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

module.exports = router;