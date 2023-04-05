# yuletideGhost.github.io
CSCI1170 Assignment 3 Bonus

In a README file which explains the structure of your code including all relative paths in a text file: README.txt Here is where you will document your code. For each function, include a purpose, and as applicable: input and output, example, dependent code structures.  Include any references to materials used (e.g., photos or stock images). 
	//There is reused code from Assignment 1 and 2

About this website:
	I plan to work in computer science in conjunction with oceanography
and other sea related projects, so having a website that exhibits 
my care for the ocean as well as my programming/ design skills is desired.
Each page features different things I aspire to complete
before graduation or have already completed.

File Structure -> 
|
|-> index.html
|
|-> aboutocean.html
|
|-> aboutme.html
|
|-> style.css
|
|-> javascript.js
|
|-> images -> 
|		AestheticTumblrOcean1.png
|		AestheticTumblrOcean2.png
|		AestheticTumblrOcean3.png
|		AestheticTumblrOcean4.png
|		AestheticTumblrOcean5.png
|		AestheticTumblrOcean6.png
|		beluga.png
|		favicon whale.png
|		footerwater.png
|		humpbackwhale.png
|		orca.png
|		secondpageheader.png
|		splash1.png
|		splash2.png
|		splash3.png
|		thirdpageheader.gif
|		iPhone Player.png
|
|-> images2 -> 
|		Bioluminescent waves.jpg
|		Devil's eye, Ginnie Springs - Imgur.jpg
|		Ocean sunrise in Navarre.jpg
|		Stargazing over a secluded beach.jpg
|
|-> assets ->
|		Humpback Whale Sounds.mp3
|		Underwater World 12K HDR 60fps ( Dolby Vision ).mp4
|		Underwater World HD.gif



index.html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome!</title>
    <link rel="stylesheet" href="style.css" />
    <script src="javascript.js"></script>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/favicon whale.png"
    />
  </head>

    <!-- <Header Images> -->
	Line 17
Image that makes up main header.

    <!-- <Website title> -->
    	Line 20
Welcome!

    <!-- <Button Container> -->
	Line 25-35

    <!-- <Color Scheme changing buttons> -->
	Lines 27-29
Buttons for three different color schemes

    <!-- <Conditional/Notification Button> -->
	Line 32
Button to activate the conditional/notification

    <!-- <Event Handler> -->
	Line 34
Click to reveal a Dolphin fact

    <!-- <Menubar> -->
	Line 23-52
Two different images that have links attached that connect to the other two webpages

    <!-- <Divider Image> -->
	Line 55

    <!-- <First paragraph and image separator> -->
	Lines 58-71
About this website and an image separator 
 
    <!-- <Second paragraph and image separator> -->
	Lines 73-87
What this website is doing and an image separator 
    
    <!-- <Third paragraph and image separator> -->
	Lines 90-101
Where this website is going and an image separator 

    <!-- <Divider Image> -->
	Line 103

    <!-- <Links and footer image> -->
	Lines 107-114
Links to more information to https://www.dal.ca/academics/programs/
And a link to my email glaplant@dal.ca
Footer image

aboutocean.html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About the ocean!</title>
    <link rel="stylesheet" href="style.css" />
    <script src="javascript.js"></script>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/favicon whale.png"
    />
  </head>

    <!-- <Header Image> -->
	Line 17
Image that makes up main header.

    <!-- <Website title> -->
	Line 20
About the ocean!

    <!-- <Button Container> -->
	Line 25-35

    <!-- <Color Scheme changing buttons> -->
	Lines 27-29
Buttons for three different color schemes

    <!-- <Conditional/Notification Button> -->
	Line 32
Button to activate the conditional/notification

    <!-- <Event Handler> -->
	Line 34
Click to reveal a Dolphin fact

    <!-- <Grid Container> -->
	Lines 20-193

<!-- <First video and paragraph descriptor> -->
	Lines 26-144
A beautiful 2k 60fps video on different tropical sealife
Relative linked from assets folder with full controls enabled

    <!-- <Menubar> -->
	Lines 47-71
Two different images that have links attached that connect to the other two webpages

    <!-- <Second video and paragraph descriptor> -->
    Lines 78-93
