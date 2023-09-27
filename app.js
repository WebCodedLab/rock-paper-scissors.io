let wrapper = document.querySelector(".wrapper"),
  userResult = document.querySelector(".user"),
  cpuResult = document.querySelector(".cpu"),
  result = document.querySelector(".title h2"),
  options = document.querySelectorAll(".option");

options.forEach((option, index1) => {
  option.addEventListener("click", (e) => {
    option.classList.add("active");

    options.forEach((option2, index2) => {
      index1 != index2 && option2.classList.remove("active");
    });

    let imageSrc = e.target.src;
    userResult.src = imageSrc;

    let randomIndex = Math.floor(Math.random() * 3);
    let cpuImages = [
      "/images/rock.png",
      "/images/paper.png",
      "/images/scissors.png",
    ];
    cpuResult.src = cpuImages[randomIndex];

    let cpuValue = ["R", "P", "S"][randomIndex];
    let userValue = ["R", "P", "S"][index1];

    let outcomes = {
      RR: "Draw",
      RP: "CPU",
      RS: "User",
      SS: "Draw",
      SR: "CPU",
      SP: "User",
      PP: "Draw",
      PR: "User",
      PS: "CPU",
    };

    let outcomeValue = outcomes[userValue + cpuValue];

    result.textContent =
      userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won 😎`;
  });
});

let button = document.querySelector("span");
let icon = document.querySelector("span img");

button.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".wrapper").classList.toggle("dark");
  icon.src = "/icons/sun.svg";
});

  icon.src = "/icons/moon.svg";
