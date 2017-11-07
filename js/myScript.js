(function() {
    var myParallax = 
    document.querySelectorAll("#parallax"), speed = 0.3;
    
    window.onscroll = function() {
        myParallax.forEach(function(elP){
        var windowYOffset = - window.pageYOffset, 
        elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";
            
        elP.style.backgroundPosition = elPBackgroundPos;
    });
        
    };
    
    
    
})();