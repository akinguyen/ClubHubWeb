$(function() {
  $("a.all").click(() => {
    $("div.bg").css(
      "background-image",
      "url('https://userscontent2.emaze.com/images/da11d14e-b446-45fb-92f1-7c2a53fc81b2/936ef3073a603fdd4bc89cc0f069d4b6.png')"
    );
    $("h2.title").css("color", "white");
    $(".desc").css("color", "white");

    $(".desc").css("text-shadow", " 1px 1px black");
  });

  $("a.stem").click(() => {
    $("div.bg").css(
      "background-image",
      "url('http://wallpapercave.com/wp/ctB8jSn.jpg')"
    );
    $(".desc").css("color", "white");

    $(".desc").css("text-shadow", " 1px 1px black");
  });
  $("a.food").click(() => {
    $("div.bg").css(
      "background-image",
      "url('http://s1.1zoom.net/big0/244/Meat_products_Roast_457899.jpg')"
    );
    $(".desc").css("color", "white");

    $(".desc").css("text-shadow", " 1px 1px black");
  });

  $("a.art").click(() => {
    $("div.bg").css(
      "background-image",
      "url('https://wallpaperplay.com/walls/full/6/a/9/248953.jpg')"
    );
    $(".desc").css("color", "black");
    $(".desc").css("text-shadow", " 0px 0px 4px white");
  });
});
