# CIST Mobile

Interface inspirada no site oficial da CIST com cores atualizadas e navega\u00e7\u00e3o por abas.

O aplicativo agora persiste o login com `AsyncStorage`, mantendo o acesso mesmo ap\u00f3s fechar o app. Os agendamentos realizados s\u00e3o salvos em cache para serem exibidos na tela inicial.




## Como executar localmente

```bash
cd mobile
npm install
npm start
```

**Atenção:** versões do Android 14 (API 34) apresentam erro ao iniciar o app
devido à permissão `DETECT_SCREEN_CAPTURE`. Utilize um emulador ou aparelho
com Android 13 ou anterior, ou atualize o Expo/React Native quando houver
correção oficial.


```bash
docker compose build --no-cache
docker compose up
```
