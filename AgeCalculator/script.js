let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("I")[0];
const container = document.querySelector(".container")

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date()

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1
    } else {
        y3--
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }else {
        m3--;
        d3 = getDayByMouth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--
    }
    let p = document.createElement("p")
    p.className = "output"
    container.appendChild(p)
    p.innerHTML =`Your age ${y3} ,mounth ${m3}, date ${d3}`
   
}

function getDayByMouth(year, mouth) {
    return new Date(year, mouth, 0).getDate()
}


