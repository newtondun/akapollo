var _ = require('lodash-node');

AV.Cloud.define('GetSounds', function(request, response) {
  var Sounds = new AV.Query("_File");
  var data = [];
  Sounds.find({
    success: function(results) {
      data = _.map(results, function(result) {
        return {
          name: result.attributes.name,
          url: result.attributes.url
        };
      });
      response.success(data);
    },
    error: function(error) {
      response.error(error);
    }
  });
});
