document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.href.split('?')[0];
    const links = document.querySelectorAll(".sidebar-links a");

    links.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active"); 
        }
    });
});