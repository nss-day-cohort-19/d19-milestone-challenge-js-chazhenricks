
var tree = {};



var treeButton = document.getElementById("tree-button");

treeButton.addEventListener("click", function(){ createTree(tree);});

function createTree(tree){
  tree.character = document.getElementById("character").value;
  tree.height = Number(document.getElementById("height").value);
  var treeOnPage = document.getElementById("content");
  var makeup = "";
  var k = 1
  for (var i=0; i<tree.height; i++){
    makeup += "<p>"
    makeup += tree.character.repeat(k);
    makeup += "</p>";
    k = k+2
  }
  console.log("makeup", makeup);
  treeOnPage.innerHTML = makeup;
};