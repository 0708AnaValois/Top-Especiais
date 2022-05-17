function adicionar() {
        var ing = document.getElementById("ingrediente").value;
        var lista  = document.getElementById("lista").innerHTML;
        lista = lista +"<li>"+ing+"</li>";
        
        document.getElementById("lista").innerHTML = lista;
      }
      
      function preparar() {
        var prep = document.getElementById("preparo").value;
        var paragrafo  = document.getElementById("paragrafo").innerHTML;
        paragrafo = paragrafo +"<p>"+prep+"</p>";
        
        document.getElementById("paragrafo").innerHTML = paragrafo;
      }
    