$(function() {
  function loadNews(posts) {
    $('#carousel-inner').empty();
    posts.each(function() {
      var source = $("#carousel-template").html();
      var template = Handlebars.compile(source);
      var context = {
        title: this.title,
        img: this.img,
        link: this.link,
        href: this.href,
        isactive: this.isactive,
      };
      var html = template(context);
      $('#carousel-inner').append(html);
    });

    $(".content").on("click", function() {
      let content = $(this).attr("rel");
      $("#content").load(content);
      document.documentElement.scrollTop = 0;
    });
  }
  $.ajax({
    dataType: 'json',
    url: "data/carousel.json",
    success: function(res) {
      data = $(res.posts);
      loadNews(data);
    }
  });
});
