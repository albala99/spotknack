fetch('mobile.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    for(var i=0; i<data.length;i++){
        document.getElementById("container").innerHTML+=
        data[i].id + data[i].model + data[i].price+ "<br />";
    }
})
.catch(function(error){
    console.log(error);
})