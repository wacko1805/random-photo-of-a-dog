fetch('https://random-dog-api.herokuapp.com/dog/')
    
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
    div.innerHTML = '<img  src="' + data[i].image + '" width="100%" ></div><div class="buttons"><a onClick="window.location.reload();"><buttton class="badge"><i class="fas fa-redo"></i> New Image</button></a><br><div class="fact"><h2>Random Dog Fact: </h2><p>' + data[i].fact + '</p></div>';
    mainContainer.appendChild(div);

}
}

