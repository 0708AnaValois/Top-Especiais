function enviar() {
    var par = document.getElementById("enviar").value;
    var paragrafo=document.getElementById("paragrafo").innerHTML;
    paragrafo = paragrafo + "<p>" + par + "</p>";

    document.getElementById("paragrafo").innerHTML = paragrafo;
}
