const envelope = document.querySelector("#envelope");
const open_btn = document.querySelector("#open");

function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
};

open_btn.addEventListener("click", open);
