var mainheading = document.getElementById('main-heading');
mainheading.textContent = "New DOM Layout";
console.log(mainheading);


document.getElementById("page-header").classList.remove("bg-dark");
document.getElementById("page-header").classList.add("bg-success");

var p1 = document.getElementById("para1");
p1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

var p2 = document.getElementById("para2");
p2.textContent ="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

var btn = document.getElementById('btn');
btn.addEventListener('click', event=> {
    document.getElementById("para4").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
}
)

document.getElementById("red").classList.add("bg-danger");
document.getElementById("red").style.color ="red";

document.getElementById("blue").classList.add("bg-primary");
document.getElementById("blue").style.color ="blue";

document.getElementById("yellow").classList.add("bg-warning");
document.getElementById("yellow").style.color ="yellow";

document.getElementById("green").classList.add("bg-success");
document.getElementById("green").style.color ="green";

document.getElementById("black").classList.add("bg-dark");
document.getElementById("black").style.color ="black";

