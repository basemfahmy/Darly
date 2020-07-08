$(document).ready(function(){
    
/*start scroll to element smoothly*/ 
  
$(".navbar-light .navbar-nav .home").click(function(e){ //for home only
    e.preventDefault() // prevent open # on click
    $("body,html").animate
    ({ scrollTop:0},1200)
}) 
    
$(".navbar-light .navbar-nav .nav-link").click(function(e){ //for general links
    e.preventDefault() // prevent open # on click
    //test   console.log( $(this).data("location"));
    $("body,html").animate
    ({ scrollTop: $("#"+$(this).data("location")).offset().top-70},1200)
}) 

/*end scroll to element smoothly*/    

/*start sync links with sections */     
$(window).scroll(function(){
    $(".my-block").each(function(){
        
        if( $(window).scrollTop() > $(this).offset().top-71 )
            
            var myele =  $(this).attr("id") // defibe var
   $('.nav-link[data-location="'+ myele +'"]')
        
    .parent().addClass("active").siblings().removeClass("active")  
        
    })
})    
/*end  sync links with sections */ 
    
/* start go-up button */
    $(window).scroll(function(){
        if( $(window).scrollTop()>300 ){ // to show-hide the button
            
            $(".go-up").fadeIn() // show it
        }
        else{
            $(".go-up").fadeOut() // hide it again
        }
    })
    
$(".go-up").click(function(){       //on click it go to to the top of page
    $("body,html").animate({scrollTop:0},1200)
})    
/* start go-up button */
    
/*start header section*/
$(".header .info .button-one").click(function(e){
        e.preventDefault() // prevent open # on click
    $("html,body").animate( {scrollTop:$(".contact").offset().top-70 },1800 )
})    
/*end header section*/
    
/*start portfolio section*/ 
$(" .portfolio .buttons button").click(function(){
    $(this).addClass("my-button").siblings().removeClass("my-button")
})
/*end portfolio section*/    
  
/*start blogs section*/  
$(".blog .main-body .item img ").mouseenter(function(){
    $(this).css({transform:"scale(1.1, 1.1)"})
}) 
    
$(".blog .main-body .item img").mouseleave(function(){
    $(this).css({transform:"scale(1,1)"})
})
   
/*end blogs section*/ 
    
/*start testmonials section  slider*/
$('.carousel').carousel({
  interval:2000
})
/*end testmonials section  slider*/
  
    
/*start contact section hide input placeholder-show*/
$(".contact input").focusin(function(){
   var old = $(this).attr("placeholder") // store old value
   $(this).attr("placeholder","")
    
    $(".contact input").focusout(function(){
        $(this).attr("placeholder",old)   // restore old value to ot 
    })
})
  
/*end contact section hide input placeholder-show*/
    
/*start contact section show asterisk on input*/
$(".contact input").focusout(function(){
    if( $(this).val()==""){
       $(this).parent("section").find(".risk").show(); // show risk
        $(this).css({borderColor:"red"})  //  make bordercolor: red to input
    }
   
})  
$(".contact input").keydown(function(){
    $(this).parent("section").find(".risk").hide(); // hide risk  again 
    $(this).css({borderColor:"#ced4da"})
})    
    
/*end contact section show asterisk on input*/
  
/*portfolio mixit up shuffle plugin */
var mixer = mixitup('.mix-container');
var mixer = mixitup(mix-container, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
/*portfolio mixit up shuffle plugin */

/*counter-up js  plugin for our statistics section*/
const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( el, {
    duration: 1000,
    delay: 16,
} )
/*counter-up js  plugin for our statistics section*/



 
}) // end main function : do not touch
