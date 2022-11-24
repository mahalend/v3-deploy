import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IACLManager, IACLManagerInterface } from "../../../../../@mahalend/core-v3/contracts/interfaces/IACLManager";
export declare class IACLManager__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IACLManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IACLManager;
}