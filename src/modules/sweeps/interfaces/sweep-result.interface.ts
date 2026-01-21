export interface SweepResult {
  success: boolean;
  txHash: string;
  contractAuthHash: string;
  amountSwept: string;
  destination: string;
  timestamp: Date;
}
