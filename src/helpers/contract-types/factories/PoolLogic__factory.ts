/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolLogic, PoolLogicInterface } from "../PoolLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalDebt",
        type: "uint256",
      },
    ],
    name: "IsolationModeTotalDebtUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMinted",
        type: "uint256",
      },
    ],
    name: "MintedToTreasury",
    type: "event",
  },
];

const _bytecode =
  "0x6125ed61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c806369fc1bdf1161005a57806369fc1bdf1461010857806387b322b2146101385780639cf570231461015857600080fd5b80631e3b41451461008157806326ec273f146100a357806348c2ca8c146100e8575b600080fd5b81801561008d57600080fd5b506100a161009c366004611fbb565b610178565b005b6100b66100b13660046120cb565b6102b0565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0015b60405180910390f35b8180156100f457600080fd5b506100a16101033660046121a4565b6102ed565b81801561011457600080fd5b50610128610123366004612235565b6104d3565b60405190151581526020016100df565b81801561014457600080fd5b506100a1610153366004612310565b6108d8565b81801561016457600080fd5b506100a161017336600461234c565b6108fe565b73ffffffffffffffffffffffffffffffffffffffff811660009081526020838152604091829020825191820190925290549081905260d41c64ffffffffff1660408051808201909152600281527f38310000000000000000000000000000000000000000000000000000000000006020820152901561022d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b60405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff811660008181526020848152604080832060090180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055519182527faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a25050565b6000806000806000806102c58a8a8a8a610a3f565b50939950919750909450925090506102de868684610fa9565b93509499939850945094509450565b60005b818110156104cd57600083838381811061030c5761030c6123f4565b90506020020160208101906103219190612423565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260208781526040918290208251918201909252815490819052919250906701000000000000001661036f5750506104bb565b60088101546fffffffffffffffffffffffffffffffff1680156104b7576008820180547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016905560006103c183610fdd565b905060006103cf838361106d565b6004808601546040517f7df5bd3b00000000000000000000000000000000000000000000000000000000815292935073ffffffffffffffffffffffffffffffffffffffff1691637df5bd3b91610432918591879101918252602082015260400190565b600060405180830381600087803b15801561044c57600080fd5b505af1158015610460573d6000803e3d6000fd5b505050508473ffffffffffffffffffffffffffffffffffffffff167fbfa21aa5d5f9a1f0120a95e7c0749f389863cbdbfff531aa7339077a5bc919de826040516104ac91815260200190565b60405180910390a250505b5050505b806104c58161246d565b9150506102f0565b50505050565b60006104e282600001516110c4565b6040518060400160405280600181526020017f390000000000000000000000000000000000000000000000000000000000000081525090610550576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b5060208083015160408085015160608601516080870151875173ffffffffffffffffffffffffffffffffffffffff166000908152958a90529290942061059894909392611100565b815173ffffffffffffffffffffffffffffffffffffffff166000908152602085905260408120600301547501000000000000000000000000000000000000000000900461ffff161515806106145750825160008080526020869052604090205473ffffffffffffffffffffffffffffffffffffffff9081169116145b905080156040518060400160405280600281526020017f313400000000000000000000000000000000000000000000000000000000000081525090610686576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b5060005b8360a0015161ffff168161ffff1610156107945761ffff811660009081526020869052604090205473ffffffffffffffffffffffffffffffffffffffff1661078257835173ffffffffffffffffffffffffffffffffffffffff90811660009081526020888152604080832060030180547fffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000061ffff97909716968702179055875194835290889052812080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169390921692909217905591506108d19050565b8061078c816124a6565b91505061068a565b508260c0015161ffff168360a0015161ffff16106040518060400160405280600281526020017f313500000000000000000000000000000000000000000000000000000000000081525090610816576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b50505060a081018051825173ffffffffffffffffffffffffffffffffffffffff90811660009081526020878152604080832060030180547fffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000061ffff978816021790558651955190941682528690529190912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169290911691909117905560015b9392505050565b6108f973ffffffffffffffffffffffffffffffffffffffff84168383611253565b505050565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260208490526040902061092e838284611326565b5073ffffffffffffffffffffffffffffffffffffffff166000818152602084815260408083206003810180547501000000000000000000000000000000000000000000900461ffff16855295835290832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116909155938352949052808455600184018190556002840181905582547fffffffffffffffffff0000000000000000000000000000000000000000000000169092556004830180548216905560058301805482169055600683018054821690556007830180549091169055600882015560090180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055565b600080600080600080610a558760000151511590565b15610a915750600094508493508392508291507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905081610f9c565b610b4060405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581525090565b608088015160ff1615610b8557608088015160ff16600090815260208a9052604090206060890151610b72919061176f565b6101808401526101c08301526101a08201525b87602001518160c001511015610ea45760c08101518851610ba59161184e565b610bb95760c0810180516001019052610b85565b60c0810151600090815260208b9052604090205473ffffffffffffffffffffffffffffffffffffffff166102008201819052610bff5760c0810180516001019052610b85565b61020081015173ffffffffffffffffffffffffffffffffffffffff16600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a9083015261018082015115801590610c955750816101e00151896080015160ff16145b610d395760608901516102008301516040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063b3596f0790602401602060405180830381865afa158015610d10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3491906124c8565b610d40565b8161018001515b825260a082015115801590610d60575060c08201518951610d60916118d3565b15610e5057610d7d89604001518284600001518560200151611957565b6040830181905261010083018051610d969083906124e1565b90525060808901516101e0830151610db19160ff1690611a30565b1515610240830152608082015115610e0757816102400151610dd7578160800151610dde565b816101a001515b8260400151610ded91906124f9565b8261014001818151610dff91906124e1565b905250610e10565b60016102208301525b816102400151610e24578160a00151610e2b565b816101c001515b8260400151610e3a91906124f9565b8261016001818151610e4c91906124e1565b9052505b60c08201518951610e6091611a41565b15610e9357610e7d89604001518284600001518560200151611ac3565b8261012001818151610e8f91906124e1565b9052505b5060c0810180516001019052610b85565b610100810151610eb5576000610ed0565b80610100015181610140015181610ece57610ece612536565b045b610140820152610100810151610ee7576000610f02565b80610100015181610160015181610f0057610f00612536565b045b61016082015261012081015115610f4457610f3f816101200151610f39836101600151846101000151611c4390919063ffffffff16565b90611c86565b610f66565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b600080610fb68584611c43565b905083811015610fca5760009150506108d1565b610fd48482612565565b95945050505050565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415611023575050600101546fffffffffffffffffffffffffffffffff1690565b60018301546108d1906fffffffffffffffffffffffffffffffff80821691611061917001000000000000000000000000000000009091041684611cbd565b9061106d565b50919050565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff839004841115176110a257600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906110f857508115155b949350505050565b600485015460408051808201909152600281527f363100000000000000000000000000000000000000000000000000000000000060208201529073ffffffffffffffffffffffffffffffffffffffff1615611188576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b506001850180546b033b2e3c9fd0803ce80000007fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216811790925560028701805490911690911790556004850180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff968716179091556005860180548216948616949094179093556006850180548416928516929092179091556007909301805490911692909116919091179055565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff84166004830152602482018390529060008060448382895af16112b6573d6000803e3d6000fd5b506112c084611cfa565b6104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e7366657200000000000000000000006044820152606401610224565b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff82166113a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b5060038201547501000000000000000000000000000000000000000000900461ffff161515806113fe575060008080526020849052604090205473ffffffffffffffffffffffffffffffffffffffff8281169116145b6040518060400160405280600281526020017f38320000000000000000000000000000000000000000000000000000000000008152509061146c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b508160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150091906124c8565b60408051808201909152600281527f35350000000000000000000000000000000000000000000000000000000000006020820152901561156d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b508160060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061160191906124c8565b60408051808201909152600281527f35360000000000000000000000000000000000000000000000000000000000006020820152901561166e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b50600480830154604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff909216926318160ddd9282820192602092908290030181865afa1580156116de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170291906124c8565b60408051808201909152600281527f3534000000000000000000000000000000000000000000000000000000000000602082015290156104cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b81546000908190819081906601000000000000900473ffffffffffffffffffffffffffffffffffffffff168015611833576040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015287169063b3596f0790602401602060405180830381865afa15801561180c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183091906124c8565b91505b50945461ffff80821697620100009092041695945092505050565b60408051808201909152600281527f37340000000000000000000000000000000000000000000000000000000000006020820152600090608083106118c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b5050905160019190911b1c600316151590565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310611945576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b50509051600191821b82011c16151590565b60008061196385610fdd565b6004868101546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116938201939093529293506000928792611a09928692911690631da24f3e90602401602060405180830381865afa1580156119e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106191906124c8565b611a1391906124f9565b9050838181611a2457611a24612536565b04979650505050505050565b600082158015906108d15750501490565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310611ab3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102249190612381565b50509051600191821b1c16151590565b60068301546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526000928392911690631da24f3e90602401602060405180830381865afa158015611b39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5d91906124c8565b90508015611b7b57611b78611b7186611dc4565b829061106d565b90505b60058501546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa158015611bed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c1191906124c8565b611c1b90826124e1565b9050611c2781856124f9565b9050828181611c3857611c38612536565b049695505050505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517611c7857600080fd5b506127109102611388010490565b60008115670de0b6b3a764000060028404190484111715611ca657600080fd5b50670de0b6b3a76400009190910260028204010490565b600080611cd164ffffffffff841642612565565b611cdb90856124f9565b6301e13380900490506110f8816b033b2e3c9fd0803ce80000006124e1565b6000611d3a565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d8015611d795760208114611db357611d747f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611d01565b611067565b823b611daa57611daa7f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611d01565b60019150611067565b3d6000803e50506000511515919050565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415611e0a575050600201546fffffffffffffffffffffffffffffffff1690565b60028301546108d1906fffffffffffffffffffffffffffffffff8082169161106191700100000000000000000000000000000000909104168460006108d1838342600080611e5f64ffffffffff851684612565565b905080611e7b576b033b2e3c9fd0803ce80000009150506108d1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511611eb1576000611eb6565b600285035b925066038882915c4000611eca8a8061106d565b81611ed757611ed7612536565b0491506301e13380611ee9838b61106d565b81611ef657611ef6612536565b049050600082611f0686886124f9565b611f1091906124f9565b60029004905060008285611f24888a6124f9565b611f2e91906124f9565b611f3891906124f9565b60069004905080826301e13380611f4f8a8f6124f9565b611f59919061257c565b611f6f906b033b2e3c9fd0803ce80000006124e1565b611f7991906124e1565b611f8391906124e1565b9b9a5050505050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fb657600080fd5b919050565b60008060408385031215611fce57600080fd5b82359150611fde60208401611f92565b90509250929050565b60405160a0810167ffffffffffffffff81118282101715612031577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715612031577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715612031577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000808486036101008112156120e357600080fd5b8535945060208601359350604086013592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa00160a081121561212557600080fd5b61212d611fe7565b602082121561213b57600080fd5b612143612037565b9150606087013582528181526080870135602082015261216560a08801611f92565b604082015261217660c08801611f92565b606082015260e0870135915060ff8216821461219157600080fd5b6080810191909152939692955090935050565b6000806000604084860312156121b957600080fd5b83359250602084013567ffffffffffffffff808211156121d857600080fd5b818601915086601f8301126121ec57600080fd5b8135818111156121fb57600080fd5b8760208260051b850101111561221057600080fd5b6020830194508093505050509250925092565b803561ffff81168114611fb657600080fd5b600080600083850361012081121561224c57600080fd5b843593506020850135925060e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08201121561228757600080fd5b50612290612081565b61229c60408601611f92565b81526122aa60608601611f92565b60208201526122bb60808601611f92565b60408201526122cc60a08601611f92565b60608201526122dd60c08601611f92565b60808201526122ee60e08601612223565b60a08201526123006101008601612223565b60c0820152809150509250925092565b60008060006060848603121561232557600080fd5b61232e84611f92565b925061233c60208501611f92565b9150604084013590509250925092565b60008060006060848603121561236157600080fd5b833592506020840135915061237860408501611f92565b90509250925092565b600060208083528351808285015260005b818110156123ae57858101830151858201604001528201612392565b818111156123c0576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561243557600080fd5b6108d182611f92565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561249f5761249f61243e565b5060010190565b600061ffff808316818114156124be576124be61243e565b6001019392505050565b6000602082840312156124da57600080fd5b5051919050565b600082198211156124f4576124f461243e565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156125315761253161243e565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000828210156125775761257761243e565b500390565b6000826125b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220d7f9e472357bf40a21eba71afbeae2afce3b52da3b6e15f9d3786a40defc878664736f6c634300080a0033";

export class PoolLogic__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolLogic> {
    return super.deploy(overrides || {}) as Promise<PoolLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoolLogic {
    return super.attach(address) as PoolLogic;
  }
  connect(signer: Signer): PoolLogic__factory {
    return super.connect(signer) as PoolLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolLogicInterface {
    return new utils.Interface(_abi) as PoolLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolLogic {
    return new Contract(address, _abi, signerOrProvider) as PoolLogic;
  }
}