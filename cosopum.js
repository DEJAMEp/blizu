 const promedio = () => {
        
        const inputLista = document.querySelector("#valores-lista");
        const ListrastringValores = inputLista.value;
        let Lista = ListrastringValores.split(',');

        

        let ListaNumeros = [];

       

        Lista.map((elemento) => {
          ListaNumeros.push(parseInt(elemento));
        });
      
        let sumTotal = 0;

        ListaNumeros.map((num) => {
          sumTotal = sumTotal + num;
      });
      
      console.log();

      let h1 = document.querySelector('#resultado');

      h1.innerHTML = sumTotal / ListaNumeros.length;

     
      }
const maxmin = () => {
                const listaNumeros = inputlista();

                const maximo =  Math.max(...listaNumeros);
                const minimo = Mathe.min(...listaNumeros);
                




}