function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}

// declare url
const url = 'https://foodish-api.herokuapp.com/api/images/';

// Hook the anchor tags on menu to the REST API call and fetch data back and display in image tag
function displayImages(anchor){
    fetch(url + anchor.innerHTML.toLowerCase())
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.querySelector(".randomFoodImage").src = json.image;
    })
    .catch(err => console.log("something went wrong!", err))
   
}



