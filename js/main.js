
function toggle_text(id) {
    var span = document.getElementById(id);
    var x = document.getElementsByClassName("bt");
    var i;
    if(span.style.display == "none") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display= "none";
          }
      span.style.display = "inline";
    } else {
      span.style.display = "none";
    }
  }


  function animate_text1() {
    let delay = 500,
      delay_start = 0,
      contents,
      letters;
  
    document.querySelectorAll(".bt").forEach(function (elem) {
  
      contents = elem.textContent.trim();
      elem.textContent = "";
      letters = contents.split("");
  
      letters.forEach(function (letter, index_1) {
        setTimeout(function () {
          elem.textContent += letter;
        }, delay_start + delay * (index_1 / 5));
      });    
      delay_start += delay * letters.length / 5;
    });
  }
  
  animate_text1();

 /* function fade(id,compteur){
    compteur += 0.1;
    document.querySelector(id).style.opacity = compteur;
    if (compteur<1){
        setTimeout(fade,900,compteur);
    }
}*/

function mouseHover(e){
  let others = document.querySelectorAll(".comp")
  others.forEach(dt => {
      if(dt.id === e.target.id) {
          e.target.nextElementSibling.style.visibility="visible"
          e.target.nextElementSibling.style.left = e.pageX+"px"
      }
      else{
          dt.nextElementSibling.style.visibility="hidden"
      }
  })
}


let skills = document.querySelectorAll(".comp")

let skillsRating = [
  {skillName:"prog", rate:4},
  {skillName:"dev", rate:3},
  {skillName:"devops", rate:2},
  {skillName:"bd", rate:4},
]

window.onload = () => {
  skills.forEach(item => {
      skillsRating.forEach(skill => {
          if(item.id == skill.skillName){
              let stars = ''
              for(let i=0; i<skill.rate; i++){
                  stars += '<i class="fas fa-star" style="color:yellow; margin-left:10px;"></i>'
              }
              item.innerHTML += stars
          }
      })
  })
}