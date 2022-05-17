var races = {};
var ages = {};
var baseUrl = "http://xyz-race";

function encodeQueryData(data) {
    
    return encodeURIComponent(data);
 } 

 $(document).ready(function(){
 $("#submitRaces").on("click", function(){
    
    races["priority_race"]=$("#race-input").val();
    races["subraces"]={};
    races.subraces["whites"] = $("#whites-input").val();
    races.subraces["Blacks"] = $("#blacks-input").val();
    races.subraces["Asians"] = $("#asians-input").val();
    races.subraces["Hispanics"] = $("#hispanics-input").val();

    ages["priority_age"]=$("#age-input").val();
    ages["subages"]={};
    ages.subages["age-0-16"] = $("#input-0").val();
    ages.subages["age-18-64"] = $("#input-18").val();
    ages.subages["age-64+"] = $("#input-64").val();

    var finalmetrics = $.extend({}, races, ages);

    var jsondata = JSON.stringify(finalmetrics);
    
    const querystring = encodeQueryData(jsondata);
        baseUrl = baseUrl + "?" + querystring;
        console.log(baseUrl);
        
    
    });
   
    
});
