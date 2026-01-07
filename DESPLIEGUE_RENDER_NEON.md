# Guía de Despliegue: Render + Neon

Esta guía te llevará paso a paso para desplegar Asset OS en Render (backend) con Neon (PostgreSQL).

## Índice
1. [Preparar el Repositorio](#1-preparar-el-repositorio)
2. [Configurar Base de Datos en Neon](#2-configurar-base-de-datos-en-neon)
3. [Configurar Backend en Render](#3-configurar-backend-en-render)
4. [Verificar Despliegue](#4-verificar-despliegue)
5. [Solución de Problemas](#5-solución-de-problemas)

---

## 1. Preparar el Repositorio

### 1.1 Crear .gitignore

Asegúrate de tener un `.gitignore` con:

```
node_modules/
dist/
.env
.env.local
.env.production
*.log
npm-debug.log*
.DS_Store
```

### 1.2 Crear archivo de inicio para Render

Crea un archivo `render-build.sh` en la raíz del proyecto:

```bash
#!/bin/bash
# Build script for Render

echo "Installing dependencies..."
npm install

echo "Generating Prisma Client..."
npx prisma generate

echo "Building application..."
npm run build

echo "Build complete!"
```

Dale permisos de ejecución:
```bash
chmod +x render-build.sh
```

### 1.3 Verificar package.json

Asegúrate de que tu `package.json` tenga estos scripts:

```json
{
  "scripts": {
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:prod": "node dist/src/main.js"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### 1.4 Modificar main.ts para puerto dinámico

Verifica que `src/main.ts` use puerto dinámico:

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Puerto dinámico para Render
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
```

### 1.5 Subir a GitHub

```bash
# Inicializar Git (si no lo hiciste)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit for Render deployment"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TU_USUARIO/asset-os.git
git branch -M main
git push -u origin main
```

---

## 2. Configurar Base de Datos en Neon

### 2.1 Crear cuenta en Neon

1. Ve a [https://neon.tech](https://neon.tech)
2. Regístrate con tu cuenta de GitHub (recomendado)
3. Verifica tu email

### 2.2 Crear proyecto

1. Click en "Create a project"
   1. Nombre del proyecto: `asset-os` (o el que prefieras)
2. Región: Elige la más cercana (ej: `US East (Ohio)` o `EU (Frankfurt)`)
3. PostgreSQL version: `15` (recomendado)
4. Click en "Create project"

### 2.3 Obtener Connection String

Después de crear el proyecto, verás la connection string:

```
postgresql://usuario:password@ep-xxx-xxx.region.neon.tech/neondb?sslmode=require
```

**IMPORTANTE**: Copia esta URL completa, la necesitarás para Render.

### 2.4 Formato para Prisma

Neon te da la URL en este formato:
```
postgresql://usuario:password@ep-xxx-xxx.region.neon.tech/neondb?sslmode=require
```

Para Prisma, agrega `?schema=public` al final (o reemplaza `sslmode=require`):
```
postgresql://usuario:password@ep-xxx-xxx.region.neon.tech/neondb?schema=public&sslmode=require
```

---

## 3. Configurar Backend en Render

### 3.1 Crear cuenta en Render

1. Ve a [https://render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub (recomendado)

### 3.2 Crear Web Service

1. Click en "New +" → "Web Service"
2. Conecta tu repositorio de GitHub
3. Autoriza Render a acceder a tu repositorio
4. Selecciona el repositorio `asset-os`

### 3.3 Configurar el servicio

**Name**: `asset-os` (o el que prefieras)

**Region**: Elige la misma región que Neon para menor latencia

**Branch**: `main`

**Root Directory**: (dejar vacío)

**Runtime**: `Node`

**Build Command**:
```bash
./render-build.sh
```

**Start Command**:
```bash
npm run start:prod
```

**Instance Type**: `Free` (para empezar)

### 3.4 Configurar Variables de Entorno

En la sección "Environment Variables", agrega:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `DATABASE_URL` | `postgresql://usuario:password@ep-xxx-xxx.region.neon.tech/neondb?schema=public&sslmode=require` |
| `BITGET_API_KEY` | tu_api_key_de_bitget |
| `BITGET_API_SECRET` | tu_api_secret_de_bitget |
| `BITGET_API_PASSPHRASE` | tu_passphrase_de_bitget |
| `SIMPLEFX_API_KEY` | tu_api_key_de_simplefx |
| `SIMPLEFX_API_SECRET` | tu_secret_de_simplefx |
| `OPENAI_API_KEY` | tu_openai_api_key |
| `WHATSAPP_TOKEN` | tu_token_de_meta |
| `WHATSAPP_PHONE_NUMBER_ID` | tu_phone_number_id |
| `WHATSAPP_VERIFY_TOKEN` | tu_verify_token |
| `WHATSAPP_BUSINESS_ACCOUNT_ID` | tu_waba_id |

**IMPORTANTE**: Reemplaza los valores con tus credenciales reales. Para configurar WhatsApp, consulta `src/whatsapp/CONFIG_META.md`.

### 3.5 Agregar variable para migraciones

Agrega una más:

| Key | Value |
|-----|-------|
| `DATABASE_URL_NON_POOLING` | (la misma URL de arriba) |

### 3.6 Desplegar

1. Click en "Create Web Service"
2. Render comenzará a desplegar automáticamente
3. Verás los logs en tiempo real

### 3.7 Ejecutar migraciones

Una vez que el servicio esté desplegado:

1. Ve a la pestaña "Shell" en Render
2. Ejecuta:
```bash
npx prisma migrate deploy
```

**Alternativa**: Agregar comando de migración al build script.

Modifica `render-build.sh`:
```bash
#!/bin/bash
echo "Installing dependencies..."
npm install

echo "Generating Prisma Client..."
npx prisma generate

echo "Running migrations..."
npx prisma migrate deploy

echo "Building application..."
npm run build

echo "Build complete!"
```

---

## 4. Verificar Despliegue

### 4.1 Obtener URL

Una vez desplegado, Render te dará una URL como:
```
https://asset-os.onrender.com
```

### 4.2 Probar endpoints

**Test de sync:**
```bash
curl -X POST https://asset-os.onrender.com/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Verificar estado:**
```bash
curl https://asset-os.onrender.com/admin/sync/status/SNAPSHOT_ID
```

**Upload CSV de Nexo:**
```bash
curl -X POST https://asset-os.onrender.com/admin/nexo/upload \
  -F "file=@/ruta/a/nexo-export.csv"
```

### 4.3 Ver logs

En Render:
1. Ve a tu servicio
2. Click en "Logs"
3. Verás todos los logs en tiempo real

---

## 5. Solución de Problemas

### Problema: Build falla en Prisma

**Error**: `Cannot find module '@prisma/client'`

**Solución**: Asegúrate de que el build script ejecute `npx prisma generate`

### Problema: Migraciones no se aplican

**Error**: Tablas no existen

**Solución**:
1. Ve a Shell en Render
2. Ejecuta: `npx prisma migrate deploy`

### Problema: Variables de entorno no se cargan

**Error**: `BITGET_API_KEY is not defined`

**Solución**:
1. Verifica que las variables estén en Environment Variables de Render
2. Redeploy el servicio (Settings → Manual Deploy)

### Problema: Timeout en peticiones

**Error**: Request timeout

**Solución**:
- El free tier de Render "duerme" después de 15 minutos de inactividad
- La primera petición después de dormir toma ~30 segundos
- Considera upgrade a plan pago si necesitas uptime 24/7

### Problema: Database connection error

**Error**: `Can't reach database server`

**Solución**:
1. Verifica que el DATABASE_URL sea correcto
2. Asegúrate de incluir `?sslmode=require` al final
3. Verifica que Neon esté activo (free tier no duerme)

### Problema: CORS errors (para futuro frontend)

**Solución**: Agrega CORS en `main.ts`:

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://tu-frontend.com'],
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
```

---

## 6. Configuración de Auto-Deploy

### 6.1 Deploy automático desde GitHub

Render detecta automáticamente cambios en tu rama `main`:

1. Haces cambios en local
2. `git add .`
3. `git commit -m "Descripción del cambio"`
4. `git push origin main`
5. Render automáticamente redeploya

### 6.2 Preview Deploys (opcional)

Para probar cambios antes de merge:

1. Ve a Settings en Render
2. Habilita "Pull Request Previews"
3. Cada PR creará un deploy temporal

---

## 7. Monitoreo y Mantenimiento

### 7.1 Ver métricas en Render

- CPU usage
- Memory usage
- Request count
- Response times

### 7.2 Backups en Neon

Neon hace backups automáticos:
- Free tier: 7 días de historia
- Paid tier: 30 días de historia

### 7.3 Configurar alertas

En Render Settings → Notifications:
- Deploy success/failure
- Service down alerts

---

## 8. Costos

### Neon (Free Tier)
- 0.5 GB storage
- Compute: 191.9 compute hours/mes
- **Suficiente para este proyecto**

### Render (Free Tier)
- 750 horas/mes (suficiente para un servicio)
- 0.1 CPU / 512 MB RAM
- Auto-sleep después de 15 min inactividad
- **Limitación**: Primera request después de sleep toma ~30s

### Cuándo hacer upgrade

**Render Starter ($7/mes)**:
- No auto-sleep
- Más recursos
- Recomendado si necesitas uptime 24/7

**Neon Launch ($19/mes)**:
- 10 GB storage
- Más compute hours
- Solo si creces mucho

---

## 9. Próximos Pasos

Una vez desplegado:

1. **Probar todas las integraciones**:
   - Bitget sync
   - SimpleFX sync
   - Nexo CSV upload

2. **Configurar cron job** (usar servicio como cron-job.org):
   ```
   0 1 * * * curl -X POST https://asset-os.onrender.com/admin/sync/run -H "Content-Type: application/json" -d '{}'
   ```

3. **Configurar WhatsApp**:
   - Ya tendrás URL pública para webhooks (ej: `https://asset-os.onrender.com/whatsapp/webhook`)
   - HTTPS automático (requerido por Meta Business API)
   - Consultá la guía completa en `src/whatsapp/CONFIG_META.md`
   - Configurá el webhook en Meta con tu URL de Render

---

## Checklist Final

- [ ] Código subido a GitHub
- [ ] Base de datos creada en Neon
- [ ] DATABASE_URL copiada
- [ ] Servicio creado en Render
- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Migraciones aplicadas
- [ ] Endpoints funcionando
- [ ] Sync de Bitget probado
- [ ] Sync de SimpleFX probado
- [ ] Upload CSV de Nexo probado

---

## Soporte

**Documentación oficial**:
- Render: https://render.com/docs
- Neon: https://neon.tech/docs
- NestJS: https://docs.nestjs.com

**Problemas comunes**: Ver sección [Solución de Problemas](#5-solución-de-problemas)
