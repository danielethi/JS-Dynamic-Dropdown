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

const makeDropdown = (input) => {
  for (let val of Object.keys(input)) {
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
};

makeDropdown(state);

// <select name="languages" onchange="func()" id="character">
//     <option value="a">a</option>
//     <option value="b">b</option>
//     <option value="c">c</option>
//     <option value="d">d</option>
//   </select>
//   <select name="languages" onchange="func2()" id="word">
//     <option value="a">apple</option>
//     <option value="b">bad</option>
//     <option value="c">cat</option>
//     <option value="d">dog</option>
//   </select>

//optional in Index.html file
//   <select name="languages" onchange="func()" id="character">
//     <option value="a">a</option>
//     <option value="b">b</option>
//     <option value="c">c</option>
//     <option value="d">d</option>
//   </select>
//   <select name="languages" onchange="func2()" id="word">
//     <option value="a">apple</option>
//     <option value="b">bad</option>
//     <option value="c">cat</option>
//     <option value="d">dog</option>
//   </select>

//   <script type="text/javascript">
//     let func = () => {
//       let el = document.getElementById("character");
//       let tar = document.getElementById("word");
//       tar.value = el.value;
//     }

//     let func2 = () => {
//       let el = document.getElementById("character");
//       let tar = document.getElementById("word");
//       el.value = tar.value;
//     }
//   </script>
