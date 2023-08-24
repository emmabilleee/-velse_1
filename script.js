const titel = document.querySelector("#titel");
titel.textContent = "Ny titel";
titel.innerHTML = "<h1>Ny titel</h1>";
console.log(titel);

const undertitel = document.querySelector("#undertitel");
undertitel.textContent = "Ny undertitel";
undertitel.innerHTML = "<h2>Ny undertitel</h2>";
console.log(undertitel);

const article = document.querySelector("#article");
article.textContent = "Flot article";
article.innerHTML = "<h3>Flot article</h3>";
console.log(article);

const article2 = document.querySelector("#article2");
article2.textContent = "Meget flot article";
article2.innerHTML = "<h3>Meget flot article</h3>";
console.log(article2);

const footer = document.querySelector("#footer");
footer.textContent = "This is a fancy footer";
footer.innerHTML = "<p>This is a fancy footer</p>";
console.log(footer);

const pic = document.querySelector("#img1");
pic.src = "https://picsum.photos/278?grayscale";
pic.alt = "dette er en alt tekst";

const pic2 = document.querySelector("#img2");
pic2.src = "https://picsum.photos/278/?blur=2";
pic2.alt = "dette er en alt tekst";

let h1 = document.createElement("h1");
let overskrift = document.createTextNode("Min overskrift til info");
h1.appendChild(overskrift);

let img = document.createElement("img");
img.src = "https://picsum.photos/278?grayscale";

let p = document.createElement("p");
let tekst = document.createTextNode("Min tekst");
p.appendChild(tekst);

article2.appendChild(h1);
article2.appendChild(img);
article2.appendChild(p);
