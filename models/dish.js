const mongoose = require("mongoose");
const Promise = require("bluebird");

const DishSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    orderedQuantity: {
        type: Number
    },
    createdCount: {
        type: Number
    },
    predictedQuantity: {
        type: Number
    }
});

const Dish = module.exports = mongoose.model('Dish', DishSchema);

/**
 * Add the ordered quantity to the DB
 * @param {JSON} body 
 * @param {*} callback 
 */
module.exports.addOrderedQuantity = function (body, callback) {
    Dish.findOne({ name: body.name }, function (err, found) {
        if (found) {
            body.orderedQuantity = found.orderedQuantity + body.orderedQuantity;
            updateDish(body, callback);
        } else {
            body.predictedQuantity = 0;
            body.createdCount = 0;
            createNewDish(body, callback);
        }
    });
}

/**
 * Add the predicted quantity to the DB
 * @param {*} body 
 * @param {*} callback 
 */
module.exports.setPredictions = function(body, callback) {
    Dish.findOne({ name: body.name }, function(err, found) {
        if (found) {
            updateDish(body, callback);
        }  else {
            body.orderedQuantity = 0;
            body.createdCount = 0;
            createNewDish(body, callback);
        }
    });
}

/**
 * Add the created counted quantity count to the DB
 * @param {JSON} body 
 * @param {*} callback 
 */
module.exports.setCreatedCount = function(body, callback) {
    Dish.findOne({ name: body.name }, function(err, found) {
        if (found) {
            updateDish(body, callback);
        }  else {
            console.log(err);
        }
    });
}

/**
 * Create a new record in the DB
 * @param {JSON} dish 
 * @param {*} callback 
 */
function createNewDish(dish, callback) {
    Dish.create(dish, callback);
}

/**
 * Update a particular record in the DB
 * @param {JSON} body 
 * @param {*} callback 
 */
function updateDish(body, callback){
    Dish.findOneAndUpdate({ name: body.name }, { $set: body}, callback);
}

/**
 * Get all the records from the DB
 * @param {*} callback 
 */
module.exports.getAllData = function(callback){
    Dish.find(callback);
}

