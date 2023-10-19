let btn = document.querySelector(".btn1");

let b1 = document.querySelector(".box11 ");
let bh1 = document.querySelector(".box11 h1");
let bp1 = document.querySelector(".box11 p");
let bi1 = document.querySelector(".box11 img");

let b2 = document.querySelector(".box12 ");
let bh2 = document.querySelector(".box12 h1");
let bp2 = document.querySelector(".box12 p");
let bi2 = document.querySelector(".box12 img");

let b3 = document.querySelector(".box13 ");
let bh3 = document.querySelector(".box13 h1");
let bp3 = document.querySelector(".box13 p");
let bi3 = document.querySelector(".box13 img");

let dot = document.querySelector(".dot1");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

let clickcount = 1;
btn.addEventListener("click", () => {
  clickcount++;
  if (clickcount == 7) {
    clickcount = 1;
  }
  console.log(clickcount);

  b1.className = "box" + clickcount + "1";
  b1.classList.add("box");
  bh1.className = "box" + clickcount + "1" + " h1";
  bp1.className = "box" + clickcount + "1" + " p";
  bi1.className = "box" + clickcount + "1" + " img";

  b2.className = "box" + clickcount + "2";
  b2.classList.add("box");
  bh2.className = "box" + clickcount + "2" + " h1";
  bp2.className = "box" + clickcount + "2" + " p";
  bi2.className = "box" + clickcount + "2" + " img";

  b3.className = "box" + clickcount + "3";
  b3.classList.add("box");
  bh3.className = "box" + clickcount + "3" + " h1";
  bp3.className = "box" + clickcount + "3" + " p";
  bi3.className = "box" + clickcount + "3" + " img";

  dot.classList.remove("dotx");
  dot = document.querySelector(".dot" + clickcount);
  dot.classList.add("dotx");

  if (clickcount == 1) {
    bh1.innerHTML = "Impressions";
    bp1.innerHTML = "The number of people who have seen your campaign";

    bh2.innerHTML = "Engagement";
    bp2.innerHTML = "";

    bh3.innerHTML = "Social Media Followers";
    bp3.innerHTML = "";

    img1.setAttribute("src", "images/Rectangle.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "images/Rectangle_2.png");
  }
  if (clickcount == 2) {
    console.log("two");
    bh1.innerHTML = "Impressions";
    bp1.innerHTML = "";

    bh2.innerHTML = "Engagement";
    bp2.innerHTML =
      "The level of interaction your campaign has received , such as clicks , likes , shares and comments ";

    bh3.innerHTML = "Social Media Followers";
    bp3.innerHTML = "";

    img1.setAttribute("src", "images/Rectangle.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "images/Rectangle_2.png");
  }
  if (clickcount == 3) {
    console.log("three");
    bh1.innerHTML = "Engagement";
    bp1.innerHTML = "";

    bh2.innerHTML = "Social Media Followers";
    bp2.innerHTML =
      "The increase in social media followers your campaign has generated.";

    bh3.innerHTML = "Lead and Sales";
    bp3.innerHTML = "";

    // let img1 = document.querySelector(".img1");
    // let img2 = document.querySelector(".img2");
    // let img3 = document.querySelector(".img3");
    img1.setAttribute("src", "images/Rectangle_2.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "images/Rectangle_2.png");
  }
  if (clickcount == 4) {
    console.log("four");
    bh1.innerHTML = "Social Media Followers";
    bp1.innerHTML = "";

    bh2.innerHTML = "Leads and Sales";
    bp2.innerHTML = "The number of leads and sales you campaign has generated ";

    bh3.innerHTML = "Brand Awareness";
    bp3.innerHTML = "";

    // let img1 = document.querySelector(".img1");
    // let img2 = document.querySelector(".img2");
    // let img3 = document.querySelector(".img3");
    img1.setAttribute("src", "images/Rectangle_2.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "images/Rectangle_2.png");
  }
  if (clickcount == 5) {
    console.log("five");
    bh1.innerHTML = "Leads and Sales";
    bp1.innerHTML = "";

    bh2.innerHTML = "Brand Awareness";
    bp2.innerHTML =
      "The impact your has had on increasing brand recognition and awareness";

    bh3.innerHTML = "Analytics + Leaderboard";
    bp3.innerHTML = "";

    // let img1 = document.querySelector(".img1");
    // let img2 = document.querySelector(".img2");
    // let img3 = document.querySelector(".img3");
    img1.setAttribute("src", "images/Rectangle.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "images/Rectangle_2.png");
  }
  if (clickcount == 6) {
    console.log("six");
    bh1.innerHTML = "Brand Awareness";
    bp1.innerHTML = "";

    bh2.innerHTML = "Analytics + Leaderboard ";
    bp2.innerHTML =
      "Get detailed analyticsnof campaign performance with leaderboard based on customer engagement";

    bh3.innerHTML = "";
    bp3.innerHTML = "";

    // let img1 = document.querySelector(".img1");
    // let img2 = document.querySelector(".img2");
    // let img3 = document.querySelector(".img3");
    img1.setAttribute("src", "images/Rectangle.png");
    img2.setAttribute("src", "images/Rectangle_2.png");
    img3.setAttribute("src", "");
  }
});
