"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    if (!err.statusCode) {
        console.log(`\nUnhandled error:\n \t ${err}\n`);
        return res.status(500).json({ message: "Unexpected error." });
    }
    res.status(err.statusCode).json(err.message);
};
