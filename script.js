document.addEventListener("DOMContentLoaded", () => {

const job1 = document.getElementById("job1-bar");
const job2 = document.getElementById("job2-bar");
const job3 = document.getElementById("job3-bar");

const title1 = document.getElementById("job1-h2");
const title2 = document.getElementById("job2-h2");
const title3 = document.getElementById("job3-h2");

const d1 = document.getElementById("job1");
const d2 = document.getElementById("job2");
const d3 = document.getElementById("job3");

job1.addEventListener("click", () => {
    job1.classList.add("clicked1");
    findActive(1);
});

job2.addEventListener("click", () => {
    job2.classList.add("clicked2");
    findActive(2);
});

job3.addEventListener("click", () => {
    job3.classList.add("clicked3");
    findActive(3);
});

function findActive(job) {
    const activeItem = document.querySelector(".active");
    
    if (activeItem) {
        activeItem.classList.remove("active");
        activeItem.classList.add("inactive");
    }

    [title1, title2, title3].forEach(title => title.classList.remove("active"));
    [d1, d2, d3].forEach(desc => desc.classList.add("inactive"));

    switch (job) {
        case 1:
            title1.classList.add("active");
            d1.classList.remove("inactive");
            break;
        case 2:
            title2.classList.add("active");
            d2.classList.remove("inactive");
            break;
        case 3:
            title3.classList.add("active");
            d3.classList.remove("inactive");
            break;
    }
}
});