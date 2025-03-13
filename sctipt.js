document.addEventListener("DOMContentLoaded", function () {
    console.log("تم تحميل الصفحة بنجاح!");
});
function copyCode(button) {
    let codeBlock = button.parentElement.nextElementSibling.innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = "Copy";
        }, 1500);
    });
}
