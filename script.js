// Selectors for the editor inputs and buttons
let htmlinput = document.querySelector(".html-editor textarea");
let cssinput = document.querySelector(".css-editor textarea");
let jsinput = document.querySelector(".js-editor textarea");
let save = document.querySelector("#save");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector("#output");
let full = document.querySelector("#full");
let copyButtons = document.querySelectorAll(".copy");

// Save functionality to apply HTML, CSS, and JS to iframe
save.addEventListener("click", () => {
    output.contentDocument.body.innerHTML = htmlinput.value;
    const cssCode = `<style>${cssinput.value}</style>`;
    output.contentDocument.head.innerHTML = cssCode;
    output.contentWindow.eval(jsinput.value);
});

// Full-screen toggle functionality
full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    
    if (outputContainer.classList.contains("output-full-active")) {
        full.style.transform = "rotate(180deg)";  // Rotate icon 180 degrees
        outputContainer.style.height = "100vh";   // Set the container to full height
    } else {
        full.style.transform = "rotate(0deg)";    // Reset icon rotation
        outputContainer.style.height = "30%";     // Restore container height
    }
});

// Copy functionality for each editor (HTML, CSS, JS)
copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("copy1")) {
            navigator.clipboard.writeText(htmlinput.value);  // Copy HTML input
        } else if (button.classList.contains("copy2")) {
            navigator.clipboard.writeText(cssinput.value);   // Copy CSS input
        } else if (button.classList.contains("copy3")) {
            navigator.clipboard.writeText(jsinput.value);    // Copy JS input
        }
        alert("Copied to clipboard");
    });
});
