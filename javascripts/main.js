var character = document.getElementById("character");
var height = document.getElementById("height");
var treeButton = document.getElementById("tree-button");
var tree = {};

treeButton.addEventListener("click", function(){ createTree(tree);});

window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        createTree(tree);
    }
  });
function createTree(tree){
  tree.character = document.getElementById("character").value;
  tree.height = Number(document.getElementById("height").value);

if (tree.character == ""){
  character.className = "invalid";
}
if (tree.height == ""){
  height.className = "invalid";
}

  var treeOnPage = document.getElementById("content");
  var makeup = "";
  var spaces = " ";
  spaces = spaces.repeat(tree.height);
  var k = 1
  var j = tree.height;
  for (var i=0; i<tree.height; i++){
    makeup = tree.character.repeat(k);
    k  = k +2;
    console.log(spaces+"%c"+makeup, "color:red;");
    spaces = spaces.slice(0, j-1);
    j--;
  }
};




