var race = {};
var age = {};
var income = {};
var occupancy = {};
var s = "text";
var baseUrl = "http://xyz-race";

function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
 } 
$(document).ready(function(){
    //var handle = $( "#race .mastercustom-handle" );
    $( "#races .masterslider" ).slider({
        min: 0,
        max: 10,
      create: function() {
        $( "#races .mastercustom-handle" ).text( $( this ).slider( "value" ));
      },
      slide: function( event, ui ) {
        $( "#races .mastercustom-handle" ).text( ui.value );
      }
    });
    $("#submitRace").on("click", function(){
        // const data = { 'first name': 'George', 'last name': 'Jetson', 'age': 110 };
        
        race["priority"]=$("#slider").slider("value");
        race["subraces"]={};
        //var subrace = {};
        $("#races .slider").each(function(){
         
            var paraName = $(this).attr("date-attr-race-name");
      
          
            race.subraces[paraName] = $(this).slider("value");
            
            //$(this).attr("date-attr-race-name");
            //$(this).slider("value");
        });
        //race.subraces.push(subrace);
        
        $("#races").hide();
        //$("#ages").show();
        $("#ages").show(function(){
            //var handle = $( "#ages .mastercustom-handle" );
            $( "#ages .masterslider" ).slider({
                min: 0,
                max: 10,
            create: function() {
                $( "#ages .mastercustom-handle" ).text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                $( "#ages .mastercustom-handle" ).text( ui.value );
            }
            });
        });
    
    });
    $("#backtoRace").on("click", function(){
        $("#races").show();
        $("#ages").hide();
    });
    


    $("#submitage").on("click", function(){
        
        age["priority"]=$("#ageslider").slider("value");
        age["subraces"]={};
        //var subrace = {};
        $("#ages .slider").each(function(){
    
            var paraName = $(this).attr("date-attr-age-value");
            age.subraces[paraName] = $(this).slider("value");
        });
           
        //age.subraces.push(subrace);
        
        $("#ages").hide();
            //$("#incomes").show();
        $("#incomes").show(function(){
            $( "#incomes .masterslider" ).slider({
                min: 0,
                max: 10,
            create: function() {
                $( "#incomes .mastercustom-handle" ).text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                $( "#incomes .mastercustom-handle" ).text( ui.value );
                }
            });
        });
    });
    $("#backtoAge").on("click", function(){
        $("#ages").show();
        $("#incomes").hide();
    });
    


    $("#submitincome").on("click", function(){
        
        income["priority"]=$("#incomeslider").slider("value");
        income["subraces"]={};
        //var subrace = {};

        $('#incomes input[type="checkbox"]').each(function(){
           
            var paraName = $(this).attr("date-attr-income-value");
            income.subraces[paraName] = $(this).is(":checked");
        });
       // income.subraces.push(subrace);
        
        $("#incomes").hide();
            //$("#incomes").show();
        $("#occupancys").show(function(){
            $( "#occupancys .masterslider" ).slider({
                min: 0,
                max: 10,
            create: function() {
                $( "#occupancys .mastercustom-handle" ).text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                $( "#occupancys .mastercustom-handle" ).text( ui.value );
                }
            });
        });

    });
    $("#backtoIncome").on("click", function(){
        $("#incomes").show();
        $("#occupancys").hide();
    });
    


    $("#submitoccupancy").on("click", function(){
        
        occupancy["priority"]=$("#slider").slider("value");
        occupancy["subraces"]={};
        $("#occupancys .slider").each(function(){
            //var subrace = {};
            var paraName = $(this).attr("date-attr-occupancy-value");
            occupancy.subraces[paraName] = $(this).slider("value");

            var paraNames = $(this).attr("date-attr-occupancy-values");
            occupancy.subraces[paraNames] = $(this).is(":checked");
           // occupancy.subraces.push(subrace);
        });
        $("#occupancys").hide();
        
       
       
        $.ajax({
            method: "GET",
            url: baseUrl,
            //data: JSON.stringify(race)
          })
            .done(function( msg ) {
                
              //alert( "Data Saved: " + msg );
              alert( "1. Cali" );
            
            });
        });
    });
