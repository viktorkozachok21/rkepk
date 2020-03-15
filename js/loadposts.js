$(function() {
  document.querySelector(".page-link").onclick = () => {
    document.getElementById("news-line").scrollIntoView();
  };

  function loadPosts(posts) {
    $('#posts').empty();
    posts.each(function() {
      var source = $("#post-template").html();
      var template = Handlebars.compile(source);
      var context = {
        title: this.title,
        href: this.href,
        posted: this.posted,
        description: this.description,
        link: this.link,
      };
      var html = template(context);
      $('#posts').append(html);
    });
    
    $(".content").on("click", function() {
      let content = $(this).attr("rel");
      $("#content").load(content);
      document.documentElement.scrollTop = 0;
    });
  }

  $.ajax({
    dataType: 'json',
    url: "data/news-line.json",
    success: function(res) {
      data = $(res.posts);
      dataCount = data.length;

      loadPosts(data);
      var items = $(".news-line-item");
      items.slice(7).hide();

      $("#light-pagination").pagination({
        items: dataCount,
        itemsOnPage: 7,

        onPageClick: function(pageNumber) {
          var showFrom = 7 * (pageNumber - 1);
          var showTo = showFrom + 7;
          items.hide().slice(showFrom, showTo).show();
        }
      });
    }
  });
});