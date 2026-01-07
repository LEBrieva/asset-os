# Configuración de WhatsApp Business API con Meta

Esta guía explica cómo configurar WhatsApp Business API usando Meta for Developers para integrar el bot de portfolio con WhatsApp.

## Índice

1. [Configuración Inicial (Desarrollo/Testing)](#configuración-inicial-desarrollotesting)
2. [Token Permanente (Uso Personal)](#token-permanente-uso-personal)
3. [Variables de Entorno](#variables-de-entorno)
4. [Testing](#testing)

---

## Configuración Inicial (Desarrollo/Testing)

Esta es la configuración básica para empezar a desarrollar y probar el bot. El token dura 24 horas.

### Paso 1: Crear App en Meta for Developers

1. Ve a [Meta for Developers](https://developers.facebook.com/)
2. Click en **Mis aplicaciones** → **Crear aplicación**
3. Tipo de aplicación: **Empresa**
4. Información de la aplicación:
   - Nombre: `Asset OS Bot` (o el que prefieras)
   - Email de contacto: tu email
5. Click en **Crear aplicación**

### Paso 2: Agregar WhatsApp al Producto

1. En el dashboard de tu app, buscá **WhatsApp** en productos
2. Click en **Configurar** (Setup)
3. Meta te dará:
   - Un número de teléfono de prueba
   - Un token de acceso temporal (24 horas)
   - Un número de ID de teléfono (Phone Number ID)

### Paso 3: Configurar Webhook

El webhook es como Meta se comunica con tu app cuando llegan mensajes.

1. En la sección **Configuración** → **Webhook** de WhatsApp:

   **Para desarrollo local con ngrok:**
   ```bash
   # Instalar ngrok (si no lo tenés)
   brew install ngrok

   # Exponer tu puerto 3000
   ngrok http 3000
   ```

   Ngrok te dará una URL pública como: `https://abc123.ngrok-free.app`

2. Configurar webhook en Meta:
   - **URL de devolución de llamada:** `https://abc123.ngrok-free.app/whatsapp/webhook`
   - **Token de verificación:** Un string aleatorio que vos elegís (ej: `mi-token-secreto-123`)
   - Guardá este token para el `.env`

3. Click en **Verificar y guardar**

4. Suscripciones: Marcá **messages** para recibir mensajes

**Para producción (Render/Heroku/etc):**
- **URL de devolución de llamada:** `https://tu-dominio.onrender.com/whatsapp/webhook`
- **Token de verificación:** El mismo que configuraste

### Paso 4: Agregar Número de Prueba

1. En **WhatsApp** → **Primeros pasos** → **Agregar número de teléfono**
2. Agregá tu número personal (el que vas a usar para testear)
3. Vas a recibir un código de verificación por WhatsApp
4. Ingresá el código
5. Tu número ahora está autorizado para recibir mensajes del bot (válido 24 horas)

### Paso 5: Copiar Credenciales

En la sección **WhatsApp** → **Primeros pasos**, copiá:

1. **Token de acceso temporal** (dura 24 horas)
2. **Phone Number ID** (abajo del token)
3. **WhatsApp Business Account ID** (WABA ID)

### Paso 6: Configurar .env

Agregá estas variables a tu `.env`:

```bash
# Meta WhatsApp Business API
WHATSAPP_TOKEN=tu_token_temporal_aqui
WHATSAPP_PHONE_NUMBER_ID=tu_phone_number_id_aqui
WHATSAPP_VERIFY_TOKEN=mi-token-secreto-123  # El que elegiste en el paso 3
WHATSAPP_BUSINESS_ACCOUNT_ID=tu_waba_id_aqui

# OpenAI para IA (obligatorio)
OPENAI_API_KEY=tu_openai_key_aqui
```

### Paso 7: Probar

1. Iniciá tu servidor:
   ```bash
   npm run start:dev
   ```

2. Enviá un mensaje desde tu WhatsApp al número de prueba que te dio Meta:
   ```
   /help
   ```

3. Deberías recibir una respuesta con los comandos disponibles

---

## Token Permanente (Uso Personal)

Para uso personal, podés generar un **System User Token** que dura 60 días o nunca expira (evitando renovar cada 24 horas).

### ¿Cuándo usar esto?

- ✅ **Uso personal** (vos solo usando el bot)
- ✅ **Bot de larga duración** (no querés renovar token cada día)
- ❌ **Uso comercial a gran escala** (ahí necesitás verificación de negocio)

### Paso 1: Crear System User

1. Ve a [Meta Business Suite](https://business.facebook.com/)
2. Click en **Configuración de negocio** (⚙️)
3. En el menú lateral: **Usuarios** → **Usuarios del sistema**
4. Click en **Agregar** (crear nuevo usuario del sistema)
5. Configuración:
   - **Nombre:** Usá un nombre sin espacios ni caracteres especiales
     - ✅ Válido: `whatsapp-bot-token`, `assetosbot`, `portfolio-bot`
     - ❌ Inválido: `WhatsApp Bot Token`, `bot token`
   - **Rol:** **Admin**
6. Click en **Crear usuario del sistema**

### Paso 2: Asignar App al System User

1. En la lista de usuarios del sistema, buscá el que acabás de crear
2. Click en **Agregar activos** (Add Assets)
3. Seleccioná **Apps**
4. Buscá tu app de WhatsApp (`Asset OS Bot` o como la hayas nombrado)
5. Marcá **Control total** (Full control)
6. Click en **Guardar cambios**

### Paso 3: Generar Token Permanente

1. En el mismo usuario del sistema, click en **Generar nuevo token**
2. Configuración del token:
   - **App:** Seleccioná tu app de WhatsApp
   - **Permisos** (marcá estos dos):
     - ☑️ `whatsapp_business_messaging`
     - ☑️ `whatsapp_business_management`
   - **Caducidad del token:**
     - Si aparece **Nunca expira** → **Elegí esta opción** ✅
     - Si no aparece: Elegí **60 días** (tendrás que renovar manualmente cada 2 meses)
3. Click en **Generar token**
4. **⚠️ IMPORTANTE:** Copiá el token inmediatamente. No vas a poder verlo de nuevo.

### Paso 4: Actualizar .env y Render

**En tu `.env` local:**
```bash
WHATSAPP_TOKEN=tu_nuevo_token_permanente_aqui
```

**En Render (o tu plataforma de producción):**
1. Ve al dashboard de Render
2. Seleccioná tu servicio
3. Ve a **Environment**
4. Editá la variable `WHATSAPP_TOKEN`
5. Pegá el nuevo token permanente
6. Click en **Save Changes**
7. Render hará auto-redeploy (espera 2-3 minutos)

### Paso 5: Verificar que Funciona

Enviá un mensaje de prueba a tu número de WhatsApp:
```
/total
```

Si responde, ¡el token permanente está funcionando! 🎉

---

## Variables de Entorno

Archivo `.env` completo para WhatsApp:

```bash
# ==========================================
# WhatsApp Business API (Meta)
# ==========================================

# Token de acceso (temporal 24h o permanente)
WHATSAPP_TOKEN=EAAxxxxxxxxxxxxxxx

# Phone Number ID (lo encontrás en Meta for Developers)
WHATSAPP_PHONE_NUMBER_ID=123456789012345

# Token de verificación del webhook (elegís vos)
WHATSAPP_VERIFY_TOKEN=mi-token-secreto-123

# WhatsApp Business Account ID
WHATSAPP_BUSINESS_ACCOUNT_ID=123456789012345

# ==========================================
# OpenAI (para IA en lenguaje natural)
# ==========================================
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx
```

---

## Testing

### Test 1: Webhook Verification

Verificá que Meta pueda comunicarse con tu servidor:

```bash
# En tu terminal, deberías ver logs como:
[WhatsAppController] Webhook verified successfully
```

### Test 2: Comandos Rápidos

Probá los comandos slash desde WhatsApp:

```
/help
/total
/status
/alloc
/history BTC
```

### Test 3: Lenguaje Natural

Probá la IA con preguntas en español:

```
¿Cuánto vale mi portfolio?
¿Cuántos BTC tengo?
¿Mi portfolio subió o bajó?
```

### Test 4: Scope Limitado (debe rechazar)

El bot debe rechazar preguntas fuera del portfolio:

```
❌ ¿Qué temperatura hace?
❌ ¿Cómo invertir en Bitcoin?
❌ ¿Qué es Ethereum?
```

Respuesta esperada:
```
Esta pregunta está fuera de mi alcance.
Solo puedo ayudarte a consultar tu portfolio de criptomonedas.
Utiliza /help para ver los comandos disponibles.
```

---

## Troubleshooting

### Token expirado

**Error:** Mensajes no llegan o respuestas no se envían

**Solución:**
1. Verificá la fecha de expiración del token en Meta Business Suite
2. Genera un nuevo token (Paso 3 de Token Permanente)
3. Actualizá en Render y `.env`

### Webhook no verifica

**Error:** Meta dice que no puede verificar el webhook

**Solución:**
1. Verificá que tu servidor esté corriendo
2. Verificá que `WHATSAPP_VERIFY_TOKEN` en `.env` coincida con el de Meta
3. Si usás ngrok, asegurate que la URL esté actualizada en Meta

### Mensajes no llegan

**Error:** Envías mensajes pero el bot no responde

**Solución:**
1. Verificá que tu número esté agregado en Meta (Paso 4 de Config Inicial)
2. Para números de prueba, la autorización dura 24 horas
3. Verificá los logs del servidor para ver si llegó el webhook
4. Verificá que el token tenga los permisos correctos

### Error de permisos al generar token

**Error:** "No hay permisos disponibles"

**Solución:**
1. Asegurate de haber asignado la app al System User (Paso 2)
2. Verificá que el System User tenga rol Admin
3. Intentá borrar y crear de nuevo el System User

---

## Diferencias: Desarrollo vs Producción

| Aspecto | Desarrollo (24h token) | Producción (Token permanente) |
|---------|----------------------|------------------------------|
| **Token** | Temporal (24 horas) | Permanente (60 días o nunca expira) |
| **Renovación** | Manual cada 24h | Cada 60 días o nunca |
| **Números autorizados** | Solo números de prueba (24h) | Cualquier número puede escribir |
| **Webhook URL** | Ngrok (temporal) | Render/dominio fijo |
| **Ideal para** | Testing y desarrollo | Uso personal real |

---

## Recursos Adicionales

- [Meta WhatsApp Business API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/)
- [Getting Started with WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)
- [Webhooks para WhatsApp](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/)
- [System Users](https://www.facebook.com/business/help/327447814793034)

---

## Notas Importantes

⚠️ **Seguridad:**
- Nunca compartas tu `WHATSAPP_TOKEN` en repositorios públicos
- El `WHATSAPP_VERIFY_TOKEN` debe ser un string aleatorio fuerte
- Guardá el token permanente en un lugar seguro (no lo vas a poder ver de nuevo)

💡 **Límites de Meta:**
- Modo desarrollo: 1000 conversaciones/mes gratis
- Cada "conversación" es una ventana de 24 horas con un usuario
- Para uso personal, nunca vas a llegar a este límite

🔄 **Renovación:**
- Con "Nunca expira": No necesitás renovar
- Con "60 días": Poné un recordatorio en el calendario para renovar antes de que expire
