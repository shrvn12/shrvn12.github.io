function resume() {
    window.open("https://drive.google.com/file/d/1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo/view?usp=sharing", "_blank");
}

function resume2() {
    window.open("https://drive.google.com/file/d/1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo/view?usp=sharing", "_blank");
}

let gitimages = document.querySelectorAll(".github img")
for (let elem of gitimages) {
    elem.addEventListener("click", () => {
        window.open("https://github.com/shrvn12", "_blank")
    })
}

let scrollarea = document.querySelector(".scrollarea");

let menu = document.querySelector(".menu");
let anchors = document.querySelectorAll(".nav>div:nth-child(3) a");
let anchordiv = document.querySelector(".nav>div:nth-child(3)>div")
menu.addEventListener("click", () => {
    if (anchordiv.style.display == "none") {
        anchordiv.style.display = "block";
    }
    else {
        anchordiv.style.display = "none";
    }
})

let divs = document.querySelectorAll(".scrollarea>div:not(.nav)")
for (let elem of divs) {
    elem.addEventListener("click", () => {
        if (window.innerWidth < 820) {
            for (let elem of anchors) {
                anchordiv.style.display = "none"
            }
        }
    })
}

for (let elem of anchors) {
    elem.addEventListener("click", () => {
        if (window.innerWidth < 820) {
            anchordiv.style.display = "none";
        }
    })
}


if (window.innerWidth < 870) {
    document.querySelector(".gmail").innerText = "s...@gmail.com"
}

document.querySelector('.home-section>div>img').addEventListener('click', () => {
    window.location.href = "https://shrvn12.gthub.io#about"
})

const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


GitHubCalendar(".calendar", "shrvn12");

GitHubCalendar(".calendar", "shrvn12", { responsive: true });

GitHubCalendar(".calendar", "shrvn12", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r && r.text())


const buttons = [
    { element: document.querySelector(".filling-button"), timeout: 3600 },
];

buttons.forEach((button) => {
    const { element, timeout } = button;

    if (!element) return;

    element.addEventListener("click", (event) => {
        console.log('clicked');
        event.preventDefault();

        if (element.classList.contains("completed")) return;

        element.classList.add("active");

        setTimeout(() => {
            element.classList.remove("active");
            element.classList.add("completed");
        }, timeout);
    });
});


window.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
