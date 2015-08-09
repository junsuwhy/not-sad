var all_rules=[
{"title":"保險問題"},
{"title":"有沒有勞健保",options:{
"y":"有","n":"沒有"
}},
{"title":"有沒有勞退",options:{
"y":"有","n":"沒有"
}},
{"title":"工時問題"},
{"title":"每週工時多少",options:{
"y":"小於 40 小時","n":"超過 40 小時"
}},
{"title":"每月加班工時",options:{
"y":"小於 54 小時","n":"超過 54 小時"
}},
{"title":"假日正常化"},
{"title":"有沒有產假?",options:{
"y":"有","n":"沒有"
}},
{"title":"產假是否給薪",options:{
"y":"有","n":"沒有"
}},
{"title":"國定假日有幾天 ?",options:{
"y":" 19 天","n":"未滿 19 天"
},
"ref_page":"http://momoge.blogspot.tw/2015/03/blog-post_25.html"
},
{"title":"薪水問題"},
{"title":"時薪、月薪超過最低薪資",options:{
"y":"有","n":"沒有"
}},
{"title":"薪水是否準時發放",options:{
"y":"是","n":"沒有"
}},
{"title":"有否被訂罰則扣薪",options:{
"y":"沒有","n":"有"
}},
{"title":"加班類型"},
{"title":"隱性加班（line,FB...) ",options:{
"y":"沒有","n":"有"
},
"ref_page":"http://www.coolloud.org.tw/node/80655",
},
{"title":"加班兩個小時內，每小時工資要加 1/3 以上",options:{
"y":"有","n":"沒有"
}},
{"title":"加班第 2 小時到第 4 個小時，每小時工資要 2/3 以上",options:{
"y":"有","n":"沒有"
}},
{"title":"天災事變或突發事件，工資要加倍。",options:{
"y":"有","n":"沒有"
}},
{"title":"面試情境"},
{"title":"面試時不能要求隱私資料：如身分證字號",options:{
"y":"沒有","n":"有"
},
 "ref_page":"http://www.taiwanjobs.gov.tw/internet/jobwanted/docDetail.aspx?uid=248&docid=25218"}];

for(var i = 0;i < all_rules.length;i++){
    all_rules[i].className = [];
    all_rules[i].getStyle = function(){
        var str = "";
        for(var j = 0;j < this.className.length;j++){
            str += " "+this.className[j];
        }
        if(typeof this.options == 'undefined'){
            str += " rule-section-title";
        }else{
            str += " each-rule";
        }
        return str;
    }
}

 var app = angular.module("page", []);
    app.controller('MgCtrl',function(){
        this.rules = all_rules;
        this.addStyle=function(rule, style_value){
            console.log(rule);
            rule.className.push(style_value);
        }
        this.rmStyle=function(rule, style_value){
            for(var i = 0;i < rule.className.length;i++){
                if(rule.className[i]==style_value){
                    rule.className.splice(i);
                }
            }
        }
    });



$(function(){
    $('.feature-item').click(function(){
        var $this = $(this);
        console.log($this.parent());
        $('.feature-item').css('opacity',0);
        $this.css('opacity',1);
        setTimeout(function(){
            $('.int-job-type').show();
            $('.int-job-type').height(149);
        },700);
    });
    
    $('.int-job-type li').click(function(){
        $('.int-job-type li').removeClass('selected');
        $(this).addClass('selected');
        $('.contents').show();
        $('.contents').css('height',function(){
            var height = 0;
            height += parseInt($('.contents').css('padding-top'));
            height += parseInt($('.contents').css('padding-bottom'));
            
            $('.contents').children().each(function(){
                height+=$(this).height();
            });
            height+='px';
            setTimeout(function(){
                $('.contents').css('height',"auto");
            },1000);
            return height;
        });
    });
});