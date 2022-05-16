function Sum1() {
    var num = document.getElementById("ipnum1").value;
    console.log("the value you gave was:" + num);

    var sum = 0;
    for (i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log("The sum of numbers till " + num + " is: " + sum);
    alert("The sum of numbers till " + num + " is: " + sum);
}
//2----------------------------------------------------------------------
function Sum2() {
    var num = document.getElementById("ipnum2").value;
    console.log("the value you gave was:" + num);

    var sum = 0;
    for (i = 0; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }
    console.log("The sum of multiples of 3, 5 till " + num + " is: " + sum);
    alert("The sum of numbers till " + num + " is: " + sum);

}
//3-----------------------------------------------------------------------------
function OddEven() {
    var num = document.getElementById("ipnum3").value;
    if (num % 2 == 0) {
        alert(num + " is Even");
    }
    else {
        alert(num + " is Odd");
    }
}
//4-----------------------------------------------------------------
function HeadFrac() {
    var flips = document.getElementById("ipnum4").value;
    var heads = Math.floor((Math.random() * flips) + 1);
    var headRatio = heads / flips;
    console.log("this is headratio : " + headRatio.toFixed(2));
    alert("head ratio is :" + headRatio.toFixed(2));
}
//5-----------------------------------------------------------------------
function Leapyear() {
    // var year = prompt("please input a year to find out the next 20 years");
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    var counter = 20;

    while (counter >= 0) {

        if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year);
            year++;
            counter--;
        } 
        else
         {
            year++;
        }

    }
}
//6-------------------------------------------------------------
function Pattern(){
    const myList =[];
    for(i=0;i<5;i++){
       myList[i]= prompt("Enter element number: "+i);
    }
    console.log("*************");
    console.log("* "+myList[0]+" *");
    console.log("* "+myList[1]+" *");
    console.log("* "+myList[2]+" *");
    console.log("* "+myList[3]+" *");
    console.log("* "+myList[4]+" *");
    console.log("*************");
    
}
