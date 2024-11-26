document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("aside .click .link");

    links.forEach(link => {
        link.addEventListener("click", () => {
            // Remove the active class from all links
            links.forEach(item => item.classList.remove("active"));

            // Add the active class to the clicked link
            link.classList.add("active");
        });
    });
});
