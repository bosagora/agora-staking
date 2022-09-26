import { useIntl } from 'react-intl';
import {
  IS_MAINNET,
  EL_TESTNET_NAME,
  TESTNET_AGORA_STAKING_NAME,
} from '../utils/envVars';

const useIntlNetworkName = (): {
  executionLayerName: string;
  consensusLayerName: string;
} => {
  const { formatMessage } = useIntl();
  const mainnet = formatMessage({ defaultMessage: 'Mainnet' });
  const executionLayerName: string = IS_MAINNET
    ? mainnet
    : formatMessage(
        { defaultMessage: '{EL_TESTNET_NAME}' },
        { EL_TESTNET_NAME }
      );
  const consensusLayerName: string = IS_MAINNET
    ? mainnet
    : formatMessage(
        { defaultMessage: '{TESTNET_AGORA_STAKING_NAME}' },
        { TESTNET_AGORA_STAKING_NAME }
      );
  return { executionLayerName, consensusLayerName };
};

export default useIntlNetworkName;
