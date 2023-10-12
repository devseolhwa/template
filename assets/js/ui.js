/* 게시판 상세 view 팝업형 START */
function viewPopupOpen(openTarget) {
    $(openTarget).addClass("show");
}
function viewPopupClose(closeTarget) {
    $(closeTarget).removeClass("show");
}
/* 게시판 상세 view 팝업형 END */


/* 게시판 작성 write 기본형 START */
// 첨부파일
function delFile(e){
    var this_file_item = e.previousElementSibling; //console.log(fileBox);
    var file_name = e.previousElementSibling.children[0];

    this_file_item.classList.remove("open");
    file_name.value = "현재 선택된 파일이 없습니다.(최대 20MB까지 지원)";
}
function uploadName(e){
    var files = e.files;
    var filename = files[0].name;  //console.log(fileName);
    var item = e.parentNode.parentNode;

    // 추출한 파일명 삽입 
    var upload_name = e.parentNode.previousElementSibling;
    upload_name.value = filename;
    item.classList.add("open");
}
/* 게시판 작성 write 기본형 END */


/* 게시판 FAQ START */
// tnbSlide
$(window).on("load resize", function () {
    tnbSlideSet();
});
function tnbSlideSet() {
    let screenWidth = $(window).width();
    let tnbSlideCheck = $(".tnbSlide");

    if (tnbSlideCheck.length) {
        var tnbSlide = new Swiper(".tnbSlide .swiper-container", {
            loop: false,
            slidesPerView: "auto", // 보여줄 개수
            observer : true,
            observeParents : true,
            allowTouchMove: true,
            navigation: false,
            pagination: false,
            breakpoints: {
                767: {
                    // 브라우저가 767보다 클 때
                    allowTouchMove: false,
                },
            },
        });
    }
    $(".tnbSlide li a").on("click", function(){
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");
        return false;
    });
    if (screenWidth < 768) {
        //mobile
        $(".tnbSlide li a").on("click", function(){
            tnbSlideTo();
            return false;
        });
        
        function tnbSlideTo(){
            $(".tnbSlide").find("li").each(function(i) {
                if($(this).hasClass("on")){
                    //console.log(i);
                    tnbSlide.slideTo(i);
                }
            });
            if($(".tnbSlide li:first-child").hasClass("on")){ 
                $(".tnbSlide").addClass("first");
                $(".tnbSlide").removeClass("ing last");
            } else if($(".tnbSlide li:last-child").hasClass("on")){ 
                $(".tnbSlide").addClass("last");
                $(".tnbSlide").removeClass("ing first");
            } else{
                $(".tnbSlide").addClass("ing");
            }
        }
        tnbSlideTo();
    }
}

// tabmenu
$(window).on("load resize", function () {
    tabmenu();
});
function tabmenu(){
    let screenWidth = $(window).width();
    let btnTabToggle = $(".btnTabToggle");
    let btnTabText = $(".tabMenuList").find(".on").children("a").text();
    
    btnTabToggle.text(btnTabText);

    $(".tabMenuList li a").on("click", function(){
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");
        if (screenWidth >= 768) {
            //pc
            $(".tabMenuList").css({"display":"flex"});
            return false;
        } else if (screenWidth < 768) {
            //mobile
            let click_txt = $(this).text();

            btnTabToggle.attr("title", "하위메뉴열기");
            btnTabToggle.parent(".tabmenu").removeClass("open");
            btnTabToggle.text(click_txt);
            $(".tabMenuList").css({"display":"none"});
            return false;
        }
    });
    if (screenWidth >= 768) {
        //pc
        $(".tabMenuList").css({"display":"flex"});
    } else if (screenWidth < 768) {
        //mobile
        $(".tabMenuList").css({"display":"none"});
    }
}
$(document).on("click", ".btnTabToggle", function(){
    $(this).parent(".tabmenu").hasClass("open") ? $(this).attr("title", "하위메뉴열기") : $(this).attr("title", "하위메뉴닫기");
    $(this).parent(".tabmenu").toggleClass("open").children(".tabMenuList").slideToggle();
    return false;
});

//faq list
$(document).on("click", ".faqTitle button", function(){
    $(this).parent().parent().hasClass("open") ? $(this).attr("title", "답변열기") : $(this).attr("title", "답변닫기");
    $(this).parent().parent().toggleClass("open").children(".faqText").stop().slideToggle();
    return false;
});
/* 게시판 FAQ END */


/* modal popup START */
function popupOpen(openTarget) {
    $(openTarget).addClass("show");
}
function popupClose(closeTarget) {
    $(closeTarget).removeClass("show");
}
/* modal popup END */


/* calenderTable START */
$(document).on("click", ".calenderTableSm a", function(){
    $(this).closest(".calenderTableSm").find("td").removeClass("on");
    $(this).parent("td").toggleClass("on").siblings("td").removeClass("on");
});
/* calenderTable END */