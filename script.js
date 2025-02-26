document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".see-more").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let contentLink = this.getAttribute("href");

            if (contentLink === "#" || !contentLink.trim()) {
                alert("Coming Soon!");
            } else {
                window.location.href = contentLink;
            }
        });
    });
});
