let toggleNav = document.querySelector(".navigation-menu");
    function toggler(x){
        x.classList.toggle("toogle");

        toggleNav.classList.toggle("show");
    }



var typeText = {
    container: "printText", 
    text: [ 
        "Am a proffesional Web designer",
        "Let work together",
        "I can create awsome stuff",
    ], 
    delay: 100, // Delay in between each character
    blockDelay: 2000, // Delay in between each block of text
  
  
    timer: null, 
    pointer: 0, 
    block: 0,
    draw : function () {
    // typeText.draw() : typewriter effect
  
      // Draw next character
      typeText.pointer++;
      typeText.container.innerHTML = typeText.text[typeText.block].substring(0, typeText.pointer);
      if (typeText.pointer < typeText.text[typeText.block].length) {
        typeText.timer = setTimeout(typeText.draw, typeText.delay);
      }
  
      // End of block - Draw next block or cycle back to first?
      else {
        typeText.block++;
        if (typeText.text[typeText.block] == undefined) { typeText.block = 0; }
        typeText.timer = setTimeout(typeText.reset, typeText.blockDelay);
      }
    },
  
    reset : function () {
    // typeText.reset : Onto the next block of text
  
      typeText.pointer = 0;
      typeText.container.innerHTML = "";
      typeText.timer = setTimeout(typeText.draw, typeText.delay);
    }
};
  
  window.addEventListener("load", function(){
    typeText.container = document.getElementById(typeText.container);
    typeText.draw();
  });

        
