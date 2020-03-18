fetch('data/content.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.top.forEach(top => {
      let topTemplate = `
          <div class="carousel-item ${ top.isactive }">
            <div class="view">
              <div class="caption w-100">
                <a onclick="${ top.link }" href="${ top.href }">
                  <h3 class="h3-responsive text-justify">${ top.title }</h3>
                </a>
              </div>
              <img class="d-block carousel-img img-fluid w-100" src="${ top.img }" loading="lazy">
            </div>
          </div>
          `
      document.getElementById("carousel-inner").innerHTML += topTemplate;
    });
  });

$.getJSON('data/content.json', function(json) {
  $('#lightPagination').pagination({
    dataSource: json.posts,
    autoHidePrevious: true,
    autoHideNext: true,
    pageSize: 7,
    callback: function(data, pagination) {
      var wrapper = $('#posts').empty();
      $.each(data, function(item, post) {
        let template = `
              <div class="card news-line-item mb-2">
                  <div class="card-body">
                    <a onclick="${ post.link }" href="${ post.href }">
                      <h5 class="card-title brown-text">${ post.title }</h5>
                    </a>
                    <p class="text-justify post-description">${ post.description }</p>
                    <span class="small float-right">${ post.posted }</span>
                  </div>
                </div>
              `
        document.getElementById("posts").innerHTML += template;
      });
      var catalog = document.querySelector(".paginationjs-pages");
      catalog.addEventListener('click', () => {
        document.getElementById("news-line").scrollIntoView();
      });
    }
  });
});
