 // Initial array of gif
 var gifs = [" Altitude ", 
 " Alien vs Ninja ", 
 " Arctic Blast ", 
 " Batman: Under the Red Hood ", 
 " Beyond the Black Rainbow ", 
 " The Book of Eli ", 
 " The Crazies ", 
 " Daybreakers ", 
 " Denizen ", 
 " Despicable Me ", 
 " The Disappearance of Haruhi Suzumiya ", 
 " Downstream ", 
 " Enthiran ", 
 " Future X-Cops ", 
 " Growth ", 
 " Hot Tub Time Machine ", 
 " Hunter Prey ", 
 " Inception ", 
 " Iron Man 2 ", 
 " Justice League: Crisis on Two Earths "];
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
    movies.push(gif);
    renderButtons();
  });
  $(document).on("click", ".gif-btn", alertGifName);
  renderButtons();
