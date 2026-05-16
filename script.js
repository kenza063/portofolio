// AOS
  AOS.init({
    duration: 1200,
    once: true
  });



  // TYPING TEXT
  const texts = [
    "Web Developer",
    "Frontend Designer",
    "Creative Learner"
  ];

  let speed = 100;
  let textIndex = 0;
  let charIndex = 0;

  const typingText = document.getElementById("typing-text");

  function typeEffect() {
    if(charIndex < texts[textIndex].length){
      typingText.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if(charIndex > 0){
      typingText.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      textIndex++;
      if(textIndex >= texts.length){
        textIndex = 0;
      }
      setTimeout(typeEffect, 300);
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    if(texts.length){
      setTimeout(typeEffect, 500);
    }
  });

  // NAVBAR SCROLL EFFECT
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });

  // BUTTON SCROLL
  const portfolioBtn = document.querySelector(".hero-text button");

  portfolioBtn.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth"
    });
  });

  // ACTIVE NAVBAR
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if(pageYOffset >= sectionTop - 200){
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-cyan-400");

      if(link.getAttribute("href").includes(current)){
        link.classList.add("text-cyan-400");
      }
    });
  });

  // PROJECT CARD EFFECT
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.background = `
      radial-gradient(
      circle at ${x}px ${y}px,
      rgba(0,255,255,0.15),
      rgba(255,255,255,0.03)
      )`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255,255,255,0.05)";
    });
  });

  // CONTACT BUTTON
  const sendBtn = document.querySelector("#contact button");

  sendBtn.addEventListener("click", () => {
    alert("Message sent successfully ✨");
  });

  //PROGRESBAR
  const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-fill");

let started = false;

window.addEventListener("scroll", () => {

  const sectionTop = skillSection.offsetTop - 300;

  if(window.scrollY >= sectionTop && !started){

    skillBars.forEach(bar => {

      const width = bar.style.width;

      bar.style.width = "0";

      setTimeout(() => {
        bar.style.width = width;
      }, 200);

    });

    started = true;
  }

});