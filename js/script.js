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
"y":" 29 天","n":"未滿 29 天"
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
{"title":"開會開太久",options:{
"y":"不會","n":"會"
}}];

 var app = angular.module("page", []);
    app.controller('MgCtrl',function(){
        this.rules = all_rules;
        this.setStyle=function(rule, style_value){
            rule.style = style_value;
                      alert(rule.title);
            console.log($scope);
        }
        this.clearStyle=function(rule){
            rule.style = "";
        }
    });