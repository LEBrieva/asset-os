# Roadmap - Asset OS

Próximas features y mejoras planificadas para el sistema.

---

## 🎯 Prioridad Alta (Corto Plazo)

### 1. Comandos Nexo via WhatsApp

**Problema actual:**
- Para agregar balances de Nexo necesitas usar curl/Postman
- No es práctico para uso diario

**Solución:**
Agregar comandos de WhatsApp para manejar Nexo directamente desde el chat.

**Comandos propuestos:**
```
/nexo set BTC 0.5 ETH 2.3 USDT 7000
```

**Comportamiento:**
- Comando: `/nexo set <ASSET> <AMOUNT> [<ASSET2> <AMOUNT2> ...]`
- Reemplaza COMPLETAMENTE los balances de Nexo para el snapshot de HOY
- Si ya existe un snapshot de hoy, actualiza solo Nexo (deja Bitget/SimpleFX intactos)
- Si NO existe snapshot de hoy, crea uno nuevo con estos balances

**Ejemplo de uso:**
```
Usuario: /nexo set BTC 0.12345678 ETH 2.5 USDT 1000
Bot: ✅ Nexo actualizado para hoy (2026-01-07)

Activos importados:
• BTC: 0.12345678 ($5,234.50)
• ETH: 2.5 ($8,750.00)
• USDT: 1,000 ($1,000.00)

Total Nexo: $14,984.50

Usa /total para ver tu portfolio completo.
```

**Implementación:**
- Agregar handler en `commands.service.ts` para `/nexo`
- Parsear argumentos: `/nexo set BTC 0.5 ETH 2.3`
- Llamar a `snapshotsService.addNexoManualBalances()`
- Responder con resumen de lo agregado

**Archivos a modificar:**
- `src/whatsapp/commands.service.ts` (nuevo handler)
- `src/whatsapp/commands.service.ts` (actualizar /help)
- `COMANDOS.md` (documentar comando)

---

### 2. Morning Brief Diario

**Feature:**
Mensaje automático cada mañana con resumen del portfolio.

**Ejemplo:**
```
📊 Buenos días!

Portfolio al 7 de enero:
💰 Total: $15,234.50 (+2.3% vs ayer)

Top movers 24h:
✅ BTC: +$180.50 (+3.5%)
✅ ETH: +$95.30 (+1.1%)
❌ XRP: -$12.00 (-0.4%)

Usa /total para más detalles.
```

**Configuración:**
- Hora: 7:30 AM (configurable)
- Solo envía si hay datos del día (o del día anterior)
- Usa el cron scheduler existente

**Nota importante sobre WhatsApp:**
- Requiere que el usuario haya usado el bot en las últimas 24h
- Si no, el mensaje no se envía (limitación de Meta Business API)
- Para uso regular diario, esto no debería ser problema

**Implementación:**
- Agregar nuevo cron job en `scheduler.service.ts`
- Crear método `sendMorningBrief()` en `whatsapp.service.ts`
- Usar `portfolioService.getSummary()` y `portfolioService.getPortfolioChange()`

**Archivos a modificar:**
- `src/scheduler/scheduler.service.ts` (nuevo cron)
- `src/whatsapp/whatsapp.service.ts` (nuevo método)

---

### 3. Alertas de Cambios Grandes

**Feature:**
Notificación automática cuando el portfolio cambia más de X% en 24h.

**Ejemplo:**
```
⚠️ Alerta de Portfolio

Tu portfolio bajó -5.2% en las últimas 24h

Cambio: -$792.50
Anterior: $15,234.50
Actual: $14,442.00

Principales caídas:
• BTC: -$1,234.00 (-8.5%)
• ETH: -$324.00 (-3.2%)

Usa /change para ver detalles completos.
```

**Configuración:**
- Threshold por defecto: ±3% (configurable)
- Se chequea después de cada sync (o cada hora)
- Solo notifica una vez por día

**Nota importante sobre WhatsApp:**
- Requiere que el usuario haya usado el bot en las últimas 24h
- Ideal para uso diario activo del bot

**Implementación:**
- Agregar método `checkAndNotifyBigChanges()` en `portfolio.service.ts`
- Llamarlo después de cada sync o en cron hourly
- Tracking de "ya notificamos hoy" (Redis o DB)

