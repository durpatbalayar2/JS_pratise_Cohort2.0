let btn = document.querySelector("#btn");
let inputFile = document.querySelector("#inputFile");

btn.addEventListener("click", function () {
  inputFile.click();
});

inputFile.addEventListener("change", function (dets) {

    const file = dets.target.files[0];

    if(file){
       btn.textContent = file.name; 
    }
  
});
