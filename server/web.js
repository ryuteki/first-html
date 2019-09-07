var http = require('http');
console.log("start web service")
var server = http.createServer(function(req, res) {
    console.log("Hello world !")
    res.write(`<!doctype html>
<html lang="jp">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-with, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="content-type" content="text/html; charset = UTF-8">
  <title>My first Bootstrap-Vue app</title>
  <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css" />
</head>

<body>
  <div id="app">

    <div>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
    </div>

    <div>
      <b-button size="sm" @click="toggle">
        {{ show ? 'Hide' : 'Show' }} Alert
      </b-button>
      <b-alert
        v-model="show"
        class="mt-3"
        dismissible
        @dismissed="dismissed"
      >
        Hello {{ name }}!
      </b-alert>
    </div>

    <header style="background-color:gray">Header</header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2" style="background-color:red;">Red</div>
        <div class="col-sm-8" style="background-color:blue;">Blue</div>
        <div class="col-sm-2" style="background-color:yellow;">Yellow</div>
      </div>
    </div>
    <footer style="background-color:gray">Footer</footer>

    <div>
      GitHub で編集する <a href="https://github.com/ryuteki/first-bootstrap-vue">https://github.com/ryuteki/first-bootstrap-vue</a>
    </div>
	    
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
  <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
  <script>
    var app = new Vue({
      el: '#app',
      data: {
        name: 'BootstrapVue',
        show: true,
          message: 'Hello Vue!'
      },
      watch: {
        show(newVal) {
        console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
        }
      },
      methods: {
        toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
        },
        dismissed() {
        console.log('Alert dismissed')
        }
      }
    })
  </script>
</body>

</html>
    `);
  res.end();
}).listen(8080);