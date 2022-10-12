// import Typed from typed.min.js;

$(document).ready(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();

        if(scroll >= 40){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    });

    let typed = new Typed('#element' , {
        strings: ['Mohamed A Nossir' , 'a Software Developer' , 'a Front-End developer'],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopcount:Infinity,
        startDelay:100
    });

    // animation of skils section

    let waypoint = new Waypoint({
        element: $("#exp-id"),
        handler: function(){
            let progress_bars = $(".progress-bar");
            progress_bars[0].setAttribute("style" , "width:100%;transition:1s all");
            progress_bars[1].setAttribute("style" , "width:75%;transition:1.5s all");
            progress_bars[2].setAttribute("style" , "width:75%;transition:1.7s all");
            progress_bars[3].setAttribute("style" , "width:80%;transition:2s all");
            progress_bars[4].setAttribute("style" , "width:75%;transition:2.3s all");
        },
        offset:'70%' 

    });

   
$('.div_img').on('click' , function(){
    alert("the div of image");
});   
    

$('.imgtest').on('click' , function(){
    alert("the image");
});

});

// console.log(1);  // دالة متزامنة لا تنتقل للكود الموالي الا بعد الانتهاء من تنفيذها
// console.log(2);   //المستعرض يعرض الرقم 2 بعدما يعرض الرقم 1
// $.ajax({           // دالة غير متزامنة  يتم تنفيذها ثم ينتقل الى الكود الموالي
//     url:"http://website.com/callback",  
//     success:function(data) {
//         console.log(3); 
//     }
//   });

// console.log(4); 

// console.log("1");
// console.log("2");

// setTimeout(function(){  // دالة غير متزامنة
//      console.log("3");
//  }, 5000);
// console.log("4");

// var arr= ["aa","aaa","skjkgjygfhjvblla","skgkjhgvhgbk"] ;
// var maxlen = [] ;

// for(let i =0 ; i<arr.length ; i++){
//     if(arr[i].length>maxlen){
//         maxlen = arr[i].length;
//     }
// }

// console.log(maxlen);

