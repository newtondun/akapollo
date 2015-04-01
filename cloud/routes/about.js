var benjamin = 'benjamin';
var newton = 'newton';
var shawn = 'shawn';

var contents = {
  benjamin: benjamin,
  newton: newton,
  shawn: shawn
};

var about = function(req, res) {
  res.render('about', contents);
};

module.exports = about;
