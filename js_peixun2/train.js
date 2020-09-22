var ar = true;
var content=0;

$(".n3").click(function () {
    if (ar) {
        $(".ban").removeClass("hide");
        $(".bottomCont .choose").css("border", "solid 1px #e0e0e0");
        $(".bottomCont .choose").css("height", "290px")
        ar = !ar;
    } else {
        $(".ban").addClass("hide");
        $(".bottomCont .choose").css("border", "solid 0px #e0e0e0");
        $(".bottomCont .choose").css("height", "auto")
        ar = !ar;
    }
});
// 切换内容
var changeHead=0;
$("input").bind("focus", function () {
    $('.buttomFixed').css({
        'position': 'static',
        'bottom': '0'
    });
}).bind("blur", function () {
    $('.buttomFixed').css({
        'position': 'fixed',
        'bottom': '0'
    });
});
$(".ban").on("click", "li", function (e) {
    var a = $(e.target);
    $(".ban li").removeClass("active")
    a.addClass("active");
    $(".chooseName").text(a.text())
    $("#enroll").val(a.text());
});

//第三页
$('#search').click(function () {
    //点击查询示例
    var certificateNumber = $("#certificateNumber").val();
    // if (certificateNumber == null || certificateNumber == '') {
    //     // alert("请填写证书编号");
    //     $(".hasNo").removeClass("hide");
    //     $(".has").addClass("hide")
    // } else
    //  {
        $.ajax({
            type: "post",
            url: "/extensionTrain/checkDiploma",
            data: { certificateNumber: certificateNumber },
            dataType: "json",
            success: function (json) {
                if (json.success) {
                    var data = json.data;
                    $(".hasNo").addClass("hide");
                    $(".has").removeClass("hide")
                    searchResultHas(data.photo, data.certificateNumber, data.trainStudent, data.startDate[0], data.startDate[1], data.startDate[2], data.endDate[0], data.endDate[1], data.endDate[2], data.trainClass, data.creDate[0], data.creDate[1], data.creDate[2])
                } else {
                       // alert("请填写证书编号");
           $(".hasNo").removeClass("hide");
             $(".has").addClass("hide")
                  
                }
            }
        });
    // }
})
$(".hasBack").click(function(){
    $(".has").addClass("hide");
    $(".hasNo").addClass("hide");
})
  // 查询结果函数
  var searchResultHas = function (url, bh, name, ssy, ssm, ssd, sey, sem, sed, pro, yy, ym, yd, endtime) {
    // 图片url， 证件编码， 姓名， 开始年，开始月，开始日，结束年，结束月，结束日, 课程名称， 颁发年，颁发月，颁发日
    $('.zs_box .img_box img').attr('src', url)
    $('.zs_box .zs_bh').html(bh)
    $('.zs_box .person_name').html(name)
    $('.zs_box .time .s_y').html(ssy)
    $('.zs_box .time .s_m').html(ssm)
    $('.zs_box .time .s_d').html(ssd)
    $('.zs_box .time .e_y').html(sey)
    $('.zs_box .time .e_m').html(sem)
    $('.zs_box .time .e_d').html(sed)
    $('.zs_box .project').html(pro)
    $('.zs_box .send_time .sy').html(yy)
    $('.zs_box .send_time .sm').html(ym)
    $('.zs_box .send_time .sd').html(yd)
    $('.result_slider_wrapper').hide();
    $('.result_box .search_result').show();
    $('.search_result .zs_box').show();
    $('.search_result .text').hide();
    console.log(endtime.split('/'));
}

var searchResultHasno = function () { //查无结果
   $(".changeContent3 .hasNo").removeClass("hide");
   $(".changeContent3 .bannerCtrl").addClass("hide")
}
$(".changeContent3 .hasNo .backIcon").click(function(){
    $(".changeContent3 .hasNo").addClass("hide");
    $(".changeContent3 .bannerCtrl").removeClass("hide")
})
// 第五页
$(".changeContent5 .changeLine li").click(function(){
    $(".changeContent5 .changeLine li").removeClass("addYellow");
    $(this).addClass("addYellow");
    if($(this).text()=="公交线路"){
        $(".changeContent5 .line-add").text("乘坐50路公交车至江苏软件园站下车。")
    }else{
        $(".changeContent5 .line-add").text("乘坐4号线地铁至徐庄·苏宁总部站下车，7号出口出站")
    }
})
swiper1();
swiper2();
swiper3();
function swiper1() {
    new Swiper("#banner", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
}
function swiper2() {
    new Swiper("#banner2", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
}
function swiper3() {
    new Swiper("#search-bottom-banner", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
}