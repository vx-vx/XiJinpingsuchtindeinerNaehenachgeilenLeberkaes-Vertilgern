function password_check()
{
    var inputVal = document.getElementById("myInput").value;
    if(!inputVal)
    {
        console.log("inputval is missing");
        return null;
    }
    if(inputVal == "ToddHoward")
    {
        window.location.replace("secret.html");
    }
    else
        
        alert("Falsch :(")
        console.log("wrong password");
        return null;
}

function button_pressed()
{
    window.navigator.clipboard

    window.navigator.clipboard.writeText("00110111 01011000 00110010 00110110 00111000 00101101 01000100 01010000 00110011 00111001 00110111 00101101 01001011 01010110 01001010 01001110 01001000")
}