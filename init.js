 // Initial array of gif
 var gifs = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
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
    var gifB = $("#gif-input").val().trim();
    movies.push(gifB);
    renderButtons();
  });
  $(document).on("click", ".gif-btn", alertGifName);
  renderButtons();
