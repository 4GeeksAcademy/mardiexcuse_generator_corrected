const excuseButton = document.querySelector("#generateExcuse");
const excuseDisplay = document.querySelector("#excuseDisplay");

excuseButton.addEventListener("click", () => {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car", "the house"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "in between my me time"
  ];

  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  excuseDisplay.textContent = excuse;
});
