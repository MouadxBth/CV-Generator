const target = document.getElementById("custom_text");
const textTarget = document.getElementById("myValue") as HTMLInputElement | null;

const submitBtn = () => {
    if (target != null && textTarget != null && textTarget.textContent != null)
        target.innerHTML = textTarget.value;
}