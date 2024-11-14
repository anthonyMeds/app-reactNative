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