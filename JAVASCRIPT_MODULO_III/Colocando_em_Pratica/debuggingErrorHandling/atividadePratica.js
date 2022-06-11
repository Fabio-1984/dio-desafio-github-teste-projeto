function validar(arr, num) {
   try {
       if (!arr && !num) throw new ReferenceError('Os parâmetros devem ser enviados para a função'); 
    if (typeof arr !== 'object' ) throw new TypeError('Esse array não é do tipo object');
    if (typeof num !== 'number' ) throw new TypeError('Esse array precisa ser do tipo number');
    if(arr.length !== num) throw new RangeError('O tamanho do array é diferente do número enviado');  
     return arr

   } catch (e) {

    if (e instanceof ReferenceError) {
        console.log("Este erro é um referenceError! ");
        console.log(e.message);
      }else if(e instanceof TypeError) {
       console.log("Este erro é um typeError! ");
       console.log(e.message);
     }else if(e instanceof RangeError) {
       console.log("Este erro é um rangeError! ");
       console.log(e.message);
       
   }else{
       console.log("Erro desconhecido!: " + e);
   }
    
   }

}

console.log(validar([1, 2, 3, 4, 5, 6, 7], 7));
    
   





