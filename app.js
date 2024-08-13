let chute;
let tentativas = 1;
let valorMaximo = 101;
let valorMinimo = 1;
let numeroSecreto = parseInt(Math.random() * (valorMaximo - valorMinimo) + valorMinimo);

alert('Boas vindas ao jogo do número secreto');
console.log(`Número secreto: ${numeroSecreto}`);

//Enquanto o chute não for igual ao número certo...

while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre ${valorMinimo} e ${valorMaximo - valorMinimo}`);
   console.log(`chute: ${chute}`);
   if (chute == numeroSecreto) {
      break;
   } else {
      if (chute > numeroSecreto) {
         alert(`O número secreto é menor que ${chute}`);
      } else {
         alert(`O número secreto é maior que ${chute}`);
      }
      tentativas++;
      console.log(`tentativa: ${tentativas}ª`);
   }
}
let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
/*if (tentativas == 1) {
   alert (`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
} else {
   alert (`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);      
}*/
console.log('acertou');