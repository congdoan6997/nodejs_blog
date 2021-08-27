const Course = require('../models/Course');
class SiteController {
    //[GET] /home
    index(req, res) {
        // res.render('home');
        Course.find({}, function (err, docs) {
            // docs.forEach
            if (!err) {
                res.json(docs);
            } else {
                res.status(404).json({ error: 'error' });
            }
        });
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
