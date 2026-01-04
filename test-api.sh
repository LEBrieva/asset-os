#!/bin/bash

echo "🚀 AssetOS - Test Script"
echo "======================="
echo ""

echo "1️⃣  Ejecutando sync manual (trayendo balances de Bitget)..."
echo ""

SYNC_RESPONSE=$(curl -s -X POST http://localhost:3000/admin/sync/run \
  -H "Content-Type: application/json" \
  -d '{"providers": ["BITGET"]}')

echo "Respuesta del sync:"
echo "$SYNC_RESPONSE" | jq '.' 2>/dev/null || echo "$SYNC_RESPONSE"
echo ""

# Extraer snapshotId
SNAPSHOT_ID=$(echo "$SYNC_RESPONSE" | jq -r '.snapshotId' 2>/dev/null)

if [ "$SNAPSHOT_ID" != "null" ] && [ -n "$SNAPSHOT_ID" ]; then
  echo "✅ Snapshot ID: $SNAPSHOT_ID"
  echo ""
  echo "Esperando 5 segundos para que termine el sync..."
  sleep 5

  echo ""
  echo "2️⃣  Verificando estado del sync..."
  echo ""

  curl -s "http://localhost:3000/admin/sync/status/$SNAPSHOT_ID" | jq '.' 2>/dev/null

  echo ""
  echo "3️⃣  Obteniendo resumen del portfolio..."
  echo ""

  curl -s "http://localhost:3000/portfolio/summary" | jq '.' 2>/dev/null

  echo ""
  echo "4️⃣  Obteniendo allocation por asset..."
  echo ""

  curl -s "http://localhost:3000/portfolio/allocation?groupBy=asset" | jq '.' 2>/dev/null

else
  echo "❌ Error: No se pudo crear el snapshot"
fi

echo ""
echo "✅ Tests completados!"
