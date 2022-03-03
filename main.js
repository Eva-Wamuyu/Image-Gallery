const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFileName = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Looping through images */
for(var counter=0; counter<imageFileName.length; counter++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', './images/'+imageFileName[counter]);
  thumbBar.appendChild(newImage);


  const attr = newImage.getAttribute("src");
  newImage.addEventListener("click",()=>{
    displayedImage.setAttribute('src',attr);
  });
 



 
}



/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",()=>{

  if(btn.getAttribute('class') === 'dark'){
    btn.setAttribute('class','light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  else{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";

  }
 

});