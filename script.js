document.addEventListener("DOMContentLoaded", () => {
    console.log("StepWin Loaded Successfully");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Registration feature coming soon!");
        });
    });
});
