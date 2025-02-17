/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondInit,
  DiamondInitInterface,
} from "../../../../../../contracts/core/connext/facets/upgrade-initializers/DiamondInit";

const _abi = [
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondInit__init_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "DiamondInit__init_domainsDontMatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_acceptanceDelay",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610382806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80639a7e155e14610030575b600080fd5b61004361003e3660046102b8565b610045565b005b60005460ff1615610069576040516318fc834360e21b815260040160405180910390fd5b6100716101ea565b60008390508463ffffffff16816001600160a01b0316638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100df9190610307565b63ffffffff161461010357604051631fdd17b360e11b815260040160405180910390fd5b6000805460ff19166001178155610118610253565b6301ffc9a760e01b600090815260038201602090815260408083208054600160ff199182168117909255636f5723a360e11b855282852080548216831790556348e2b09360e01b8552828520805482168317905563286b971b60e01b855291909320805490911683179055600690920195909555601685905560178590556004805463ffffffff191663ffffffff98909816979097179096555061270b9092556005600c5583546001600160a01b03199081166001600160a01b0393841617909455601a805490941691161790915550565b6101f2610253565b600401546001600160a01b031633146102515760405162461bcd60e51b815260206004820152601b60248201527f4c69624469616d6f6e643a2021636f6e7472616374206f776e65720000000000604482015260640160405180910390fd5b565b60008061028160017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c61032b565b92915050565b63ffffffff8116811461029957600080fd5b50565b80356001600160a01b03811681146102b357600080fd5b919050565b600080600080608085870312156102ce57600080fd5b84356102d981610287565b93506102e76020860161029c565b9250604085013591506102fc6060860161029c565b905092959194509250565b60006020828403121561031957600080fd5b815161032481610287565b9392505050565b8181038181111561028157634e487b7160e01b600052601160045260246000fdfea264697066735822122040dce6369ad9e716905885da0bc331e58fd764400ee844d9082acfac58e6ab7c64736f6c63430008110033";

type DiamondInitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondInitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondInit__factory extends ContractFactory {
  constructor(...args: DiamondInitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondInit> {
    return super.deploy(overrides || {}) as Promise<DiamondInit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondInit {
    return super.attach(address) as DiamondInit;
  }
  override connect(signer: Signer): DiamondInit__factory {
    return super.connect(signer) as DiamondInit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondInitInterface {
    return new utils.Interface(_abi) as DiamondInitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondInit {
    return new Contract(address, _abi, signerOrProvider) as DiamondInit;
  }
}
