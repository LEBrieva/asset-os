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

# WhatsApp - números autorizados (separados por coma)
WHATSAPP_AUTHORIZED_NUMBERS=+5491112345678
```

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

La primera vez que arranques, verás un QR code en la consola. Escanealo con WhatsApp para vincular tu número.

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

Una vez vinculado WhatsApp, podés enviar estos comandos:

- `/total` - Resumen del portfolio
- `/status` - Estado del sistema
- `/alloc` - Allocation por asset
- `/alloc provider` - Allocation por provider
- `/help` - Ayuda

### Queries con IA (Natural Language)

También podés hacer preguntas en lenguaje natural:

- "¿Cuánto tengo en total?"
- "¿Cuál es mi top 5 activos?"
- "Mostrame la allocation por provider"
- "¿Cómo cambió mi portfolio desde ayer?"

La IA usa OpenAI GPT-4 con function calling para consultar tu DB real (sin alucinaciones).

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

### WhatsApp no conecta
1. Asegurate que el QR se muestre en consola
2. Escanea el QR rápido (expira en ~60 seg)
3. Si falla, borrá la carpeta `whatsapp-session/` y reiniciá

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
- **WhatsApp**: Baileys (WhatsApp Web protocol)
- **IA**: OpenAI GPT-4 con function calling
- **Pricing**: CoinGecko API (free tier)
- **Scheduler**: @nestjs/schedule (cron)

## License

MIT
