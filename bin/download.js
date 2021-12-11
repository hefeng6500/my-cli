let download = require("download-git-repo");

download("direct:https://github.com/hefeng6500/interview-blog#main", "test", {
  clone: true,
}, function (err) {
  console.log(err)
});
