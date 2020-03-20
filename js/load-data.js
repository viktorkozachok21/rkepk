fetch('data/content.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("carousel-view").remove();
    data.top.forEach(item => {
      let topTemplate = `
<div class="carousel-item ${ item.isactive }">
  <div class="view">
    <div class="caption w-100">
      <a onclick="${ item.link }" href="${ item.href }"><h2 class="h3-responsive text-justify">${ item.title }</h2></a>
    </div>
    <img class="d-block carousel-img lazy img-fluid w-100" data-src="${ item.img }" alt="${ item.title }" loading="lazy">
  </div>
</div>
  `
      document.getElementById("carousel-inner").innerHTML += topTemplate;
    });
    lazyLoadInstance.update();
  });


$.getJSON('data/content.json', function(json) {
  $('#lightPagination').pagination({
    dataSource: json.posts,
    autoHidePrevious: true,
    autoHideNext: true,
    pageSize: 5,
    callback: function(data, pagination) {
      var wrapper = $('#posts').empty();
      $.each(data, function(item, post) {
        let template = `
<div class="card news-line-item mb-2">
  <div class="card-body">
    <a onclick="${ post.link }" href="${ post.href }"><h4 class="card-title brown-text">${ post.title }</h4></a>
    <p class="text-justify post-description">${ post.description }</p>
    <span class="small float-right">${ post.posted }</span>
  </div>
</div>
  `
        document.getElementById("posts").innerHTML += template;
      });
      var catalog = document.querySelector(".paginationjs-pages");
      catalog.addEventListener('click', () => {
        document.getElementById("posts").scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
});
