function realPic(){
    const id = Math.floor (  (Math.random()* 6 + 1    )*10000  )

    return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
}

const Fakepic = "https://thispersondoesnotexist.com/";

// showing the images

const imgContainer = document.getElementById("images");
const rescontainer = document.getElementById("result");

function draw(){
    imgContainer.innerHTML = "";
    rescontainer.innerHTML = "";
const randomBool = Math.random() > 0.5
const arr = [randomBool , !randomBool]
const again = document.createElement("button")
again.innerHTML = "play again"
again.onclick = draw;

for (const isReal of arr){
    const img = document.createElement("img");
    img.src = isReal ? realPic() : Fakepic;
    img.onclick = function() {
    if (isReal){
            rescontainer.innerHTML = " MABROOK :D"
    
        }
        else{
            rescontainer.innerHTML = "try again :("

        }
        rescontainer.appendChild(again);
        }
        imgContainer.appendChild(img);

    }
   
}
draw();
