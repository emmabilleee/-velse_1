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