**Variables de entorno:**
```bash
ALERT_THRESHOLD_PERCENT=3
ALERT_ENABLED=true
```

**Archivos a modificar:**
- `src/portfolio/portfolio.service.ts` (lógica de detección)
- `src/whatsapp/whatsapp.service.ts` (envío de notificación)
- `src/snapshots/snapshots.service.ts` (trigger después del sync)

---

## 🚀 Prioridad Media (Mediano Plazo)

### 4. Comandos de Comparación de Fechas

**Feature:**
Comparar portfolio entre dos fechas arbitrarias.

**Comandos propuestos:**
```
/compare 2026-01-01 2026-01-07
/history BTC 2025-12-01 2026-01-01
/trend BTC 7d
/trend BTC 30d
```

**Ejemplos:**

**/compare:**
```
Usuario: /compare 2026-01-01 2026-01-07
Bot: 📊 Comparación de Portfolio

Del 1 de enero al 7 de enero (7 días)

Inicio: $14,500.00
Final: $15,234.50
Cambio: +$734.50 (+5.06%)

Top cambios:
• BTC: +$450.00 (+9.5%)
• ETH: +$280.00 (+3.4%)
• XRP: +$4.50 (+0.2%)
```

**/trend:**
```
Usuario: /trend BTC 30d
Bot: 📈 Trend de BTC (últimos 30 días)

Inicio (8-dic): 0.12 BTC → $5,000.00
Final (7-ene): 0.13 BTC → $5,400.50

Cambio en tokens: +0.01 BTC (+8.3%)
Cambio en USD: +$400.50 (+8.0%)

Performance vs portfolio: +3.0%
(Tu portfolio subió 5.0% en el mismo período)
```

**Implementación:**
- Extender `portfolioService.getPortfolioChange()` para aceptar fechas arbitrarias (ya lo hace)
- Extender `portfolioService.getAssetHistory()` para rangos de fechas
- Agregar parseo de fechas en `commands.service.ts`

**Archivos a modificar:**
- `src/whatsapp/commands.service.ts` (nuevos handlers)
- `src/portfolio/portfolio.service.ts` (método para trends)

---

### 5. Queries más avanzadas con IA

**Feature:**
Permitir preguntas más complejas usando el contexto histórico.

**Ejemplos de preguntas:**
```
"¿Qué activo tuvo mejor performance este mes?"
"¿Cuánto gané/perdí en la última semana?"
"¿Mi diversificación está bien o muy concentrada?"
"¿Qué % de mi portfolio son stablecoins?"
"¿Cuándo fue el máximo histórico de mi portfolio?"
```

**Implementación:**
- Agregar nuevas funciones al AI orchestrator:
  - `get_best_performing_asset(fromDate, toDate)`
  - `get_stablecoin_percentage(date?)`
  - `get_portfolio_max(fromDate?, toDate?)`
- Actualizar system prompt para entender estas queries
- Agregar métodos correspondientes en `portfolio.service.ts`

**Archivos a modificar:**
- `src/whatsapp/ai-orchestrator.service.ts` (nuevas funciones)
- `src/portfolio/portfolio.service.ts` (lógica de análisis)

---

### 6. Sugerencias de Rebalanceo

**Feature:**
Calcular diferencias entre allocation actual y target, sugerir trades.

**Ejemplo:**
```
Usuario: /rebalance

Bot: ⚖️ Análisis de Rebalanceo

Portfolio actual: $15,234.50

Allocation actual vs target:
• BTC: 35.4% → Target: 40.0%
  📈 Comprar ~$701 en BTC

• ETH: 24.8% → Target: 20.0%
  📉 Vender ~$731 en ETH

• Stables: 15.2% → Target: 30.0%
  📈 Comprar ~$2,254 en Stables

• Otros: 24.6% → Target: 10.0%
  📉 Vender ~$2,224

⚠️ Esto es solo una sugerencia.
No ejecutamos trades automáticamente.
```

**Configuración:**
- Target allocation configurable (archivo JSON o DB)
- Threshold mínimo para sugerir (ej: solo si diff > 2%)

**Implementación:**
- Crear `target-allocation.json` o tabla en DB
- Nuevo método `portfolioService.getRebalanceSuggestions()`
- Nuevo comando `/rebalance` en commands.service.ts

