# Comandos del Bot de WhatsApp - Asset OS

Este documento lista todos los comandos disponibles en el bot de WhatsApp para consultar tu portfolio de criptomonedas.

## 📋 Índice

- [Comandos Rápidos](#comandos-rápidos)
- [Consultas en Lenguaje Natural](#consultas-en-lenguaje-natural)
- [Ejemplos de Uso](#ejemplos-de-uso)

---

## Comandos Rápidos

Estos son comandos que comienzan con `/` y te dan información inmediata sin necesidad de esperar respuesta de la IA.

### `/total` - Resumen del Portfolio

Muestra un resumen completo de tu portfolio con el valor total en USD y desglose por proveedor.

**Ejemplo de respuesta:**
```
*Portfolio Summary*

Total: $15,234.50
Change (24h): +$342.20 (+2.30%)

*By Provider:*
Binance: $8,500.00
Bybit: $4,234.50
Lemon: $2,500.00

Status: COMPLETED
```

**Cuándo usarlo:**
- Quieres ver rápidamente cuánto vale tu portfolio total
- Necesitas saber la distribución entre exchanges
- Quieres ver el cambio vs ayer

---

### `/status` - Estado del Sistema

Muestra el estado del sistema y los proveedores conectados.

**Ejemplo de respuesta:**
```
*System Status*

Snapshot Status: COMPLETED
Last Update: 1/6/2026, 10:30:00 AM

*Providers:*
Binance: ✅ OK
Bybit: ✅ OK
Lemon: ✅ OK
```

**Cuándo usarlo:**
- Verificar que todos los exchanges estén sincronizados
- Ver cuándo fue la última actualización de datos
- Diagnosticar problemas de conexión

---

### `/alloc [asset|provider]` - Distribución de Activos

Muestra cómo está distribuido tu portfolio, ya sea por activo (criptomoneda) o por proveedor (exchange).

**Sintaxis:**
```
/alloc          # Por defecto muestra por activo
/alloc asset    # Distribución por criptomoneda
/alloc provider # Distribución por exchange
```

**Ejemplo de respuesta (por asset):**
```
*Allocation by asset*

BTC: $5,400.00 (35.42%)
ETH: $3,200.00 (20.99%)
XRP: $2,800.00 (18.37%)
USDT: $2,000.00 (13.12%)
SOL: $1,834.50 (12.03%)

...and 3 more
```

**Ejemplo de respuesta (por provider):**
```
*Allocation by provider*

Binance: $8,500.00 (55.78%)
Bybit: $4,234.50 (27.78%)
Lemon: $2,500.00 (16.40%)
```

**Cuándo usarlo:**
- Ver qué criptomonedas tienes y en qué proporción
- Analizar tu diversificación
- Ver qué porcentaje de tu capital está en cada exchange

---

### `/change` - Cambios en el Portfolio

Muestra cómo cambió tu portfolio total comparando ayer con hoy, incluyendo los 5 activos que más impactaron el cambio.

**Ejemplo de respuesta:**
```
*Portfolio Change*

From: 1/5/2026
To: 1/6/2026

Previous: $14,892.30
Current: $15,234.50
Change: +$342.20 (+2.30%)

*Top Changes:*
BTC: +$180.50
ETH: +$95.30
XRP: +$42.10
SOL: +$24.30
USDT: $0.00
```

**Cuándo usarlo:**
- Ver si tu portfolio subió o bajó desde ayer
- Identificar qué activos contribuyeron más al cambio
- Hacer seguimiento diario de tu inversión

---

### `/history <asset>` - Historial de un Activo

Muestra el historial detallado de un activo específico comparando ayer vs hoy, incluyendo cambios en cantidad de tokens, valor USD y precio.

**Sintaxis:**
```
/history BTC    # Historial de Bitcoin
/history ETH    # Historial de Ethereum
/history XRP    # Historial de Ripple
```

**Ejemplo de respuesta:**
```
*BTC History*

From: 1/5/2026
To: 1/6/2026

*Token Amount:*
Previous: 0.12500000
Current: 0.13000000
Change: +0.00500000 (+4.00%)

*USD Value:*
Previous: $5,220.00
Current: $5,400.50
Change: +$180.50

*Price per Token:*
Previous: $41,760.00
Current: $41,542.31
Change: -$217.69 (-0.52%)
```

**Análisis de la respuesta:**
- **Token Amount Change**: Si aumentó, compraste. Si disminuyó, vendiste.
- **USD Value Change**: Cambio total en el valor de ese activo
- **Price Change**: Cambio en el precio de mercado

**Cuándo usarlo:**
- Ver si compraste/vendiste tokens de un activo específico
- Distinguir entre cambios por trading vs cambios por precio de mercado
- Analizar el performance de un activo individual

---

### `/help` - Ayuda

Muestra la lista de comandos disponibles.

**Ejemplo de respuesta:**
```
*Available Commands:*

/total - Portfolio summary
/status - System status
/alloc [asset|provider] - Allocation breakdown
/change - Portfolio change (yesterday vs today)
/history <asset> - Asset history (e.g., /history BTC)
/help - Show this message

You can also ask questions in natural language!
```

---

## Consultas en Lenguaje Natural

Además de los comandos rápidos, puedes hacer preguntas en lenguaje natural. El bot utiliza IA para entender tu pregunta y llamar a las funciones necesarias.

### Ejemplos de Preguntas sobre Portfolio Total

```
¿Cuánto vale mi portfolio?
¿Cuál es mi capital total?
Mostrame mi portfolio completo
```

### Ejemplos de Preguntas sobre Activos Específicos

```
¿Cuántos XRP tengo?
Cuánto BTC tengo en total?
Decime cuántos ETH tengo y cuánto valen
¿Cuánto vale mi Bitcoin a día de hoy?
Dame el total en USD y en tokens de SOL
```

### Ejemplos de Preguntas sobre Cambios

```
¿Mi portfolio subió o bajó?
¿Cómo cambió mi capital hoy?
Explicame por qué subió mi portfolio
¿Qué activo tuvo más impacto en el cambio?
¿Mi portfolio está mejor o peor que ayer?
```

### Ejemplos de Preguntas sobre Movimientos de Activos

```
¿Compré o vendí XRP?
¿Cambió la cantidad de BTC que tengo?
¿Por qué cambió el valor de mi Ethereum?
¿Fue por el precio o porque compré/vendí?
Explicame el movimiento de SOL
```

### Ejemplos de Preguntas sobre Distribución

```
¿Qué porcentaje de mi portfolio es BTC?
¿Cómo está distribuido mi capital?
Mostrame mi allocation por exchange
¿Qué tengo más, BTC o ETH?
```

---

## Ejemplos de Uso

### Caso 1: Revisión Matutina

```
Usuario: /total
Bot: [Muestra resumen con cambio vs ayer]

Usuario: ¿Por qué subió mi portfolio?
Bot: Tu portfolio aumentó $342.20 (+2.30%) principalmente por:
     - BTC subió $180.50 (el precio aumentó 0.8%)
     - ETH subió $95.30 (compraste 0.05 ETH adicionales)
     - XRP subió $42.10 (precio de mercado +1.2%)
```

### Caso 2: Análisis de un Activo

```
Usuario: /history XRP
Bot: [Muestra cambios en cantidad, USD y precio]

Usuario: ¿Compré o vendí XRP?
Bot: Compraste XRP. Tu cantidad aumentó de 500 a 525 tokens (+5%).
     El valor total subió $42.10 debido a:
     - Compra de 25 XRP: ~$20
     - Aumento de precio del mercado: ~$22
```

### Caso 3: Consulta Rápida

```
Usuario: ¿Cuántos BTC tengo?
Bot: Tienes 0.13 BTC
     Valor actual: $5,400.50
     Precio por token: $41,542.31

     Distribución:
     - Binance: 0.08 BTC ($3,323.38)
     - Bybit: 0.05 BTC ($2,077.12)
```

### Caso 4: Verificación de Distribución

```
Usuario: /alloc
Bot: [Muestra distribución por activo con porcentajes]

Usuario: ¿Estoy muy expuesto a BTC?
Bot: Tu BTC representa el 35.42% de tu portfolio ($5,400).
     Esto está dentro de rangos normales de diversificación,
     aunque algunos inversores prefieren no superar el 30-40%
     en un solo activo.
```

---

## Notas Importantes

### Frecuencia de Actualización
- Los datos se actualizan mediante snapshots diarios
- Los comandos `/change` y `/history` comparan ayer vs hoy
- Usa `/status` para ver cuándo fue la última actualización

### Formato de Activos
- Los símbolos de activos deben estar en mayúsculas: `BTC`, `ETH`, `XRP`
- El bot automáticamente convierte minúsculas a mayúsculas

### Precisión de Números
- Cantidades de tokens: 8 decimales
- Valores en USD: 2 decimales
- Porcentajes: 2 decimales

### Limitaciones
- Los comandos `/change` y `/history` solo comparan fechas consecutivas
- No hay (aún) soporte para rangos de fechas personalizados
- Los datos dependen de que los exchanges estén sincronizados

---

## Soporte

Si encuentras algún error o tienes sugerencias:
- Revisa `/status` para verificar la conexión con los exchanges
- Usa `/help` para ver los comandos disponibles
- Reporta issues en el repositorio de GitHub

---

**Última actualización:** Enero 2026
