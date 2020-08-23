const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p =document.createElement('p');
p.style.cssText = "color:red;";
p.textContent = "Hey I'm red!";
content.appendChild(p);
const h3 = document.createElement('h3');
h3.style.cssText= "color:blue;";
h3.textContent= "Hey I'm blue!";
content.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = "border:black;background-color: pink;";
const h1 = document.createElement("h1");
h1.textContent="I'm in a div";
const pInDiv = document.createElement('p');
pInDiv.textContent= "ME TOO!";
div.appendChild(h1);
div.appendChild(pInDiv);
container.appendChild(div);

container.appendChild(content);