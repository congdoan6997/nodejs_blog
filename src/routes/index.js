const newsRoute = require('./news.js');
const siteRoute = require('./site.js');
const courseRoute = require('./course.js');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/courses', courseRoute);
    app.use('/', siteRoute);
}

module.exports = route;
