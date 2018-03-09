function Controller(){
  var service = new Service()
  var listingElem = document.getElementById("listing")

  function drawItems(items){
    var template = ''
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      console.log(item.name)
      template += `
      <h3>${item.name}</h3>
      <p>${item.height}</p>
      `
    }
    listingElem.innerHTML = template
  }

  this.getItems = function(e) {
    e.preventDefault();

    // console.log(e.target)

    // console.log(e.target[0].value);
    console.log(e.target[1].checked);
    // console.log(e.target[2].value);

    // service.getItems(drawItems)
  }
  // uncomment to draw selected criteria to the page.
  // service.getItems(drawItems)
}