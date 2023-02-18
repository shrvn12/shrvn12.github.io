window.addEventListener("load",()=>{
    document.querySelector(".load").style.display = "none"
})


let resume = document.querySelectorAll(".resumepage");
for(let elem of resume){
    elem.addEventListener("click",()=>{
        window.open("https://drive.google.com/file/d/1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo/view?usp=sharing","_blank")
    })        
}

let gitimages = document.querySelectorAll(".github img")
for(let elem of gitimages){
    elem.addEventListener("click",()=>{
        window.open("https://github.com/shrvn12","_blank")
    })
}

let scrollarea = document.querySelector(".scrollarea");

let menu = document.querySelector(".menu");
let anchors = document.querySelectorAll(".nav>div:nth-child(3) a");
let anchordiv = document.querySelector(".nav>div:nth-child(3)>div")
menu.addEventListener("click",()=>{
    if(anchordiv.style.display == "none"){
         anchordiv.style.display = "block";
    }
    else{
        anchordiv.style.display = "none";
    }
})

let divs = document.querySelectorAll(".scrollarea>div:not(.nav)")
for(let elem of divs){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 600){
            for(let elem of anchors){
                anchordiv.style.display = "none"
            }
        }
    })
}

for(let elem of anchors){
    elem.addEventListener("click",()=>{
        if(window.innerWidth < 600){
            anchordiv.style.display = "none";
        }
    })
}


if(window.innerWidth < 870){
    document.querySelector(".gmail").innerText = "s...@gmail.com"
}

// scrollarea.addEventListener("scroll",()=>{
//     // console.log(scrollarea.scrollTop);
//     const offset = scrollarea.scrollTop;
//     // console.log(offset)
//     if(window.innerWidth >= 820){
//         if(offset >= 516 && offset < 1049){
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(1)>div").style.backgroundColor = "grey";
//         }
//         else{
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(1)>div").style.backgroundColor = "transparent";
//         }

//         if(offset >= 1049 && offset < 1608){
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(2)>div").style.backgroundColor = "grey";
//         }
//         else{
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(2)>div").style.backgroundColor = "transparent";
//         }

//         if(offset >= 1608 && offset < 2167){
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(3)>div").style.backgroundColor = "grey";
//         }
//         else{
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(3)>div").style.backgroundColor = "transparent";
//         }

//         if(offset >= 2167 && offset < 2727){
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(4)>div").style.backgroundColor = "grey";
//         }
//         else{
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(4)>div").style.backgroundColor = "transparent";
//         }

//         if(offset > 2727){
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(5)>div").style.backgroundColor = "grey";
//         }
//         else{
//             document.querySelector(".nav>div:nth-child(3)>div>a:nth-child(5)>div").style.backgroundColor = "transparent";
//         } 
//     }
// })

// for(let elem of anchors){
//     elem.addEventListener("hover",()=>{
//         elem.style.backgroundColor = "grey";
//     })
// }
