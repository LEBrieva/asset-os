-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('BITGET', 'SIMPLEFX', 'NEXO');

-- CreateEnum
CREATE TYPE "SnapshotSource" AS ENUM ('DAILY_CRON', 'MANUAL', 'CSV_IMPORT');

-- CreateEnum
CREATE TYPE "SnapshotStatus" AS ENUM ('CREATED', 'RUNNING', 'PARTIAL', 'COMPLETE', 'FAILED');

-- CreateEnum
CREATE TYPE "SyncRunStatus" AS ENUM ('OK', 'ERROR', 'SKIPPED');

-- CreateEnum
CREATE TYPE "PositionSide" AS ENUM ('LONG', 'SHORT');

-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL,
    "provider" "Provider" NOT NULL,
    "label" TEXT NOT NULL,
    "base_currency" TEXT NOT NULL DEFAULT 'USD',
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "snapshots" (
    "id" UUID NOT NULL,
    "snapshot_date" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" "SnapshotSource" NOT NULL DEFAULT 'DAILY_CRON',
    "status" "SnapshotStatus" NOT NULL DEFAULT 'CREATED',
    "notes" TEXT,

    CONSTRAINT "snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_sync_runs" (
    "id" UUID NOT NULL,
    "snapshot_id" UUID NOT NULL,
    "provider" "Provider" NOT NULL,
    "started_at" TIMESTAMPTZ(3) NOT NULL,
    "finished_at" TIMESTAMPTZ(3),
    "status" "SyncRunStatus" NOT NULL DEFAULT 'OK',
    "error_message" TEXT,

    CONSTRAINT "provider_sync_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_balances" (
    "snapshot_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "asset" TEXT NOT NULL,
    "free" DECIMAL(20,8) NOT NULL,
    "locked" DECIMAL(20,8) NOT NULL DEFAULT 0,
    "usd_value" DECIMAL(20,2),

    CONSTRAINT "account_balances_pkey" PRIMARY KEY ("snapshot_id","account_id","asset")
);

-- CreateTable
CREATE TABLE "positions" (
    "snapshot_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "symbol" TEXT NOT NULL,
    "side" "PositionSide" NOT NULL,
    "size" DECIMAL(20,8) NOT NULL,
    "entry_price" DECIMAL(20,8),
    "mark_price" DECIMAL(20,8),
    "pnl_unrealized_usd" DECIMAL(20,2),

    CONSTRAINT "positions_pkey" PRIMARY KEY ("snapshot_id","account_id","symbol","side")
);

-- CreateTable
CREATE TABLE "transfers" (
    "id" UUID NOT NULL,
    "ts" TIMESTAMPTZ(3) NOT NULL,
    "from_account_id" UUID,
    "to_account_id" UUID,
    "asset" TEXT NOT NULL,
    "amount" DECIMAL(20,8) NOT NULL,
    "fee" DECIMAL(20,8),
    "txid" TEXT,
    "note" TEXT,

    CONSTRAINT "transfers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raw_events" (
    "id" UUID NOT NULL,
    "provider" "Provider" NOT NULL,
    "snapshot_id" UUID,
    "ts" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" TEXT NOT NULL,
    "payload_json" JSONB NOT NULL,
    "payload_hash" TEXT NOT NULL,

    CONSTRAINT "raw_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices_daily" (
    "price_date" DATE NOT NULL,
    "asset_or_symbol" TEXT NOT NULL,
    "price_usd" DECIMAL(20,8) NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "prices_daily_pkey" PRIMARY KEY ("price_date","asset_or_symbol")
);

-- CreateIndex
CREATE UNIQUE INDEX "snapshots_snapshot_date_key" ON "snapshots"("snapshot_date");

-- CreateIndex
CREATE UNIQUE INDEX "provider_sync_runs_snapshot_id_provider_key" ON "provider_sync_runs"("snapshot_id", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "transfers_txid_key" ON "transfers"("txid");

-- CreateIndex
CREATE INDEX "raw_events_provider_ts_idx" ON "raw_events"("provider", "ts");

-- CreateIndex
CREATE INDEX "raw_events_payload_hash_idx" ON "raw_events"("payload_hash");

-- AddForeignKey
ALTER TABLE "provider_sync_runs" ADD CONSTRAINT "provider_sync_runs_snapshot_id_fkey" FOREIGN KEY ("snapshot_id") REFERENCES "snapshots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_balances" ADD CONSTRAINT "account_balances_snapshot_id_fkey" FOREIGN KEY ("snapshot_id") REFERENCES "snapshots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_balances" ADD CONSTRAINT "account_balances_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_snapshot_id_fkey" FOREIGN KEY ("snapshot_id") REFERENCES "snapshots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_from_account_id_fkey" FOREIGN KEY ("from_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "raw_events" ADD CONSTRAINT "raw_events_snapshot_id_fkey" FOREIGN KEY ("snapshot_id") REFERENCES "snapshots"("id") ON DELETE SET NULL ON UPDATE CASCADE;
