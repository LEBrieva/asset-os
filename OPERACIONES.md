# Asset OS - Guía de Operaciones y Despliegue

## Tabla de Contenidos
1. [Ejecución Manual](#ejecución-manual)
2. [Resumen de Ejecución Diaria](#resumen-de-ejecución-diaria)
3. [Configuración de Despliegue en la Nube](#configuración-de-despliegue-en-la-nube)

---

## Ejecución Manual

### Prerequisitos
- Servidor corriendo en puerto 3000 (por defecto)
- Variables de entorno configuradas en `.env`
- Migraciones de base de datos aplicadas

### 1. Sincronización Manual de Bitget

Ejecutar una sincronización manual para Bitget:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET"]
  }'
```

**Respuesta:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "started"
}
```

**Verificar estado de sincronización:**
```bash
curl http://localhost:3000/admin/sync/status/cm5abcd1234567890
```

**Variables de Entorno Requeridas:**
- `BITGET_API_KEY` - Tu API key de Bitget
- `BITGET_SECRET_KEY` - Tu secret key de Bitget
- `BITGET_PASSPHRASE` - Tu passphrase de API de Bitget

---

### 2. Sincronización Manual de SimpleFX

Ejecutar una sincronización manual para SimpleFX:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["SIMPLEFX"]
  }'
```

**Respuesta:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "started"
}
```

**Variables de Entorno Requeridas:**
- `SIMPLEFX_API_KEY` - Tu identificador de API key de SimpleFX (ej: `6afcf24b2fee4083b51e45e5a3dbxxxx`)
- `SIMPLEFX_API_SECRET` - Tu secret key de API de SimpleFX

**Notas:**
- SimpleFX usa autenticación estilo OAuth con Bearer tokens
- Los tokens se cachean por 50 minutos para minimizar llamadas a la API
- Solo se sincronizan cuentas LIVE (las cuentas DEMO se filtran)

---

### 3. Carga de CSV de Nexo

Subir una exportación CSV de Nexo para crear un snapshot:

```bash
curl -X POST http://localhost:3000/admin/nexo/upload \
  -F "file=@/ruta/a/nexo-export.csv" \
  -F "snapshotDate=2024-01-15"
```

**Sin fecha de snapshot específica (usa hoy):**
```bash
curl -X POST http://localhost:3000/admin/nexo/upload \
  -F "file=@/ruta/a/nexo-export.csv"
```

**Respuesta:**
```json
{
  "snapshotId": "cm5abcd1234567890",
  "status": "success",
  "assetsImported": 5
}
```

**Formato de CSV Esperado:**
- CSV de exportación de transacciones de Nexo
- Columnas: `Transaction`, `Type`, `Input Currency`, `Input Amount`, `Output Currency`, `Output Amount`, `USD Equivalent`, `Details`, `Date / Time`
- Los balances se calculan del historial de transacciones (salidas - entradas)

**Notas:**
- No se necesitan credenciales de API para Nexo (basado en CSV)
- El CSV se puede exportar desde la interfaz web de Nexo
- Solo se importan balances positivos

---

### 4. Sincronización Multi-Proveedor

Sincronizar múltiples proveedores a la vez:

```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET", "SIMPLEFX"]
  }'
```

**Sincronizar todos los proveedores (por defecto):**
```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Sincronizar para fecha específica:**
```bash
curl -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{
    "providers": ["BITGET", "SIMPLEFX"],
    "snapshotDate": "2024-01-15"
  }'
```

---

## Resumen de Ejecución Diaria

### Cómo Funciona

El sistema está diseñado para crear snapshots diarios de los balances de tus activos en todos los proveedores:

1. **Creación de Snapshot**: Se crea un nuevo snapshot para cada día (uno por fecha)
2. **Sincronización de Proveedores**: Cada proveedor se sincroniza en paralelo usando `Promise.allSettled`
3. **Cálculo de Balances**: Se obtienen los balances de activos y se calculan los valores en USD
4. **Seguimiento de Estado**: Cada sincronización de proveedor se rastrea con estado (OK, ERROR, PARTIAL)

### Proveedores por Defecto

Por defecto, se sincronizan los siguientes proveedores:
- **Bitget** (basado en API)
- **SimpleFX** (basado en API)
- **Nexo** (requiere carga manual de CSV)

### Estados de Snapshot

- `CREATED` - Snapshot creado, aún no sincronizado
- `RUNNING` - Sincronización en progreso
- `COMPLETE` - Todos los proveedores sincronizados exitosamente
- `PARTIAL` - Algunos proveedores tuvieron éxito, otros fallaron
- `FAILED` - Todos los proveedores fallaron

### Ejecución Manual vs Automatizada

**Implementación Actual:**
- Ejecución manual vía endpoints de API (como se documenta arriba)
- No hay cron job automatizado configurado aún

**Para Automatización Diaria:**

Puedes configurar un cron job para activar sincronizaciones diarias:

```bash
# Agregar al crontab (crontab -e)
0 1 * * * curl -X POST http://localhost:3000/admin/sync/run -H "Content-Type: application/json" -d '{}'
```

Esto se ejecuta a la 1:00 AM diariamente.

**Alternativa: NestJS Scheduler**

Instalar el módulo de scheduler:
```bash
npm install @nestjs/schedule
```

Luego crear una tarea programada en tu código (aún no implementado).

---

## Configuración de Despliegue en la Nube

### Variables de Entorno

Crear un archivo `.env` con las siguientes variables:

```bash
# Base de Datos
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/asset_os?schema=public"

# API de Bitget
BITGET_API_KEY="tu_api_key_de_bitget"
BITGET_SECRET_KEY="tu_secret_key_de_bitget"
BITGET_PASSPHRASE="tu_passphrase_de_bitget"

# API de SimpleFX
SIMPLEFX_API_KEY="tu_identificador_de_api_key_de_simplefx"
SIMPLEFX_API_SECRET="tu_secret_de_simplefx"

# Aplicación
PORT=3000
NODE_ENV=production
```

### Configuración de Base de Datos (PostgreSQL)

**1. Instalar PostgreSQL:**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# Iniciar servicio
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

**2. Crear Base de Datos y Usuario:**
```bash
sudo -u postgres psql

CREATE DATABASE asset_os;
CREATE USER asset_os_user WITH ENCRYPTED PASSWORD 'tu_contraseña_segura';
GRANT ALL PRIVILEGES ON DATABASE asset_os TO asset_os_user;
\q
```

**3. Actualizar DATABASE_URL en .env:**
```bash
DATABASE_URL="postgresql://asset_os_user:tu_contraseña_segura@localhost:5432/asset_os?schema=public"
```

**4. Ejecutar Migraciones:**
```bash
npx prisma migrate deploy
npx prisma generate
```

### Despliegue de la Aplicación

**1. Instalar Dependencias:**
```bash
npm install
```

**2. Compilar Aplicación:**
```bash
npm run build
```

**3. Iniciar Aplicación:**
```bash
npm run start:prod
```

### Gestión de Procesos (PM2)

**Instalar PM2:**
```bash
npm install -g pm2
```

**Iniciar con PM2:**
```bash
pm2 start dist/src/main.js --name asset-os
pm2 save
pm2 startup
```

**Comandos de PM2:**
```bash
pm2 status          # Verificar estado
pm2 logs asset-os   # Ver logs
pm2 restart asset-os # Reiniciar
pm2 stop asset-os   # Detener
```

### Proxy Reverso (Nginx)

**1. Instalar Nginx:**
```bash
sudo apt install nginx
```

**2. Configurar Nginx:**
```bash
sudo nano /etc/nginx/sites-available/asset-os
```

**Configuración:**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**3. Habilitar Sitio:**
```bash
sudo ln -s /etc/nginx/sites-available/asset-os /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Configuración SSL/TLS (Let's Encrypt)

**1. Instalar Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx
```

**2. Obtener Certificado:**
```bash
sudo certbot --nginx -d tu-dominio.com
```

**3. Auto-renovación:**
```bash
sudo certbot renew --dry-run
```

### Configuración de Firewall

**Permitir HTTP, HTTPS y SSH:**
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Despliegue con Docker (Opcional)

**Dockerfile:**
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://asset_os_user:password@db:5432/asset_os
      - BITGET_API_KEY=${BITGET_API_KEY}
      - BITGET_SECRET_KEY=${BITGET_SECRET_KEY}
      - BITGET_PASSPHRASE=${BITGET_PASSPHRASE}
      - SIMPLEFX_API_KEY=${SIMPLEFX_API_KEY}
      - SIMPLEFX_API_SECRET=${SIMPLEFX_API_SECRET}
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=asset_os
      - POSTGRES_USER=asset_os_user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Iniciar con Docker:**
```bash
docker-compose up -d
```

### Notas Específicas por Proveedor de Nube

#### AWS EC2
- Usar t2.micro o t3.micro para cargas pequeñas
- Configurar security groups para permitir puertos 22, 80, 443
- Usar RDS para base de datos PostgreSQL (recomendado)
- Considerar usar Elastic IP para dirección IP estática

#### DigitalOcean
- Droplet de $6/mes (1GB RAM) es suficiente
- Usar base de datos PostgreSQL administrada ($15/mes)
- Habilitar backups automáticos

#### Google Cloud Platform
- Usar instancia e2-micro (elegible para nivel gratuito)
- Usar Cloud SQL para PostgreSQL
- Configurar reglas de firewall en VPC

#### Heroku
- Usar add-on Heroku Postgres
- Configurar variables de entorno en el dashboard de Heroku
- Usar Procfile: `web: npm run start:prod`

### Monitoreo y Logging

**Monitoreo con PM2:**
```bash
pm2 logs asset-os --lines 100
pm2 monit
```

**Rotación de Logs:**
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Estrategia de Backups

**Backups de Base de Datos:**
```bash
# Cron job de backup diario
0 2 * * * pg_dump -U asset_os_user asset_os > /backups/asset_os_$(date +\%Y\%m\%d).sql
```

**Limpieza automática (mantener últimos 30 días):**
```bash
find /backups -name "asset_os_*.sql" -mtime +30 -delete
```

### Checklist de Seguridad

- [ ] Cambiar contraseña por defecto de PostgreSQL
- [ ] Usar contraseñas fuertes para todas las credenciales
- [ ] Habilitar firewall (ufw)
- [ ] Configurar certificados SSL/TLS
- [ ] Restringir acceso a base de datos solo a localhost
- [ ] Usar variables de entorno para secretos (nunca commitear .env)
- [ ] Habilitar actualizaciones automáticas de seguridad
- [ ] Configurar monitoreo y alertas
- [ ] Verificación regular de backups
- [ ] Rate limiting de API (considerar implementar)

### Solución de Problemas

**Verificar Logs de la Aplicación:**
```bash
pm2 logs asset-os
```

**Verificar Conexión a Base de Datos:**
```bash
npx prisma studio
```

**Probar Endpoints de API:**
```bash
curl http://localhost:3000/admin/sync/status/snapshot_id
```

**Reiniciar Servicios:**
```bash
pm2 restart asset-os
sudo systemctl restart postgresql
sudo systemctl restart nginx
```

---

## Soporte

Para problemas o preguntas, verifica los logs de la aplicación y asegúrate de que todas las variables de entorno están configuradas correctamente.
