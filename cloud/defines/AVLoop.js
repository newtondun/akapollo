var _ = require('lodash-node');

AV.Cloud.define('GetLoop', function(req, res) {

  var data = [];

  var Loop = new AV.Query("Loop");

  Loop.find({
    success: function(results) {
      if (_.isEmpty(results)) {
        data = {
          id: null,
          name: null,
          key: null,
          url: null
        };
      } else {
        data = _.map(results, function(result) {
          return {
            id: result.id,
            name: result.get('name'),
            key: result.get('key'),
            url: result.get('file').url()
          };
        });
      }

      res.success(data);
    },
    error: function(error) {
      res.error(error);
    }
  });

});

AV.Cloud.define('PutLoop', function(req, res) {

  if (_.isEmpty(req.params)) {
    return res.error('You Must Put an ID or Key');
  }

  var id = req.params.id;
  var key = req.params.key;

  var Loop = new AV.Query('Loop');
  Loop.equalTo('objectId', id);

  Loop.first({
    success: function(result) {
      if (_.isEmpty(result)) {
        return res.error('Cannot Find this Loop');
      }

      result.fetchWhenSave(true);
      result.set('key', key);
      result.save(null, {
        success: function() {
          res.success('Upload Key Success');
        },
        error: function(error) {
          res.error(error);
        }
      });
    },
    error: function(error) {
      res.error(error);
    }
  });

});

AV.Cloud.define('DeleteLoop', function(req, res) {

  if (_.isEmpty(req.params)) {
    return res.error('You Must Put an ID or Key');
  }

  var id = req.params.id;

  var Loop = new AV.Query('Loop');
  Loop.equalTo('objectId', id);

  Loop.first({
    success: function(result) {
      if (_.isEmpty(result)) {
        return res.error('Cannot Find this Loop');
      }

      result.destroy({
        success: function(object) {
          res.success(object.id + 'is Successfully Delete');
        },
        error: function(error) {
          res.error(error);
        }
      });
    },
    error: function(error) {
      res.error(error);
    }
  });
});
