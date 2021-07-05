fetch('https://random-dog-api.herokuapp.com/dog-fact.php')
    
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
var mainContainer = document.getElementById("fact");

for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = '<p>' + data[i].fact + '</p > ';
    mainContainer.appendChild(div);
}
}
