let data;
const grid = document.querySelectorAll(".grid");
grid.forEach((item) => {
  item.addEventListener("click", (e) => {
    const w = document.querySelectorAll(".grid");

    w.forEach((val) => {
      val.style.backgroundColor = "white";
      val.innerHTML = "<img  src='' />";
    });

    const g = document.querySelectorAll(".grey");
    g.forEach((val) => {
      val.style.backgroundColor = "grey";
    });

    data = e.target.id;

    if (
      data === "a1" ||
      data === "a9" ||
      data === "a17" ||
      data === "a25" ||
      data === "a33" ||
      data === "a41" ||
      data === "a49" ||
      data === "a57" ||
      data === "a2" ||
      data === "a10" ||
      data === "a18" ||
      data === "a26" ||
      data === "a34" ||
      data === "a42" ||
      data === "a50" ||
      data === "a58"
    ) {
      knight();
      downmove();
      leftside();
      rightside();
      return;
    }

    if (
      data === "a7" ||
      data === "a15" ||
      data === "a23" ||
      data === "a31" ||
      data === "a39" ||
      data === "a47" ||
      data === "a55" ||
      data === "a63" ||
      data === "a8" ||
      data === "a16" ||
      data === "a24" ||
      data === "a32" ||
      data === "a40" ||
      data === "a48" ||
      data === "a56" ||
      data === "a64"
    ) {
      console.log("in loop 2");
      knight();
      upmove();
      leftside();
      rightside();
      return;
    }

    knight();
    upmove();
    downmove();
    leftside();
    rightside();
  });
});

function knight() {
  document.querySelector(`${"#" + data}`).innerHTML =
    "<img  src='knight.png' />";
}

function upmove() {
  const temp = data.slice(1);
  const upr = parseInt(temp) - 2 + 8;
  const upl = parseInt(temp) - 2 - 8;
  const upright = "a" + upr;
  const upleft = "a" + upl;
  const right = document.querySelector(`${"#" + upright}`);
  const left = document.querySelector(`${"#" + upleft}`);

  if (right) {
    right.style.backgroundColor = "green";
  }

  if (left) {
    left.style.backgroundColor = "green";
  }
}

function downmove() {
  const temp = data.slice(1);
  const downr = parseInt(temp) + 2 + 8;
  const downl = parseInt(temp) + 2 - 8;
  const downright = "a" + downr;
  const downleft = "a" + downl;
  const right = document.querySelector(`${"#" + downright}`);
  const left = document.querySelector(`${"#" + downleft}`);
  if (right) {
    right.style.backgroundColor = "green";
  }

  if (left) {
    left.style.backgroundColor = "green";
  }
}

function leftside() {
  const temp = data.slice(1);
  const leftsideu = parseInt(temp) - 16 - 1;
  const leftsided = parseInt(temp) - 16 + 1;
  const leftsideup = "a" + leftsideu;
  const leftsidedown = "a" + leftsided;
  const up = document.querySelector(`${"#" + leftsideup}`);
  const down = document.querySelector(`${"#" + leftsidedown}`);
  if (up) {
    if (
      data !== "a25" &&
      data !== "a33" &&
      data !== "a41" &&
      data !== "a49" &&
      data !== "a57"
    ) {
      up.style.backgroundColor = "green";
    }
  }
  if (
    data !== "a16" &&
    data !== "a24" &&
    data !== "a32" &&
    data !== "a40" &&
    data !== "a48" &&
    data !== "a56" &&
    data !== "a64"
  ) {
    if (down) {
      down.style.backgroundColor = "green";
    }
  }
}

function rightside() {
  const temp = data.slice(1);
  const rightsideu = parseInt(temp) + 16 - 1;
  const rightsided = parseInt(temp) + 16 + 1;
  const rightsideup = "a" + rightsideu;
  const rightsidedown = "a" + rightsided;
  const up = document.querySelector(`${"#" + rightsideup}`);
  const down = document.querySelector(`${"#" + rightsidedown}`);

  if (
    data !== "a1" &&
    data !== "a9" &&
    data !== "a17" &&
    data !== "a25" &&
    data !== "a33" &&
    data !== "a41" &&
    data !== "a49"
  ) {
    if (up) {
      up.style.backgroundColor = "green";
    }
  }
  if (
    data !== "a8" &&
    data !== "a16" &&
    data !== "a24" &&
    data !== "a32" &&
    data !== "a40" &&
    data !== "a48" &&
    data !== "a56" &&
    data !== "a64"
  ) {
    if (down) {
      down.style.backgroundColor = "green";
    }
  }
}
