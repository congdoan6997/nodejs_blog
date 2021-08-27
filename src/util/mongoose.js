module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((ma) => ma.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