Linked from YouTube using iframe with full controls enabled

    <!-- <Form Section> -->
	Lines 96-175
Different forms including radio style and checkbox style

    <!-- <First audio file and paragraph descriptor> -->
	Lines 178-190
Relative linked from assets folder with full controls enabled

    <!-- <Links and footer image> -->
    <!-- <Another external link> -->
    Lines 197-202
Link to more info
    <!-- <Empty Placeholder> -->
Lines 214-220
    <footer>
Links to more information to https://www.dal.ca/academics/programs/
And a link to my email glaplant@dal.ca
Footer image

aboutme.html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About Me!</title>
    <link rel="stylesheet" href="style.css" />
    <script src="javascript.js"></script>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/favicon whale.png"
    />
  </head>

    <!-- <Images that makes up header> -->
	Lines 16-27
Images that makes up header

    <!-- <Website title> -->
	Line 30
About Me!

    <!-- <Button Container> -->
	Line 65-83

    <!-- <Color Scheme changing buttons> -->
	Lines 67-69
Buttons for three different color schemes

    <!-- <Conditional/Notification Button> -->
	Line 72
Button to activate the conditional/notification

    <!-- <Event Handler> -->
	Line 74
Click to reveal a Dolphin fact

    <!-- <Grid Container> -->
	Lines 33-258
<!-- <Nested lists- ordered and unordered> -->
	Lines 35-96
Nested ordered list and unordered lists describing my resume 

    <!-- <Menubar> -->
	Lines 99-123
Two different images that have links attached that connect to the other two webpages

    <!-- <Paragraph> -->
	Line 132
Description of table

    <!-- <Table> -->
	Lines 136-188
Table displaying my current class schedule

    <!-- <Form Section> -->
	Lines 193-235
Feedback form using POST method, type text, type email, type submit, text area

    <!-- <Paragraph> -->
	Line 241
Description of table

    <!-- <Links and footer image> -->
    	Lines 246-255
Links to more information to https://www.dal.ca/academics/programs/
And a link to my email glaplant@dal.ca
Footer image

style.css

  /* universal selector */
  body {
  }

  /* Flexbox */
  /* header space */
  header {
  }

  /* footer space */
  footer {
  }

  /* footer image */
  .footerimg {
  } 

  /* header styles */
  .nav-h1 {
  }
  .nav-section {
  }
  .nav-h2 {
  }

  /* background images */
  .parallax {
  }
  .parallax2 {
  }
  .parallax3 {
  }
  .parallax4 {
  }
  .parallax5 {
  }

  /* Grid */
  .grid-container {
  }

  /* header */
  .grid-item-header {
  }
  
  /* sidebar */
  .grid-item-nav {
  }

  /* article */
  .grid-item-article {
  }

  /* nav */
  .grid-item-sidebar {
  }
  
  /* footer */
  .grid-item-footer {
  }

  /* surveys */
  .grid-item-aside {
  }
  
  /* audio */
  .grid-item-aside2 {
  }

  /* making the iPhone audio player */
  audio {
  }
  .iphone {
  }
  .waterGif {  
  }

  /* an empty space */
  .empty{
  }

  /* index.html three equal columns */
  *{
  }
  .column {
  }
  .row:after {
  }

  /* URL/ Link styling */
  /* unvisited link */
  a:link {
  }
  /* visited link */
  a:visited {
  }
  /* mouse over link */
  a:hover {
  }
  /* selected link */
  a:active {
  }

  /* Table styling; multiple selectors */
  table, th, td {
  }
  table {
  }

  /* List styling */
  ol {
  }

  /* Adjacent sibling selectors */
  li:hover + li {
  }

  /* Sibling selectors */
  li:hover ~ li {
  }

  /* Child selectors */
  div > p {
  }

  /* attribute and pseudo-element selectors */
  #title:hover { 
  }

  /* This is for form on aboutme.html; multiple selectors */
  input[type=text], input[type=email], textarea {
  }

  /* This is for our nav bar opacity */
  .cont1{
  }
  .belImage{
  }
  .middle{
  }
  .cont1:hover .belImage{
  }
  .cont1:hover .middle{
  }
  .textImg{
  }

  /*Assignment 3 addditions*/
  .grid-button {
  }

  /*button styling CSS*/
  .btn {
  }
  
  .btn:hover {
  }

  /*Assignment 3 addditions and media breaks*/

  /*tablet_view; 1200px*/
  @media screen and (max-width: 1200px){

  /* background changes color in tablet view */
  body {
    background-color:
  }

  /* index.html three equal columns */
  *{
  }
  .row {
  }
  .column {
  }

  /*Nav Description moves with page*/
  #desc {
  }

  /* aboutme.html series of circles that are part of the header*/
  #headerimgs {
    display: none;
  }
}
  
  /*mobile_view; 840px*/
  @media screen and (max-width: 840px) {

  /* background changes color in mobile view */ 
  body {
  }

  /* index.html three equal columns */
  *{
  }
  .row {
  }
  .column {
  }

  /* Nav Description moves with page*/
  #desc {
  }
  /* series of circles that are part of the header*/
  #headerimgs {
    display: none;
  }

  /* Grid */
  .grid-container {
  }

  .grid-container {
  }

  /* aboutocean.html making the iPhone audio player */
  audio {
  }
  .iphone {
  }
  .waterGif {  
  }
  .grid-item-aside2 > p {
  }
}

