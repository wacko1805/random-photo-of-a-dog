

    fetch('https://random-dog-api.herokuapp.com/')
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    function appendData(data) {
        var mainContainer = document.getElementById("image");

        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = '<img src="' + data[i].message + '" width="100%" > ';
            mainContainer.appendChild(div);
        }
    }


    const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/index.php', (req, res) => {
  request(
    { url: 'https://random-dog-api.herokuapp.com' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`listening on ${PORT}`));