**Archivos a modificar:**
- `src/portfolio/portfolio.service.ts` (lógica de cálculo)
- `src/whatsapp/commands.service.ts` (nuevo handler)
- `config/target-allocation.json` (configuración)

---

### 7. Soporte para más Exchanges

**Feature:**
Agregar más providers de forma fácil.

**Exchanges a considerar:**
- Binance
- Bybit
- Coinbase
- Kraken
- Lemon

**Implementación:**
- Crear módulo por exchange: `src/integrations/binance/`
- Implementar interface común `ExchangeService`
- Agregar a `snapshots.service.ts`

**Estructura:**
```typescript
interface ExchangeService {
  getBalances(): Promise<{ balances: AssetBalance[] }>;
  testConnection(): Promise<boolean>;
}
```

**Archivos a crear:**
- `src/integrations/binance/binance.service.ts`
- `src/integrations/binance/binance.module.ts`

---

## 💡 Prioridad Baja (Largo Plazo)

### 8. Exportar Reportes (PDF/CSV)

**Feature:**
Generar reportes descargables desde WhatsApp.

**Comandos propuestos:**
```
/export pdf
/export csv
/export pdf 2025-12
```

**Implementación:**
- Usar librería como `pdfkit` o `puppeteer`
- Generar archivo temporal
- Enviar por WhatsApp (Media API)

---

### 9. Dashboard Web (Read-Only)

**Feature:**
Frontend web simple para visualizar el portfolio.

**Tecnología sugerida:**
- Next.js + React
- Gráficos: Recharts o Chart.js
- Autenticación simple (JWT)

**Páginas:**
- Dashboard (resumen + gráfico de evolución)
- Allocation (pie chart)
- History (tabla de snapshots)

---

### 10. Backtesting de Estrategias

**Feature:**
Simular "qué hubiera pasado si..." con datos históricos.

**Ejemplo:**
```
"¿Qué hubiera pasado si hubiera rebalanceado cada semana?"
"¿Y si hubiera mantenido 50% BTC desde diciembre?"
```

**Complejidad:** Alta (requiere mucha data histórica)

---

## 📝 Notas de Implementación

### Testing
- Agregar tests unitarios para cada feature nueva
- Tests de integración para comandos de WhatsApp
- Test del cron de morning brief

### Documentación
- Actualizar `COMANDOS.md` con cada nuevo comando
- Actualizar `README.md` con features nuevas
- Crear ejemplos en `OPERATIONS.md`

### Performance
- Considerar caching de queries frecuentes (Redis)
- Optimizar queries de portfolio con índices
- Paginar resultados si hay muchos snapshots

### Seguridad
- Rate limiting en comandos de Nexo (evitar spam)
- Validación de inputs (amounts, dates)
- Logs de auditoría para operaciones manuales

---

## 🎯 Plan de Implementación Sugerido

**Semana 1-2:**
1. Comandos Nexo via WhatsApp
2. Morning brief diario

**Semana 3-4:**
3. Alertas de cambios grandes
4. Comandos de comparación de fechas

**Mes 2:**
5. Queries avanzadas con IA
6. Soporte para un exchange nuevo (Binance)

**Mes 3+:**
7. Rebalancing suggestions
8. Exportar reportes
9. Dashboard web (si tiene sentido)

---

## 🤔 Decisiones Pendientes

1. **Nexo command**: ¿`/nexo set` o `/nexo update` o `/nexo snapshot`?
2. **Morning brief**: ¿7:30 AM o configurable por usuario?
3. **Alertas**: ¿Threshold de 3%, 5%, o configurable?
4. **Target allocation**: ¿Archivo JSON, DB, o configurable por comando?

---

## ⚠️ Limitaciones de WhatsApp Business API

**Regla de las 24 horas:**
- El bot puede enviarte mensajes proactivos (morning brief, alertas) solo si usaste el bot en las últimas 24h
- Si pasaron más de 24h sin usar el bot, solo puede responder a tus mensajes
- Para uso diario regular, esto no debería ser problema

**Solución alternativa (Message Templates):**
- Para mensajes fuera de las 24h, se pueden crear "Message Templates" pre-aprobados por Meta
- Requiere aprobación de Meta (1-2 días)
- Tienen limitaciones en el texto (no completamente dinámico)
- No recomendado para uso personal (la ventana de 24h es suficiente)

---

**Última actualización:** 7 de enero de 2026
