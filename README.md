## Teste Todo Cartões

### Instruções

Para executar o projeto instale as dependencias com npm `yarn install`. Após a instalação rode `yarn start`, em outra aba do terminal rode o comando `yarn run server` para subir o server com os dados mockados. A aplicaçao sera executada em http://localhost:3000


### Como rodar os testes

Basta executar o comando `yarn test`


### Tecnologias e libs usadas

* React: React foi escolhido para manter a aplicação componentizada, diminuir a responsabilidade dos arquivos e ganhar performance com operações ao acessar o DOM. Como consequencia o código da aplicação fica menor e mais fácil para ser testado. Utilização do Redux nesse caso não foi necessaria, uma vez que a aplicação não precisa de compartilhamento de estado com componentes que não possuem uma ligação direta.

* json-server: É uma lib bem simples para mockar dados.

* Axios: Axios foi usado para fazer chamadas http com o server.

* Jest e enzyme: Duas libs para fazer testes de integração e unitários

* PropTypes: prop-types foi utilizado para tipar as propriedades recebidas pelos components.

* styled-components: Uma ótima alternativa para manter os styles da aplicação organizados.
