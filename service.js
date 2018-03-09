function Service(){
  var listing;

  this.getItems = function (callBack){
    console.log("making request")
    $.get("https://swapi.co/api/people/?page=1")
      .then( res =>{
        listing = res.results
        callBack(listing)
      })
      .catch(err =>{
        console.log(err)
      })
  }

}