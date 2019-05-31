 // Initial array of gif
 var gifs = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
 
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