
var tree = {};



var treeButton = document.getElementById("tree-button");

treeButton.addEventListener("click", function(){ createTree(tree);});

function createTree(tree){
  tree.character = document.getElementById("character").value;
  tree.height = Number(document.getElementById("height").value);
  var treeOnPage = document.getElementById("content");
  var makeup = "<p>";
  for (var i=0; i<tree.height; i++){
   makeup += tree.character.repeat(i) + " ";
    makeup += "</p>";
  }
  treeOnPage.innerHTML = makeup;
};