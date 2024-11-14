- após download do node

1. Instalar dependências

   ```bash
   npm install
   ```

2. Iniciar aplicativo

   ```bash
    npx expo start

   - Para executar no android: 
   - Escaneie com o aplicativo expo go o qr code gerado após iniciar a aplicação. 
   - Em caso de uso de emuladores como android emulator complemente com o comando `a`


3) Substituir o "localHost" do arquivo :
- \foodApp\config.js
- pelo endereço IPV4 informado por meio do comando CMD `ipconfig` para funcionamento adequado da api simulada db.json

4) Abra um novo cmd e execute o db.json para simular a chamada da api `npx json-server db.json`

## Tecnologias Utilizadas
* **TypeScript:** Para tipagem estática e segurança de código.
* **Tailwind CSS:** Para estilização rápida e consistente.
* **Expo:** Para desenvolvimento multiplataforma.
* **React Native:** Framework para desenvolvimento mobile.

### Funcionalidades
* **Carrinho de Compras:**
  * **Adicionar/remover itens:** Permite remover e adicionar dinamicamente produtos.
  * **Calcular o total:** Ajuste de acordo com quantidade e produto desejado.
* **Filtragem de itens pelo nome:**
  * **Filtro do json recebido:** Exibição apenas de ítens desejados.
* **Manipulação de estados:**
  * **UseStates e UseEffects**
* **Modais**
* **Detalhamento dinâmico de ítens**
