/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ProposedOwnableFacet,
  ProposedOwnableFacetInterface,
} from "../../../../../contracts/core/connext/facets/ProposedOwnableFacet";

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
    name: "ProposedOwnableFacet__acceptProposedOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleAdmin_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleRouter_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__assignRoleWatcher_invalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__delayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeAssetAllowlistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__proposeRouterAllowlistRemoval_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetAllowlist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeAssetAllowlist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterAllowlist_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__removeRouterAllowlist_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnableFacet__revokeRole_invalidInput",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AssignRoleAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "AssignRoleRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "AssignRoleWatcher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "revokedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Role",
        name: "revokedRole",
        type: "uint8",
      },
    ],
    name: "RevokeRole",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RouterAllowlistRemovalProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "renounced",
        type: "bool",
      },
    ],
    name: "RouterAllowlistRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "assignRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "assignRoleRouterAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "assignRoleWatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeRouterAllowlistRemoval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_role",
        type: "address",
      },
    ],
    name: "queryRole",
    outputs: [
      {
        internalType: "enum Role",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeRouterAllowlist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_revoke",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "routerAllowlistRemoved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "routerAllowlistTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d79806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638456cb59116100a2578063bb271a2711610071578063bb271a27146101d3578063c56ce358146101e6578063c5b350df146101ee578063c91cb56a146101f6578063d1851c921461022f57600080fd5b80638456cb59146101855780638da5cb5b1461018d578063a9943b1b146101ad578063b1f8100d146101c057600080fd5b80633f4ba83a116100de5780633f4ba83a1461014c5780636a42b8f8146101545780636be557851461015c57806380e52e3f1461017257600080fd5b8063122329371461011057806323986f7d146101275780632ec0c002146101315780633cf52ffb14610144575b600080fd5b6013545b6040519081526020015b60405180910390f35b61012f610240565b005b61012f61013f366004610c8f565b610329565b601154610114565b61012f610445565b6101146104df565b60125460ff16604051901515815260200161011e565b61012f610180366004610c8f565b6104ee565b61012f61060e565b6101956106ae565b6040516001600160a01b03909116815260200161011e565b61012f6101bb366004610c8f565b6106b8565b61012f6101ce366004610c8f565b6107cd565b61012f6101e1366004610c8f565b610880565b61012f610994565b61012f610a24565b610222610204366004610c8f565b6001600160a01b031660009081526014602052604090205460ff1690565b60405161011e9190610cf7565b6010546001600160a01b0316610195565b33610249610ad2565b6001600160a01b031614158015610284575060033360009081526014602052604090205460ff16600381111561028157610281610cbf565b14155b156102a257604051637b32c26b60e01b815260040160405180910390fd5b6013546102ad6104df565b6102b78242610d05565b116102d557604051637f0369a960e11b815260040160405180910390fd5b60125460ff16156102f957604051634b4da55560e01b815260040160405180910390fd5b60135460000361031c576040516368ad12e160e11b815260040160405180910390fd5b6103266001610aee565b50565b33610332610ad2565b6001600160a01b03161415801561036d575060033360009081526014602052604090205460ff16600381111561036a5761036a610cbf565b14155b1561038b57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604081205460ff1660038111156103b8576103b8610cbf565b1415806103cc57506001600160a01b038116155b156103ea576040516319f546ad60e11b815260040160405180910390fd5b6001600160a01b038116600081815260146020908152604091829020805460ff1916600117905590519182527ff294e68c632d2c26e3d36129816c9a3e54bfa0ebada89d07d08e15e87a8e240391015b60405180910390a150565b3361044e610ad2565b6001600160a01b031614158015610489575060033360009081526014602052604090205460ff16600381111561048657610486610cbf565b14155b156104a757604051637b32c26b60e01b815260040160405180910390fd5b601a805460ff60a01b191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a1565b60006104e9610b34565b905090565b336104f7610ad2565b6001600160a01b031614158015610532575060033360009081526014602052604090205460ff16600381111561052f5761052f610cbf565b14155b1561055057604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604081205460ff169081600381111561057f5761057f610cbf565b148061059257506001600160a01b038216155b156105b057604051630e15d72960e31b815260040160405180910390fd5b6001600160a01b03821660009081526014602052604090819020805460ff19169055517fdc6f53b47a9dfbea7a15fceef0cd84711d3d79ccc0952111866167af5e59e264906106029084908490610d26565b60405180910390a15050565b33610617610ad2565b6001600160a01b031614158015610652575060023360009081526014602052604090205460ff16600381111561064f5761064f610cbf565b14155b156106705760405163bae4c01f60e01b815260040160405180910390fd5b601a805460ff60a01b1916600160a01b1790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a1565b60006104e9610ad2565b336106c1610ad2565b6001600160a01b0316141580156106fc575060033360009081526014602052604090205460ff1660038111156106f9576106f9610cbf565b14155b1561071a57604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604081205460ff16600381111561074757610747610cbf565b14158061075b57506001600160a01b038116155b1561077957604051630bceab9d60e01b815260040160405180910390fd5b6001600160a01b038116600081815260146020908152604091829020805460ff1916600217905590519182527ffaac289281b8fc57dff30d0ff38b071d28bb5f24cd5ed1bd2379d6fb27f714dd910161043a565b336107d6610ad2565b6001600160a01b0316146107fd576040516314e74a2560e21b815260040160405180910390fd5b6010546001600160a01b038281169116148061082057506001600160a01b038116155b1561083e57604051630274ac4360e21b815260040160405180910390fd5b806001600160a01b03166108506106ae565b6001600160a01b03160361087757604051631f677f5160e01b815260040160405180910390fd5b61032681610b47565b33610889610ad2565b6001600160a01b0316141580156108c4575060033360009081526014602052604090205460ff1660038111156108c1576108c1610cbf565b14155b156108e257604051637b32c26b60e01b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604081205460ff16600381111561090f5761090f610cbf565b14158061092357506001600160a01b038116155b1561094157604051631600e74560e31b815260040160405180910390fd5b6001600160a01b038116600081815260146020908152604091829020805460ff1916600317905590519182527e0a317382a4189d8763d4a024ec833785cebd3580a084ff0f887f156b822cb1910161043a565b3361099d610ad2565b6001600160a01b0316141580156109d8575060033360009081526014602052604090205460ff1660038111156109d5576109d5610cbf565b14155b156109f657604051637b32c26b60e01b815260040160405180910390fd5b60125460ff1615610a1a576040516333bfb93f60e11b815260040160405180910390fd5b610a22610b95565b565b6010546001600160a01b03163314610a4f57604051631b54eee360e11b815260040160405180910390fd5b601154610a5a6104df565b610a648242610d05565b11610a8257604051637f0369a960e11b815260040160405180910390fd5b6010546001600160a01b0316610a966106ae565b6001600160a01b031603610abd576040516355cc507960e01b815260040160405180910390fd5b601054610326906001600160a01b0316610bd0565b6000610adc610bee565b600401546001600160a01b0316919050565b6012805460ff191682151590811790915560006013556040519081527f7c21a455b42ac52b1f1cc1103db5afe532e817479e9503a97a734720271c5a749060200161043a565b6000610b3e610bee565b60060154905090565b42601155601080546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b4260138190556040519081527feb0f48d74c7254e5b55ef91a3f6e496e6a4a8676b6dae07f3d6fb0805b9fac939060200160405180910390a1565b6000601155601080546001600160a01b031916905561032681610c22565b600080610c1c60017fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c610d05565b92915050565b6000610c2c610bee565b60048101546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b600060208284031215610ca157600080fd5b81356001600160a01b0381168114610cb857600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b60048110610cf357634e487b7160e01b600052602160045260246000fd5b9052565b60208101610c1c8284610cd5565b81810381811115610c1c57634e487b7160e01b600052601160045260246000fd5b6001600160a01b038316815260408101610cb86020830184610cd556fea26469706673582212208733abd509efb09f2e45c7cee79c7467c8830f7eb1e7cb520de54f50a418794964736f6c63430008110033";

type ProposedOwnableFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposedOwnableFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposedOwnableFacet__factory extends ContractFactory {
  constructor(...args: ProposedOwnableFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProposedOwnableFacet> {
    return super.deploy(overrides || {}) as Promise<ProposedOwnableFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProposedOwnableFacet {
    return super.attach(address) as ProposedOwnableFacet;
  }
  override connect(signer: Signer): ProposedOwnableFacet__factory {
    return super.connect(signer) as ProposedOwnableFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposedOwnableFacetInterface {
    return new utils.Interface(_abi) as ProposedOwnableFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProposedOwnableFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProposedOwnableFacet;
  }
}
