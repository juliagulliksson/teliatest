const posters = [
  {
    id: 1,
    name: "Aquaman",
    description:
      "Halvmänniskan och halvatlanten Arthur Curry får veta att han är arvinge till undervattensriket Atlantis och måste träda fram för att leda sitt folk och bli en hjälte. Där börjar hans livs resa - en resa som inte bara tvingar honom att möta sitt sanna jag, utan också upptäcka om han är värdig det han föddes till att bli: en kung. ",
    image:
      "https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg",
    video:
      "http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.mp4",
  },
  {
    id: 2,
    name: "Incoming",
    description:
      "En terroristgrupp skickas till den internationella rymdstationen, som numera fungerar som ett topphemligt fängelse. När gruppens ledare lyckas fly från sin cell, tar han hjälp av de andra fångarna för att ta över rymdstationen och använda den som en missil med Moskva som mål. Nu kan bara en man stoppa dem.",
    image:
      "https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4810859.jpg",
    video: "http://mirrors.standaloneinstaller.com/video-sample/P6090053.mp4",
  },
  {
    id: 3,
    name: "Sune",
    description:
      "När Sune ska börja fyran möts han av en chock. En ny kille sitter på hans plats, och han är allt som Sune vill vara. Inte nog med det, han heter Sune också, och det är ju verkligen ingen bra start på fyran. Sune måste använda all sin list för att inte Sophie ska lämna honom och välja den nye Sune. Samtidigt känner Håkan att hans storebror håller på att sugas upp i de vuxnas tråkiga värld, pappa Rudolf får en ålderskris och vill säga upp sig för att satsa på musiken och mamma Karin blänger avundsjukt på nya Sunes perfekta mamma och hennes ännu mer perfekta bil. Välkommen till familjen Andersson!",
    image:
      "https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2Ftimbuktu%2F4608171.jpg",
    video: "http://mirrors.standaloneinstaller.com/video-sample/small.mp4",
  },
  {
    id: 4,
    name: "Voxlux",
    description:
      "Efter att nästan ha mist livet i en skolskjutning framför den 14-åriga Celeste en sång vid en minnesstund för offren och blir stjärna över en natt. Nästan två decennier senare är Celeste en sliten bråkmakare vars karriär nästan havererat efter en skandal. Hon gör sig redo för sin comeback med skivan Vox Lux, men vill USA fortfarande ha sin lilla älskling?",
    image:
      "https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4810857.jpg",
    video: "http://mirrors.standaloneinstaller.com/video-sample/TRA3106.mp4",
  },
];

const mainDiv = document.getElementById("app");
const video = document.getElementById("video");

function displayPosters() {
  const postersWrapper = document.getElementById("posters");

  for (const poster of posters) {
    const posterDiv = document.createElement("div");
    posterDiv.classList.add("poster");
    posterDiv.dataset.id = poster.video;
    posterDiv.addEventListener("click", switchVideo);
    posterDiv.addEventListener("mousemove", moveDescription);

    const posterDivContent = `
      <div class="image-wrapper">
        <img src="${poster.image}" alt="${poster.name}" />
        <span class="description"><p>${poster.description}</p></span>
      </div>
      <h3>${poster.name}</h3>
    `;
    posterDiv.innerHTML = posterDivContent;
    postersWrapper.appendChild(posterDiv);
  }
  mainDiv.appendChild(postersWrapper);
}

function moveDescription(e) {
  const description = this.querySelector("span.description");
  const imageWrapper = this.querySelector("div.image-wrapper");
  let descWidth = description.offsetWidth;
  let descHeight = description.offsetHeight;
  let wrapperWidth = imageWrapper.offsetWidth;
  let wrapperHeight = imageWrapper.offsetHeight;

  descWidth = parseInt(descWidth, 10);
  descHeight = parseInt(descHeight, 10);

  const mouseX = e.pageX,
    mouseY = e.pageY,
    parentX = imageWrapper.offsetLeft,
    parentY = imageWrapper.offsetTop;

  let positionX = mouseX - parentX + 5,
    positionY = mouseY - parentY + 5;

  // Change description position based on mouse movement and imageWrapper height&width
  if (positionX < wrapperWidth / 2 || window.innerWidth > 800) {
    if (positionY < wrapperHeight / 2) {
      description.style.top = positionY + "px";
      description.style.left = positionX + "px";
    } else {
      positionY = mouseY - parentY - 5;
      description.style.top = positionY - descHeight + "px";
      description.style.left = positionX + "px";
    }
  } else {
    if (positionY < wrapperHeight / 2) {
      positionX = mouseX - parentX - 5;
      description.style.top = positionY + "px";
      description.style.left = positionX - descWidth + "px";
    } else {
      positionY = mouseY - parentY - 5;
      positionX = mouseX - parentX - 5;
      description.style.top = positionY - descHeight + "px";
      description.style.left = positionX - descWidth + "px";
    }
  }
}

function switchVideo() {
  if (video.src !== this.dataset.id) {
    video.src = this.dataset.id;
    video.play();
  }
}

displayPosters();
