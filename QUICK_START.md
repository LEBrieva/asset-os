# AssetOS - Guía de Inicio Rápido

## ✅ Proyecto MVP1 Completo

El proyecto base está listo con:
- ✅ Base de datos Postgres + Redis (Docker)
- ✅ Integración Bitget (read-only)
- ✅ Snapshots automáticos diarios
- ✅ Pricing con CoinGecko
- ✅ API REST completa
- ✅ WhatsApp + IA con OpenAI
- ✅ Cron jobs configurados

---

## 🚀 Pasos para arrancar

### 1. Configurar credenciales

Abrí el archivo `.env` y completá tus keys:

```bash
# Bitget (obligatorio para MVP1)
BITGET_API_KEY=tu_key_aqui
BITGET_API_SECRET=tu_secret_aqui
BITGET_API_PASSPHRASE=tu_passphrase_aqui

# OpenAI (obligatorio para IA)
OPENAI_API_KEY=sk-...tu_key_aqui

# WhatsApp Business API (Meta)
WHATSAPP_TOKEN=tu_token_de_meta_aqui
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id_aqui
WHATSAPP_VERIFY_TOKEN=tu_verify_token_aqui
WHATSAPP_BUSINESS_ACCOUNT_ID=tu_waba_id_aqui
```

**Importante:**
- Las keys de Bitget deben ser **read-only** (sin permisos de trading/withdraw)
- Para configurar WhatsApp, seguí la guía completa en `src/whatsapp/CONFIG_META.md`

### 2. Iniciar servicios

```bash
# Ya corriste esto, pero por si necesitás reiniciar:
docker-compose up -d

# Verificar que estén OK
docker-compose ps
```

### 3. Levantar la aplicación

```bash
npm run start:dev
```

**Nota sobre WhatsApp:** Esta integración usa Meta WhatsApp Business API (no QR code). Seguí la guía en `src/whatsapp/CONFIG_META.md` para configurar el webhook y obtener tus credenciales.

---

## 📱 Probar que funcione

### Opción A: API REST (más fácil para testear)

```bash
# 1. Correr un sync manual (trae tus balances de Bitget)
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{"providers": ["BITGET"]}'

# Respuesta:
# {"snapshotId": "abc-123", "status": "started"}

# 2. Ver el resumen de tu portfolio
curl http://localhost:3000/portfolio/summary

# 3. Ver allocation por asset
curl http://localhost:3000/portfolio/allocation?groupBy=asset
```

### Opción B: WhatsApp

Una vez configurado WhatsApp (ver `src/whatsapp/CONFIG_META.md`), enviá un mensaje:

```
/total
```

Deberías recibir un resumen de tu portfolio.

**Otros comandos:**
- `/status` - Estado del sistema
- `/alloc` - Allocation por asset
- `/change` - Cambios del portfolio
- `/history BTC` - Historial de Bitcoin
- `/help` - Lista completa con ejemplos

**Preguntas en lenguaje natural (en español):**
- "¿Cuánto vale mi portfolio?"
- "¿Cuántos XRP tengo?"
- "¿Mi portfolio subió o bajó?"
- "¿Compré o vendí BTC?"

---

## 🔍 Verificar que todo esté funcionando

### Ver la base de datos

```bash
npx prisma studio
```

Abrirá una UI en `http://localhost:5555` donde podés ver:
- `snapshots` - Los snapshots diarios
- `account_balances` - Tus balances por asset
- `accounts` - Tu cuenta de Bitget
- `prices_daily` - Precios de CoinGecko

### Ver logs

```bash
# En la terminal donde corre npm run start:dev
# Deberías ver logs como:
# [SnapshotsService] Starting sync...
# [BitgetService] Fetching balances from Bitget...
# [PricingService] Cached price for BTC: $45000
```

---

## 🎯 Siguientes pasos (aprendizaje)

Ahora que funciona el MVP1, podés:

### 1. Entender la arquitectura

