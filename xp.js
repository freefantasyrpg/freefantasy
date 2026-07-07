const e = document.getElementsByClassName("xp");
const xp = 2000;
for (let i = 1; i <= 10; i++) {
    e[i - 1].textContent = `${i == 1? 0:2**(i-2)*xp} - ${2**(i-1)*xp-1}`;
    if (i == 10) {
        e[i - 1].textContent = `${i == 1? 0:2**(i-2)*xp} or more`;
    }
}