export interface CalculateStakingRewardsParams {
  slotTimeInSec?: number;
  slotsInEpoch?: number;
  baseRewardFactor?: number;
  totalAtStake?: number; // BOA
  averageNetworkPctOnline?: number;
  vaildatorUptime?: number;
  validatorDeposit?: number; // BOA
  effectiveBalanceIncrement?: number; // gwei
  weightDenominator?: number;
  proposerWeight?: number;
  epochNum?: number;
}

const calculateStakingRewards = ({
  slotTimeInSec = 12,
  slotsInEpoch = 32,
  baseRewardFactor = 64,
  totalAtStake = 1_250_000_000, // BOA, ratio is kept (1_000_000/32)
  averageNetworkPctOnline = 0.95,
  vaildatorUptime = 0.99,
  validatorDeposit = 40_000, // BOA
  effectiveBalanceIncrement = 1_000_000_000_000, // gwei
  weightDenominator = 64,
  proposerWeight = 8,
  epochNum = 0,
}: CalculateStakingRewardsParams): number => {
  // Calculate number of epochs per year
  const avgSecInYear = 31556908.8; // 60 * 60 * 24 * 365.242
  const epochPerYear = avgSecInYear / (slotTimeInSec * slotsInEpoch);
  
  // Agora specific calculations
  const yearSinceGenesis = Math.floor(epochNum / epochPerYear);
  const firstYearValRewards = 27 * (avgSecInYear / 5);
  let yearlyReward = firstYearValRewards;
  for (let y = yearSinceGenesis; y > 0; y--) {
    yearlyReward = (yearlyReward * 9_369) / 10_000;
  }

  return yearlyReward / totalAtStake;
};

export default calculateStakingRewards;
