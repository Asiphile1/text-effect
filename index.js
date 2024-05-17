const containerEl = document.querySelector(".container");

const careers = ["HEY its Asiphile....", "Nice to meet you...", "Lets connect on socials...", "@Asiphile_Mthetwa everywhere..."];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1> ${careers[careerIndex].slice(0, 1) === "I" ? "" : ""} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 450);
}