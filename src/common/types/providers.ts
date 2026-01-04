export enum Provider {
  BITGET = 'BITGET',
  SIMPLEFX = 'SIMPLEFX',
  NEXO = 'NEXO',
}

export interface AssetBalance {
  asset: string;
  free: string;
  locked: string;
}

export interface ProviderBalanceResponse {
  provider: Provider;
  balances: AssetBalance[];
  timestamp: Date;
}
