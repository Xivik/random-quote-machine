$(document).ready(function() {
  //generate random quote from API on click
  $("#quote").on("click", function() {
    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=" +
        new Date(),
      function(a) {
        $(".output").html(
          a[0].content + "<p id='titel'>&mdash; " + a[0].title + "</p>"
        );
        $(".quotes").html("<i class='fa fa-quote-left' id='quoteleft'></i>");
    
        // change colors in document, placeholder 
              
        let tweettext = a[0].content + " - " + a[0].title;
        tweettext = tweettext.replace("<p>", "").replace("</p>", "");
        $(".twittershare").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" + tweettext
        );
        
        function randomColors() {
          return "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        function randomize() {
          let rcolor = document.getElementsByClassName("changecolor");
          let randomc = randomColors();

          for (let i = 0; i < rcolor.length; i++) {
            rcolor[i].style.backgroundColor = randomc;
          }
        }
        randomize();

        
      }
    );
  });
});
// twitter tweet window
window.twttr = (function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
})(document, "script", "twitter-wjs");