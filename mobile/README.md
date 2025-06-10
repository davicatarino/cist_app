# CIST Mobile

Aplicativo em React Native (Expo) para a Cl\u00ednica CIST.

## Como executar

```bash
cd mobile
npm install
npm start
```

O app inclui telas de cadastro/login, agendamento de consultas, envio de documentos e chat de suporte com IA (simulado).

## Com Docker

Execute com o Docker Compose presente na raiz do reposit\u00f3rio:

```bash
docker compose up
```

O cont\u00eainer utiliza o novo Expo CLI (executado com `npx expo`), portanto n\u00e3o \u00e9 necess\u00e1rio instalar `expo-cli` globalmente.

Se precisar atualizar depend\u00eancias:

```bash
docker compose build --no-cache
docker compose up
```
