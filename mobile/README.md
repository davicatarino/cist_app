# CIST Mobile

Aplicativo em React Native (Expo) para a Cl\u00ednica CIST.

## Como executar

```bash
cd mobile
npm install
npm start
```

Em aparelhos com Android 14 (API 34) o app falha ao iniciar por exigir a
permissão privilegiada `DETECT_SCREEN_CAPTURE`. Utilize Android 13 ou
anterior, ou aguarde uma correção das dependências do Expo/React Native.

O app inclui telas de cadastro/login, agendamento de consultas, envio de documentos e chat de suporte com IA (simulado).

## Com Docker

Execute com o Docker Compose presente na raiz do reposit\u00f3rio:

```bash
docker compose up
```


Se precisar atualizar depend\u00eancias:

```bash
docker compose build --no-cache
docker compose up
```
