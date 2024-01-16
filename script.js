let question = document.getElementsByClassName("faq-question");

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        let icon = this.querySelector('i');

        if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("faq-answer");
        } else {
            icon.classList.remove("faq-answer");
            icon.classList.add("fa-plus");
        }

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}