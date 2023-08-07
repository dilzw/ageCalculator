//Variable for Datepicker

var datepicker= document.getElementById('date-picker');
var chosedate= document.getElementById('choosedate');

//variable for 
var ageyr=document.getElementById('age-yr');
var agemonth=document.getElementById('age-month');
var ageday=document.getElementById('age-day');
var agehour=document.getElementById('age-hour');
var agesecond=document.getElementById('age-second');
var agemiliSecond=document.getElementById('age-miliSecond');


datepicker.addEventListener('change',function(){
    //alert(this.value);
    var selectDate=new Date(this.value);
    var DOB =selectDate.toLocaleDateString('en-US',Option);

    //console.log("DOB IS :"+ DOB);
    choosedate.innerHTML="DOB :"+" "+DOB;

    var miliSeconds_Btw_DOB =Date.parse(DOB);
    var miliSeconds_Btw_Now =Date.now();

    var age_in_MiliSeconds = miliSeconds_Btw_Now - miliSeconds_Btw_DOB;
    //console.log(age_in_MiliSeconds);

    var miliSeconds = age_in_MiliSeconds;
    var second =1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;
    var year = day*365;
    
    //calculation part

    var years=Math.round(miliSeconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(miliSeconds/second);
    var seconds = Math.round(miliSeconds/second);

    //print values in each boxes


    ageyr.innerHTML = years;
    agemonth.innerHTML = months;
    ageday.innerHTML = days;
    agehour.innerHTML = hours;
    agesecond.innerHTML = seconds;
    agemiliSecond.innerHTML = miliSeconds;

    document.querySelector('.age-cal').classList.add('expand');
})