var http = require('http');
console.log("start web service")
var server = http.createServer(function(req, res) {
    console.log("Hello world !")
    res.write(resText);
  res.end();
}).listen(8080);

var resText = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">
  <style type="text/css">
      p{
        font-size: 30px;
        color: red;
      }
      .blue{
        font-size: 20px;
        color: blue;
      }
      #item1{
        font-size: 40px;
        color: green;
      }
  </style>
</head>

<body>
  <div  id="app" class="blue">
    {{ message }} <span id="item1">アイテム1</span>
    <p>
        {{ message }} <button v-on:click="reverseMessage">アイテム2</button>
    </p>
  </div>

<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>  <script>
  // Vue.js sample
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  </script>
</body>
</html>`;
