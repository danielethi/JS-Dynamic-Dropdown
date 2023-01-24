const state = {
  a: "ana",
  b: "bob",
  c: "cinema",
  d: "dog",
  e: "elliot",
  f: "fidelity",
  g: "golang",
};

let d = document.createElement("div");
let s1 = document.createElement("select");
let s2 = document.createElement("select");

function makeDropdown(input) {
  for (val of Object.keys(input)) {
    const o1 = document.createElement("option");
    const o2 = document.createElement("option");
    o1.textContent = val;
    o2.textContent = input[val];
    s1.appendChild(o1);
    s2.appendChild(o2);
  }

  function changeHandler(event) {
    const index = event.target.selectedIndex;
    s1.selectedIndex = index;
    s2.selectedIndex = index;
  }

  s1.onchange = changeHandler;
  s2.onchange = changeHandler;

  d.appendChild(s1);
  d.appendChild(s2);
  document.body.appendChild(d);
}

makeDropdown(state);
