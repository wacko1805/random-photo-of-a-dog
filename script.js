

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
