//O splice é usado para adicionar e remover elementos de uma lista, como mostra o seguinte código:

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)
//Analisando o código, selecione a alternativa que corresponde ao que teremos como saída do console do animaisDoAquario .

/*
1) [ '🐋', '🐠', '🐙', '🐟'] 
Alternativa correta! Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove
dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.

OU SEJA: O PRIMEIRO SPLICE VAI ADICIONAR O PRIMEIRO PEIXE NO ´QNDICE 1, QUE ANTES ERA O POLVO NO ÍNDICE 1. DEPOIS O SEGUNDO SPLICE VAI COMEÇAR A REMOVER
DOIS ELEMENTOS A PARTIR DO ÍNDICE DE NÚMERO 3 E DEPOIS ADICIONAR O SEGUNDO PEIXE NO LUGAR. O PARÂMETRO 3 DEFINE O ÍNDICE DE ONDE DEVE COMEÇAR A SER
REMOVIDO E O SEGUNDO, QUANTOS ELEMENTOS DEVEM SER REMOVIDOS.

2)[ '🐋', '🐙', '🐠', '🐟','🦈']
Esta saída não está correta, pois o elemento no índice 4 foi removido.
 
3) [ '🐠', '🐙', '🐬', '🦈' ]
Esta saída não está correta, pois nem todos os elementos correspondem aos índices.

4) [ '🐠', '🐋', '🐟', '🐙', '🐬', '🦈' ] 
Esta saída não está correta, pois nem todos os elementos correspondem aos índices.

*/
