let counter = document.getElementById("counter");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");

counter.innerText = localStorage.getItem(counter, counter.innerText) || 0;

decrementBtn.addEventListener("click", () => {
	if (counter.innerText < 1) {
		return alert(" Cannot be less than 0");
	} else {
		counter.innerText--;
		localStorage.setItem(counter, counter.innerText);
	}
});

incrementBtn.addEventListener("click", () => {
	counter.innerText++;
	localStorage.setItem(counter, counter.innerText);
});

resetBtn.addEventListener("click", () => {
	counter.innerText = 0;
	localStorage.setItem(counter, counter.innerText);
});
