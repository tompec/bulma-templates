window.JSZip = require('jszip');
window.FileSaver = require('file-saver');
window.Vue = require('vue');
window.axios = require('axios');

new Vue({
  el: '#app',

  methods: {
    download(template) {
        var zip = new JSZip();

        axios.all([
            axios.get('templates/' + template + '.html'),
            axios.get('templates/' + template + '.css'),
          ])
          .then(axios.spread((html, css, appCss) => {
                zip.file(template + ".html", html.data);
                zip.file(template + ".css", css.data);

                zip.generateAsync({type:"blob"})
                    .then(function (blob) {
                        FileSaver.saveAs(blob, template + ".zip");
                    });
          }));
    }
  }
});
