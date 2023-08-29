const pa11y = require('pa11y');

exports.callJSFun = function scanPally(url)
{
    pa11y(url).then((results) => {
        return results;
    });
}