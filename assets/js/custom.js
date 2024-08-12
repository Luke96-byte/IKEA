
$(function(){

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
    })

    gsap.registerPlugin(ScrollTrigger);
    
    //헤더 active

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        active = $('.sc-intro .text').offset().top;
        
        if (curr >= active ) {
            $('#header').addClass('active')
            
        } else {
            $('#header').removeClass('active')
        }
    })

     //메뉴 버튼 클릭 이벤트
     $('#header .btn-menu').click(function(){
        if ( $('.gnb').hasClass('show')) {
            $(this).text('menu')
        }else{
            $(this).text('close')
        }
        $('.gnb').toggleClass('show');
        $('body').toggleClass('scroll-hidden');
        $('.gnb *').addClass('on');
        $('#hader').addClass('on')
        
    })

    char = gsap.timeline({
        defaults:{
            duration:1,
            y:100
        },
        scrollTrigger:{
            trigger:".sc-intro",//기준지점
            start:"0% 0%", //[트리거시작점 ][윈도우 시작 지점]
            end:"100% 60%",//[트리거끝지점 ][윈도우 끝 지점]
            // markers:true,
            scrub:0,
            // stagger:0.1
            // stagger:{
            //     from:"random",
            //     each:0.1,
            // }
        }
    })

    

    char.to(".word .char",{
        yPercent:-50,
        stagger:0.5,
        
    },'a')
    char.to(".sc-intro .logo-fantoni",{
      yPercent:-15,
      scrub:1
    },'a')



    asd = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-location .col-right ",//기준지점
            start:"0% 0%", //[트리거시작점 ][윈도우 시작 지점]
            end:"100% 0%",//[트리거끝지점 ][윈도우 끝 지점]
            // markers:true,
            scrub:0,
        }
    })

    asd.to('.sc-location .col-right .img-box',{
        y:-100
    },'a')
    asd.to('.sc-location .col-right .img-box img',{
        y:100
    },'a')


    // console.log($('.sc-philo video').get(0));
    // console.log($('.sc-philo video').get(0).duration);
    // var totalDuration = 0;

    video =$('.sc-philo video').get(0);
   

    // 

    video.onloadedmetadata = function() {
        totalDuration = video.duration;
       
        ScrollTrigger.create({
            trigger:".philo-wrapper",
            start:"0% 0%",
            end:"100% 100%",
            // markers:true,
            onUpdate:function(self){
                // console.log(self);
                video.currentTime=self.progress*totalDuration;
            },
        })
    };

    philo = gsap.timeline({
        scrollTrigger:{
            trigger:".philo-wrapper",
            start:"0% 0%",
            end:"100% 100%",
            // markers:true,
            scrub:0
        },
    })

    philo.to('.sc-philo .text-container .bottom .scroll .line',{
        yPercent:-200
    })


    product = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-product",//기준지점
            start:"10% 0%", //[트리거시작점 ][윈도우 시작 지점]
            end:"100% 10%",//[트리거끝지점 ][윈도우 끝 지점]
            // markers:true,
            scrub:1,
        },
    })

    product.to('.prd-list',{
        xPercent:-70
    },'a')
    product.to('.gauge-bar .percent',{
        width: "100%"
    },'a')


    $(document).mousemove(function(e){
        xVal = e.clientX
        yVal = e.clientY

        gsap.to('.cursor-basic',{
            x:xVal,
            y:yVal
        })
    })
    

  $('video').hover(
    function() {
        $('.cursor-video').addClass('on');
        $('.cursor-basic').addClass('off');
        },
    function() {
        $('.cursor-video').removeClass('on');
        $('.cursor-basic').removeClass('off');
    }
);

    $(document).mousemove(function(e){
        xVal = e.clientX
        yVal = e.clientY

        gsap.to('.cwursor-video',{
            x:xVal,
            y:yVal
        })
    })



    //비쥬얼 슬라이드
    visualSlide = new Swiper('.sc-visual .container',{
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            },
        loop:true,
        spaceBetween:100,
        slidesPerView:'auto',
        speed: 15000
        })
       
    })

    //버튼 호버
    $('.sc-about .bottom .btn-about').hover(function(){
        $('.sc-about .bottom .btn-about .icon').addClass('on')
    })

    gsap.to(childElements, {
        duration: 0.5,
        y: -30,
        opacity: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });

    gsap.from('.gnb *')




    





    // 800이상
    // 코드




    // 799이하에서 쓸코드
    // 모바일