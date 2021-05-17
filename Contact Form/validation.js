var submit = document.getElementById("submit");


submit.OnClick = function(e) {
    console.log(jsFields); //Brad
}

var firstname = document.getElementById("first-name").innerText;

var fields = {
    "First Name":firstname,
};


jsonFields = JSON.stringify(fields);//convert to JSON

jsFields = JSON.parse(jsonFields); //convert to JS Object