javascript.js

  /*Button to change colors for Scheme1*/
function myFunctionS1() {
    /*Changes background color*/
document.body.style.backgroundColor = "azure";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#5d6c8e";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#5d6c8e";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#5d6c8e";
});
}

  /*Button to change colors for Scheme2*/
function myFunctionS2() {
    /*Changes background color*/
document.body.style.backgroundColor = "#39484a";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#fffdd6";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#5f61a9";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#fffdd6";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#fffdd6";
});
}

  /*Button to change colors for Scheme3*/
function myFunctionS3() {
    /*Changes background color*/
document.body.style.backgroundColor = "#b3d6cf";
    /*Changes colors for headers*/
let headOne = document.querySelectorAll("h1");
headOne.forEach(element => {
        element.style.color = "#3b5a7c";
});
    /*Changes colors for headers*/
let headTwo = document.querySelectorAll("h2");
headTwo.forEach(element => {
        element.style.color = "#39484a";
});
    /*Changes colors for text*/
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    element.style.color = "#3b5a7c";
});
    /*Changes colors for text inside tables and forms*/
let tableColor = document.querySelectorAll("border, table, ol, li, fieldset");
tableColor.forEach(element => {
    element.style.color = "#3b5a7c";
});
}

  /*Conditionals and Notifications*/
function myFunctionCondition() {
    const i = "";
    if (confirm("Would you like to learn about the ocean?")) {
      /*alert is the notification*/
        alert("Excellent!");
    } else {
      /*conditional is else statement*/
        alert("You should donate to 4ocean and then come back.");
    }
    document.getElementById("con").innerHTML = i; 
}

  /*Event Handling - when user clicks message will appear*/
document.addEventListener("click", myFunction);
  /*when user clicks message will appear*/
function myFunction() {
  /*message*/
  document.getElementById("demo").innerHTML = "Dolphins will take over the world one day";
}

Citations:

37 aesthetic ocean ideas: Ocean, Ocean Wallpaper, Scenery (2022) Pinterest. Available at: https://www.pinterest.com/aquativity/aesthetic-ocean/ (Accessed: February 8, 2023).


