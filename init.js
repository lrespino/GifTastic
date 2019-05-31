 // Initial array of gif
 var gifs = ["Altitude", 
 "Alien vs Ninja", 
 "Arctic Blast", 
 "Batman: Under the Red Hood", 
 "Beyond the Black Rainbow", 
 "The Book of Eli", 
 "The Crazies", 
 "Daybreakers", 
 "Denizen", 
 "Despicable Me", 
 "The Disappearance of Haruhi Suzumiya", 
 "Downstream", 
 "Enthiran", 
 "Future X-Cops", 
 "Growth", 
 "Hot Tub Time Machine", 
 "Hunter Prey", 
 "Inception", 
 "Iron Man 2", 
 "Justice League: Crisis on Two Earths"];
 function alertGifName() {

}
 function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < gifs.length; i++) {
      var a = $("<button>");
      a.addClass("gif-btn");
      a.attr("data-name", gifs[i]);
      a.text(gifs[i]);
      $("#buttons-view").append(a);
    }
  }
 // This function handles events where a gif button is clicked
 $("#add-gif").on("click", function(event) {
    event.preventDefault();
    console.log(this);
    var gif = $("#gif-input").val().trim();
    gifs.push(gif);
    renderButtons();
  });
  $(document).on("click", ".gif-btn", alertGifName);
  renderButtons();

  function alertGifName() {
//create var for g rated gif
// creat var for number of result return
    var gifName = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=DoHLXkG59mk873eFXDMLJERy2NX0xJYr";
  console.log(queryURL)
    // Creates AJAX call for the specific movie gif being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
//append 20 result
//append rating

    });

}