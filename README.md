# AssetOS 2026

Sistema de consolidación y tracking de activos crypto/forex con integración de WhatsApp e IA.

## Características (MVP1)

- ✅ Integración read-only con Bitget (balances)
- ✅ Snapshots diarios automáticos (cron 7 AM)
- ✅ Pricing automático (CoinGecko)
- ✅ Base de datos Postgres con auditoría completa
- ✅ API REST para queries de portfolio
- ✅ WhatsApp con comandos y IA (OpenAI)
- ✅ Arquitectura modular NestJS

## Arquitectura

```
src/
├── prisma/              # Database client
├── integrations/        # Bitget, SimpleFX, Nexo
├── snapshots/           # Core sync logic
├── pricing/             # CoinGecko pricing
├── portfolio/           # Query API
├── whatsapp/            # WhatsApp + AI
├── scheduler/           # Cron jobs
└── admin/               # Admin endpoints
```

## Setup Inicial

### 1. Configurar .env

Edita el archivo `.env` y completa tus credenciales:

```bash
# Bitget API (read-only)
BITGET_API_KEY=tu_api_key_aqui
BITGET_API_SECRET=tu_api_secret_aqui
BITGET_API_PASSPHRASE=tu_passphrase_aqui

# OpenAI
OPENAI_API_KEY=tu_openai_api_key_aqui

# WhatsApp Business API (Meta)
WHATSAPP_TOKEN=tu_token_de_meta_aqui
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id_aqui
WHATSAPP_VERIFY_TOKEN=tu_verify_token_aqui
WHATSAPP_BUSINESS_ACCOUNT_ID=tu_waba_id_aqui
```

**Nota:** Para configurar WhatsApp, consulta la guía completa en `src/whatsapp/CONFIG_META.md`

### 2. Levantar servicios

```bash
# Levantar Postgres y Redis
docker-compose up -d

# Verificar que estén corriendo
docker-compose ps
```

### 3. Instalar dependencias y compilar

```bash
npm install
npm run build
```

### 4. Iniciar la aplicación

```bash
npm run start:dev
```

**Nota:** Para usar WhatsApp, primero debes configurar la integración con Meta Business API. Ver `src/whatsapp/CONFIG_META.md` para instrucciones detalladas.

## Uso

### API REST Endpoints

#### Portfolio Summary
```bash
GET http://localhost:3000/portfolio/summary
GET http://localhost:3000/portfolio/summary?date=2026-01-03
```

Respuesta:
```json
{
  "date": "2026-01-03",
  "totalUsd": 12345.67,
  "byProvider": [
    {"provider": "BITGET", "usd": 12345.67}
  ],
  "changeVsYesterdayUsd": -120.55,
  "changeVsYesterdayPct": -0.0097,
  "snapshotStatus": "COMPLETE"
}
```

#### Allocation
```bash
GET http://localhost:3000/portfolio/allocation?groupBy=asset
GET http://localhost:3000/portfolio/allocation?groupBy=provider
```

#### Admin - Manual Sync
```bash
POST http://localhost:3000/admin/sync/run
Content-Type: application/json

{
  "providers": ["BITGET"],
  "snapshotDate": "2026-01-03"
}
```

Respuesta:
```json
{
  "snapshotId": "uuid-here",
  "status": "started"
}
```

#### Admin - Sync Status
```bash
GET http://localhost:3000/admin/sync/status/:snapshotId
```

### Comandos WhatsApp

Una vez configurado WhatsApp (ver `src/whatsapp/CONFIG_META.md`), podés enviar estos comandos:

- `/total` - Resumen del portfolio
- `/status` - Estado del sistema
- `/alloc` - Allocation por asset
- `/alloc provider` - Allocation por provider
- `/change` - Cambios del portfolio (ayer vs hoy)
- `/history <ASSET>` - Historial de un activo (ej: `/history BTC`)
- `/help` - Ayuda completa con ejemplos

### Queries con IA (Lenguaje Natural)

También podés hacer preguntas en español usando lenguaje natural:

- "¿Cuánto vale mi portfolio?"
- "¿Cuántos XRP tengo?"
- "¿Mi portfolio subió o bajó?"
- "¿Compré o vendí BTC?"

La IA usa OpenAI GPT-4o-mini con function calling para consultar tu DB real (sin alucinaciones). Está configurada para responder **solo** a consultas sobre tu portfolio personal.

## Snapshots Automáticos

El sistema ejecuta un snapshot diario a las **7:00 AM (America/Sao_Paulo)** que:

1. Crea un snapshot para el día
2. Consulta balances de Bitget
3. Calcula valores USD usando CoinGecko
4. Guarda todo en la DB
5. Actualiza el status (COMPLETE/PARTIAL/FAILED)

## Seguridad

- ✅ API keys read-only (sin permisos de withdraw)
- ✅ WhatsApp con lista blanca de números autorizados
- ✅ Secrets en `.env` (no commitear al repo)
- ✅ Auditoría completa en tabla `raw_events`

## Próximos Pasos (MVP2)

- [ ] SimpleFX integration (balances + positions)
- [ ] Import CSV de Nexo
- [ ] Endpoint /portfolio/timeseries
- [ ] Alerts con reglas personalizables
- [ ] Morning brief diario por WhatsApp

## Troubleshooting

### WhatsApp no responde
1. Verificá que el webhook esté configurado correctamente en Meta
2. Verificá que el token de acceso sea válido (no haya expirado)
3. Verificá los logs del servidor para ver si llegan los mensajes
4. Consultá la guía completa en `src/whatsapp/CONFIG_META.md`

### Error de Bitget API
1. Verificá que las keys sean correctas en `.env`
2. Verificá que la IP esté whitelisted en Bitget
3. Verificá que las keys tengan permisos de lectura de spot wallet

### Precio no se encuentra
1. Agregá el asset al mapping en `src/pricing/pricing.service.ts`
2. O esperá a que se agregue soporte de más assets

## Estructura de la DB

Ver el schema completo en `prisma/schema.prisma`

Tablas principales:
- `accounts` - Cuentas por provider
- `snapshots` - Snapshots diarios
- `account_balances` - Balances por snapshot
- `provider_sync_runs` - Estado de cada sync
- `prices_daily` - Precios diarios en USD
- `raw_events` - Auditoría completa

## Comandos Útiles

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Prisma
npx prisma studio              # Ver DB en UI
npx prisma migrate dev         # Crear migración
npx prisma generate            # Regenerar cliente

# Docker
docker-compose up -d           # Levantar servicios
docker-compose down            # Bajar servicios
docker-compose logs -f         # Ver logs
```

## Tech Stack

- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL 16
- **ORM**: Prisma 7
- **Cache**: Redis 7
- **WhatsApp**: Meta WhatsApp Business API (webhook-based)
- **IA**: OpenAI GPT-4o-mini con function calling
- **Pricing**: CoinGecko API (free tier)
- **Scheduler**: @nestjs/schedule (cron)

## License

MIT
