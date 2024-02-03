// script for ALL project page

$(document).ready(function () {
    // <!-- load header at #header-->
    $(function(){
        $("#header").load("/src/components/header/header.html");
    });
    // <!-- load footer at #footer-->
    $(function(){
        $("#footer").load("/src/components/footer/footer.html");
    });
    // get rid of active class on page load
    $(document).ready(function() {
        $('.active').removeClass('active');
    });
});

// fetch projects start
async function fetchProjects() {
    let response = await fetch("/src/components/projects/projects.json")
    const data = await response.json();
    return data;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".projects .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/projects/tiles/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end
