import {
  NumberUintType,
  ByteVector,
  ByteVectorType,
  ContainerType,
} from '@chainsafe/ssz';
import { DepositKeyInterface } from '../store/reducers';

export const bufferHex = (x: string): Buffer => Buffer.from(x, 'hex');

const DepositMessage = new ContainerType({
  fields: {
    pubkey: new ByteVectorType({
      length: 48,
    }),
    withdrawalCredentials: new ByteVectorType({
      length: 32,
    }),
    amount: new NumberUintType({
      byteLength: 8,
    }),
  },
});

interface DepositMessage {
  pubkey: ByteVector;
  withdrawalCredentials: ByteVector;
  amount: Number;
}

const DepositData = new ContainerType({
  fields: {
    pubkey: new ByteVectorType({
      length: 48,
    }),
    withdrawalCredentials: new ByteVectorType({
      length: 32,
    }),
    amount: new NumberUintType({
      byteLength: 8,
    }),
    signature: new ByteVectorType({
      length: 96,
    }),
  },
});

interface DepositData {
  pubkey: ByteVector;
  withdrawalCredentials: ByteVector;
  amount: Number;
  signature: ByteVector;
}

export const verifyDepositRoots = (
  depositDatum: DepositKeyInterface
): boolean => {
  const depositMessage: DepositMessage = {
    pubkey: bufferHex(depositDatum.pubkey),
    withdrawalCredentials: bufferHex(depositDatum.withdrawal_credentials),
    amount: Number(depositDatum.amount),
  };
  const depositData: DepositData = {
    pubkey: bufferHex(depositDatum.pubkey),
    withdrawalCredentials: bufferHex(depositDatum.withdrawal_credentials),
    amount: Number(depositDatum.amount),
    signature: bufferHex(depositDatum.signature),
  };
  if (
    bufferHex(depositDatum.deposit_message_root).compare(
      DepositMessage.hashTreeRoot(depositMessage)
    ) === 0 &&
    bufferHex(depositDatum.deposit_data_root).compare(
      DepositData.hashTreeRoot(depositData)
    ) === 0
  ) {
    return true;
  }
  return false;
};

const VoterMessage = new ContainerType({
  fields: {
    pubkey: new ByteVectorType({
      length: 48,
    }),
    voter: new ByteVectorType({
      length: 32,
    }),
    amount: new NumberUintType({
      byteLength: 8,
    }),
  },
});

interface VoterMessage {
  pubkey: ByteVector;
  voter: ByteVector;
  amount: Number;
}

const VoterData = new ContainerType({
  fields: {
    pubkey: new ByteVectorType({
      length: 48,
    }),
    voter: new ByteVectorType({
      length: 32,
    }),
    amount: new NumberUintType({
      byteLength: 8,
    }),
    signature: new ByteVectorType({
      length: 96,
    }),
  },
});

interface VoterData {
  pubkey: ByteVector;
  voter: ByteVector;
  amount: Number;
  signature: ByteVector;
}

export const verifyVoterRoots = (voterDatum: DepositKeyInterface): boolean => {
  const voterMessage: VoterMessage = {
    pubkey: bufferHex(voterDatum.pubkey),
    voter: bufferHex(voterDatum.voter),
    amount: Number(voterDatum.amount),
  };
  const voterData: VoterData = {
    pubkey: bufferHex(voterDatum.pubkey),
    voter: bufferHex(voterDatum.voter),
    amount: Number(voterDatum.amount),
    signature: bufferHex(voterDatum.voter_signature),
  };
  if (
    bufferHex(voterDatum.voter_message_root).compare(
      VoterMessage.hashTreeRoot(voterMessage)
    ) === 0 &&
    bufferHex(voterDatum.voter_data_root).compare(
      VoterData.hashTreeRoot(voterData)
    ) === 0
  ) {
    return true;
  }
  return false;
};

export const SigningData = new ContainerType({
  fields: {
    objectRoot: new ByteVectorType({
      length: 32,
    }), // Ideally this would be a RootType, but AFIK, there is no generic expanded type for roots in @chainsafe/ssz
    domain: new ByteVectorType({
      length: 32,
    }),
  },
});

export interface SigningData {
  objectRoot: ByteVector;
  domain: ByteVector;
}

export const ForkData = new ContainerType({
  fields: {
    currentVersion: new ByteVectorType({
      length: 4,
    }),
    genesisValidatorsRoot: new ByteVectorType({
      length: 32,
    }),
  },
});

export interface ForkData {
  currentVersion: ByteVector;
  genesisValidatorsRoot: ByteVector;
}
