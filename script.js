function convert(){

let temp = parseFloat(document.getElementById("temp").value);

let unit = document.getElementById("unit").value;

let result = "";

if(isNaN(temp)){
    result="Please enter a valid temperature.";
}
else if(unit==="C"){
    result =
    `${temp}°C = ${(temp*9/5+32).toFixed(2)}°F<br>
     ${(temp+273.15).toFixed(2)} K`;
}
else if(unit==="F"){
    let c=(temp-32)*5/9;

    result=
    `${temp}°F = ${c.toFixed(2)}°C<br>
     ${(c+273.15).toFixed(2)} K`;
}
else{

    let c=temp-273.15;

    result=
    `${temp} K = ${c.toFixed(2)}°C<br>
     ${(c*9/5+32).toFixed(2)}°F`;

}

document.getElementById("result").innerHTML=result;

}