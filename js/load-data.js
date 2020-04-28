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
  <a onclick="${ item.link }" href="${ item.href }" target="${ item.target }">
    <div class="caption w-100">
      <h5 class="title-responsive text-justify">${ item.title }</h5>
    </div>
    <img class="d-block carousel-img lazy img-fluid w-100" data-src="${ item.img }" alt="${ item.title }" loading="lazy">
    </a>
  </div>
</div>
  `
      document.getElementById("carousel-inner").innerHTML += topTemplate;
    });
    lazyLoadInstance.update();
  });

function loadPosts() {
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
  <div class="card-body text-center p-2 px-3">
    <h5 class="card-title font-weight-bold brown-text m-1"><a onclick="${ post.link }" href="${ post.href }" target="${ post.target }">${ post.title }</a></h5>
    <p class="text-justify post-description mt-0">${ post.description }</p>
    <span class="small font-italic float-right">${ post.posted }</span>
  </div>
</div>
  `
          document.getElementById("posts").innerHTML += template;
        });
        var catalog = document.querySelector(".paginationjs-pages");
        catalog.addEventListener('click', () => {
          goToDiv("posts");
        });
      }
    });
  });
}
loadPosts();
