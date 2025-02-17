/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  MultichainHubConnector,
  MultichainHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/multichain/MultichainHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
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
    inputs: [],
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "anyExecute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
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
    name: "mirrorConnector",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040516200165d3803806200165d8339810160408190526200003591620003d7565b848282808a8a858a8a84848484846200004e3362000296565b8463ffffffff16600003620000995760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e55760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b604482015260640162000090565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011d576200011d81620002fb565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050505050505050505062000190816200036460201b60201c565b5081600003620001d45760405162461bcd60e51b815260206004820152600e60248201526d085b5a5c9c9bdc90da185a5b925960921b604482015260640162000090565b826001600160a01b031663c34c08e56040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000213573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023991906200045a565b6001600160a01b0316610100819052620002825760405162461bcd60e51b815260206004820152600960248201526810b2bc32b1baba37b960b91b604482015260640162000090565b5061012052506200047f9650505050505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620003ba57600080fd5b919050565b80516001600160a01b0381168114620003ba57600080fd5b600080600080600080600060e0888a031215620003f357600080fd5b620003fe88620003a5565b96506200040e60208901620003a5565b95506200041e60408901620003bf565b94506200042e60608901620003bf565b93506200043e60808901620003bf565b925060a0880151915060c0880151905092959891949750929550565b6000602082840312156200046d57600080fd5b6200047882620003bf565b9392505050565b60805160a05160c05160e05161010051610120516111566200050760003960008181610b4b01528181610c3e0152610d8f01526000610cec015260008181610136015261089301526000818161022c015281816103fa015261086c0152600081816103ad015281816104af015281816107a30152610a7e015260006101d801526111566000f3fe6080604052600436106101185760003560e01c80637850b020116100a0578063cc39428311610064578063cc39428314610332578063d1851c9214610352578063d232c22014610370578063d69f9d611461039b578063db1b7659146103cf57600080fd5b80637850b020146102915780638da5cb5b146102b15780639abaf479146102cf578063b1f8100d146102fd578063c5b350df1461031d57600080fd5b806352a9674b116100e757806352a9674b146101c65780635bd11efc146101fa5780635f61e3ec1461021a5780636a42b8f814610266578063715018a61461027c57600080fd5b806314168416146101245780633cf52ffb1461017257806348e6fa23146101915780634ff746f6146101a657600080fd5b3661011f57005b600080fd5b34801561013057600080fd5b506101587f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561017e57600080fd5b506002545b604051908152602001610169565b6101a461019f366004610e73565b6103ef565b005b3480156101b257600080fd5b506101a46101c1366004610ed7565b6104a4565b3480156101d257600080fd5b506101587f000000000000000000000000000000000000000000000000000000000000000081565b34801561020657600080fd5b506101a4610215366004610f29565b61054a565b34801561022657600080fd5b5061024e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610169565b34801561027257600080fd5b5062093a80610183565b34801561028857600080fd5b506101a4610581565b34801561029d57600080fd5b506101a46102ac366004610f4d565b610635565b3480156102bd57600080fd5b506000546001600160a01b031661024e565b3480156102db57600080fd5b506102ef6102ea366004610ed7565b610669565b604051610169929190610fac565b34801561030957600080fd5b506101a4610318366004610f29565b61067b565b34801561032957600080fd5b506101a4610719565b34801561033e57600080fd5b5060035461024e906001600160a01b031681565b34801561035e57600080fd5b506001546001600160a01b031661024e565b34801561037c57600080fd5b506000546001600160a01b0316155b6040519015158152602001610169565b3480156103a757600080fd5b5061024e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b5061038b6103ea366004610f29565b610789565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461045b5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b610465828261079a565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161049893929190610fc7565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105055760405162461bcd60e51b81526004016104529060208082526004908201526310a0a6a160e11b604082015260600190565b61050e816107d7565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161053f929190611005565b60405180910390a150565b6000546001600160a01b03163314610575576040516311a8a1bb60e31b815260040160405180910390fd5b61057e8161091a565b50565b6000546001600160a01b031633146105ac576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426105be9190611045565b116105dc576040516324e0285f60e21b815260040160405180910390fd5b6002546000036105ff57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610629576040516323295ef960e01b815260040160405180910390fd5b6106336000610983565b565b6000546001600160a01b03163314610660576040516311a8a1bb60e31b815260040160405180910390fd5b61057e816109e8565b60006060610676836107d7565b915091565b6000546001600160a01b031633146106a6576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156106c4575060025415155b156106e2576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361071057604051634a2fb73f60e11b815260040160405180910390fd5b61057e81610a29565b6001546001600160a01b03163314610744576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107569190611045565b11610774576040516324e0285f60e21b815260040160405180910390fd5b600154610633906001600160a01b0316610983565b600061079482610a77565b92915050565b6003546107d3907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b03168484610aa3565b5050565b6003546107ec906001600160a01b0316610a77565b6108275760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610452565b80516020146108625760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610452565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f00000000000000000000000000000000000000000000000000000000000000006108bb84611058565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b1580156108ff57600080fd5b505af1158015610913573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006107947f000000000000000000000000000000000000000000000000000000000000000083610ca3565b8151602014610ae35760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610452565b805115610b215760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610452565b6000610b2c34610dba565b6040516366c96b3760e01b8152606060048201526000606482018190527f00000000000000000000000000000000000000000000000000000000000000006024830152602060448301529192506001600160a01b038716906366c96b3790608401602060405180830381865afa158015610baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bce919061107f565b9050610bdb826001611098565b8110610c115760405162461bcd60e51b8152602060048201526005602482015264216665657360d81b6044820152606401610452565b60405163bd45c4e760e01b81526001600160a01b0387169063bd45c4e7908490610c6990899089906000907f0000000000000000000000000000000000000000000000000000000000000000906002906004016110ab565b6000604051808303818588803b158015610c8257600080fd5b505af1158015610c96573d6000803e3d6000fd5b5050505050505050505050565b6000336001600160a01b03841614610ce75760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610452565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0496d6a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6c91906110e9565b5091509150836001600160a01b0316826001600160a01b0316148015610db157507f000000000000000000000000000000000000000000000000000000000000000081145b95945050505050565b6000600454821115610dcc5760045491505b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610df757600080fd5b813567ffffffffffffffff80821115610e1257610e12610dd0565b604051601f8301601f19908116603f01168101908282118183101715610e3a57610e3a610dd0565b81604052838152866020858801011115610e5357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610e8657600080fd5b823567ffffffffffffffff80821115610e9e57600080fd5b610eaa86838701610de6565b93506020850135915080821115610ec057600080fd5b50610ecd85828601610de6565b9150509250929050565b600060208284031215610ee957600080fd5b813567ffffffffffffffff811115610f0057600080fd5b610f0c84828501610de6565b949350505050565b6001600160a01b038116811461057e57600080fd5b600060208284031215610f3b57600080fd5b8135610f4681610f14565b9392505050565b600060208284031215610f5f57600080fd5b5035919050565b6000815180845260005b81811015610f8c57602081850181015186830182015201610f70565b506000602082860101526020601f19601f83011685010191505092915050565b8215158152604060208201526000610f0c6040830184610f66565b606081526000610fda6060830186610f66565b8281036020840152610fec8186610f66565b91505060018060a01b0383166040830152949350505050565b6040815260006110186040830185610f66565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156107945761079461102f565b80516020808301519190811015611079576000198160200360031b1b821691505b50919050565b60006020828403121561109157600080fd5b5051919050565b808201808211156107945761079461102f565b600060018060a01b03808816835260a060208401526110cd60a0840188610f66565b9516604083015250606081019290925260809091015292915050565b6000806000606084860312156110fe57600080fd5b835161110981610f14565b60208501516040909501519096949550939250505056fea26469706673582212202146b0cc86e78460292f1a5be4e0884ca64667ff8345b0880da7551aa643fa1564736f6c63430008110033";

type MultichainHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultichainHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultichainHubConnector__factory extends ContractFactory {
  constructor(...args: MultichainHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultichainHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    ) as Promise<MultichainHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    );
  }
  override attach(address: string): MultichainHubConnector {
    return super.attach(address) as MultichainHubConnector;
  }
  override connect(signer: Signer): MultichainHubConnector__factory {
    return super.connect(signer) as MultichainHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultichainHubConnectorInterface {
    return new utils.Interface(_abi) as MultichainHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultichainHubConnector;
  }
}
