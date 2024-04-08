var a = parseInt(prompt("Podaj pierwsza liczbe: "));
var b = parseInt(prompt("Podaj druga liczbe: "));
var dzialanie = prompt("Podaj symbol dzialania(+, - , * , /)");

function dodawanie(a,b)
{
    return a + b;
}

function odejmowanie(a,b)
{
    return a - b;
}

function mnozenie(a,b)
{
    return a * b;
}

function dzielenie(a,b)
{
    return a / b;
}

if(dzialanie === "+")
{
    console.log(dodawanie(a,b));
}
else if(dzialanie === "-")
{
    console.log(odejmowanie(a,b));
} else if(dzialanie === "*")
{
    console.log(mnozenie(a,b));
} else(dzialanie === "/")
{
    console.log(dzielenie(a,b));
}