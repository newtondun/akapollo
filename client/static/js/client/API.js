var API = {

  get: function(url, type, cb) {

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type;

    request.onload = function() {
      if (request.status === 200) {
        var res = request.response;
        cb(res);
      }
    };

    request.send();

  }

};

module.exports = API;