8K HDR Ocean Life (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=VqU9EB2vvY8 (Accessed: February 8, 2023).


Ansonsaw (no date) Water splash isolated on white background, iStock. Available at: https://www.istockphoto.com/photo/water-splash-gm182812025-13225547 (Accessed: February 8, 2023).


Humpback whale sounds (2020) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=iXsB015LpH0 (Accessed: February 8, 2023).


Photography, P. (no date) Water splash clip art - transparent background water splash, HD PNG download - kindpng, KindPNG.com. Available at: https://www.kindpng.com/imgv/mJJiTm_water-splash-clip-art-transparent-background-water-splash/ (Accessed: February 8, 2023).


Pool reflections by Diane MacDonald (no date) Fine Art America. Available at: https://fineartamerica.com/featured/pool-reflections-diane-macdonald.html (Accessed: February 8, 2023).


Tumblr aesthetic icon Solar System - ocean background for photoshop, HD PNG download , transparent PNG image - pngitem (no date) PNGitem.com. Available at: https://www.pngitem.com/middle/TTTxJbR_tumblr-aesthetic-icon-solar-system-ocean-background-for/ (Accessed: February 8, 2023).


Underwater World 12K HDR 60FPS ( Dolby Vision ) (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=cdRviRlcFL8 (Accessed: February 8, 2023).


Water Png - Transparent Background Water Splash PNG, PNG download , Transparent png image - pngitem (no date) PNGitem.com. Available at: https://www.pngitem.com/middle/mJJRxJ_water-png-transparent-background-water-splash-png-png/ (Accessed: February 8, 2023).


Wind wave sea - wave png transparent background, free PNG image (no date) PngKit.com. Available at: https://www.pngkit.com/bigpic/u2w7q8i1q8u2r5r5/ (Accessed: February 8, 2023).

37 aesthetic ocean ideas: Ocean, Ocean Wallpaper, Scenery (2022) Pinterest. Available at: https://www.pinterest.com/aquativity/aesthetic-ocean/ (Accessed: February 8, 2023).


8K HDR Ocean Life (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=VqU9EB2vvY8 (Accessed: February 8, 2023).


Ansonsaw (no date) Water splash isolated on white background, iStock. Available at: https://www.istockphoto.com/photo/water-splash-gm182812025-13225547 (Accessed: February 8, 2023).


Humpback whale sounds (2020) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=iXsB015LpH0 (Accessed: February 8, 2023).


Photography, P. (no date) Water splash clip art - transparent background water splash, HD PNG download - kindpng, KindPNG.com. Available at: https://www.kindpng.com/imgv/mJJiTm_water-splash-clip-art-transparent-background-water-splash/ (Accessed: February 8, 2023).


Pool reflections by Diane MacDonald (no date) Fine Art America. Available at: https://fineartamerica.com/featured/pool-reflections-diane-macdonald.html (Accessed: February 8, 2023).


Tumblr aesthetic icon Solar System - ocean background for photoshop, HD PNG download , transparent PNG image - pngitem (no date) PNGitem.com. Available at: https://www.pngitem.com/middle/TTTxJbR_tumblr-aesthetic-icon-solar-system-ocean-background-for/ (Accessed: February 8, 2023).


Underwater World 12K HDR 60FPS ( Dolby Vision ) (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=cdRviRlcFL8 (Accessed: February 8, 2023).


Water Png - Transparent Background Water Splash PNG, PNG download , Transparent png image - pngitem (no date) PNGitem.com. Available at: https://www.pngitem.com/middle/mJJRxJ_water-png-transparent-background-water-splash-png-png/ (Accessed: February 8, 2023).


Wind wave sea - wave png transparent background, free PNG image (no date) PngKit.com. Available at: https://www.pngkit.com/bigpic/u2w7q8i1q8u2r5r5/ (Accessed: February 8, 2023).


Stargazing over a secluded beach on the island of Corsica [1600x2000] [OC] (2020) reddit.com. Available at: https://www.reddit.com/r/EarthPorn/comments/dky5cd/stargazing_over_a_secluded_beach_on_the_island_of/ (Accessed: March 8, 2023).


Devil's eye, Ginnie Springs (2016) imgur.com. Available at: https://imgur.com/ML06PaS (Accessed: March 8, 2023).


[OC] Ocean sunrise in Navarre, FL. [3276x2621] (2019) reddit.com. Available at: https://www.reddit.com/r/EarthPorn/comments/9px4s9/oc_ocean_sunrise_in_navarre_fl_3276x2621/ (Accessed: March 8, 2023).


Bioluminescent waves glowing blue as Venus shines and reflects off the ocean - San Diego, CA [1366x2049] [OC] @jackfusco (2021) reddit.com. Available at: https://www.reddit.com/r/EarthPorn/comments/o9rgrr/bioluminescent_waves_glowing_blue_as_venus_shines/ (Accessed: March 8, 2023).


Cellphone, device, electronic icon (no date) iconfinder.com Available at: https://www.iconfinder.com/icons/3469739 cellphone_device_electronic_mobile_notch_phone_smartphone_icon (Accessed: March 8, 2023).