```
src/
├── prisma/              # Cliente de DB (global module)
├── integrations/
│   └── bitget/          # Integración con Bitget API
├── snapshots/           # Core: crea snapshots + sync
├── pricing/             # Precios de CoinGecko
├── portfolio/           # Queries del portfolio
├── whatsapp/            # WhatsApp + comandos + IA
├── scheduler/           # Cron jobs (daily snapshot)
└── admin/               # Endpoints de admin
```

**Flow principal:**
1. **SchedulerService** (7 AM diario) llama a `SnapshotsService.runSync()`
2. **SnapshotsService** crea un snapshot y llama a `BitgetService.getBalances()`
3. Guarda los balances en `account_balances`
4. **PricingService** calcula valores USD usando CoinGecko
5. **PortfolioService** hace queries agregadas para dashboards

### 2. Explorar el código

**Archivos clave para estudiar:**

- `src/snapshots/snapshots.service.ts` - Lógica de sync (línea 44-80)
- `src/integrations/bitget/bitget.service.ts` - Cómo se conecta a Bitget (línea 33-70)
- `src/whatsapp/ai-orchestrator.service.ts` - IA con OpenAI function calling (línea 28-130)
- `prisma/schema.prisma` - Modelo de datos completo

**Conceptos NestJS que estás usando:**

- **Dependency Injection** - cada service se inyecta en el constructor
- **Modules** - cada feature tiene su módulo (IntegrationsModule, SnapshotsModule, etc.)
- **Decorators** - `@Injectable()`, `@Controller()`, `@Cron()`, etc.
- **Global modules** - PrismaModule es global (se usa en todos lados)

### 3. Próximas features (MVP2)

Cuando estés listo:

**SimpleFX Integration:**
```typescript
// En src/integrations/simplefx/
// Similar a BitgetService pero con API de SimpleFX
```

**Import CSV de Nexo:**
```typescript
// POST /imports/nexo/csv
// Procesa un CSV y lo guarda como snapshot
```

**Alerts:**
```typescript
// Reglas como "si stable < 30%, enviar WhatsApp"
// Cron que las chequea cada hora
```

---

## 🐛 Troubleshooting

### "No balances en /portfolio/summary"

```bash
# Verificá que hayas corrido un sync:
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{"providers": ["BITGET"]}'

# Esperá 10-30 segundos y probá de nuevo
```

### "Bitget API error"

1. Verificá las keys en `.env`
2. Verificá que la IP esté whitelisted en Bitget
3. Verificá que las keys tengan permisos de lectura

### "WhatsApp no responde"

```bash
# Verificá que el webhook esté configurado en Meta
# Verificá que el token de acceso sea válido
# Revisá los logs del servidor para ver si llegan mensajes

# Consultá la guía completa:
# src/whatsapp/CONFIG_META.md
```

### "Precio no encontrado para [ASSET]"

Agregá el asset al mapping en `src/pricing/pricing.service.ts`:

```typescript
const ASSET_TO_COINGECKO_ID: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  TU_ASSET: 'coingecko-id-aqui',  // <-- Agregá acá
  // ...
};
```

Buscá el ID en https://www.coingecko.com/

---

## 💡 Tips

**Hot reload**: El proyecto está en modo dev, los cambios se recargan automáticamente.

**Ver requests HTTP**:
```bash
# En otra terminal:
docker-compose logs -f
```

**Ejecutar sync manualmente** (útil para testing):
```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{"providers": ["BITGET"], "snapshotDate": "2026-01-03"}'
```

**Cambiar hora del cron** (en `src/scheduler/scheduler.service.ts`):
```typescript
@Cron('0 7 * * *', {  // <- Cambiá la hora acá (formato cron)
  name: 'daily-snapshot',
  timeZone: 'America/Sao_Paulo',
})
```

---

## 📚 Recursos

- **NestJS Docs**: https://docs.nestjs.com/
- **Prisma Docs**: https://www.prisma.io/docs
- **Bitget API**: https://www.bitget.com/api-doc/
- **OpenAI Function Calling**: https://platform.openai.com/docs/guides/function-calling
- **Meta WhatsApp Business API**: https://developers.facebook.com/docs/whatsapp/cloud-api/

---

**¿Preguntas?** Andá explorando el código, modificá cosas, rompé y arreglá. Así se aprende mejor! 🚀
