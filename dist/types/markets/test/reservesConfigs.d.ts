import { eContractid, IReserveParams } from "../../helpers/types";
export declare const strategyDAI: IReserveParams;
export declare const strategyUSDC: IReserveParams;
export declare const strategyAAVE: IReserveParams;
export declare const strategyWETH: {
    strategy: {
        name: string;
        optimalUsageRatio: string;
        baseVariableBorrowRate: string;
        variableRateSlope1: string;
        variableRateSlope2: string;
        stableRateSlope1: string;
        stableRateSlope2: string;
        baseStableRateOffset: string;
        stableRateExcessOffset: string;
        optimalStableToTotalDebtRatio: string;
    };
    baseLTVAsCollateral: string;
    liquidationThreshold: string;
    liquidationBonus: string;
    liquidationProtocolFee: string;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    flashLoanEnabled: boolean;
    reserveDecimals: string;
    aTokenImpl: eContractid;
    reserveFactor: string;
    supplyCap: string;
    borrowCap: string;
    debtCeiling: string;
    borrowableIsolation: boolean;
};
export declare const strategyLINK: IReserveParams;
export declare const strategyWBTC: IReserveParams;
export declare const strategyUSDT: {
    strategy: {
        name: string;
        optimalUsageRatio: string;
        baseVariableBorrowRate: string;
        variableRateSlope1: string;
        variableRateSlope2: string;
        stableRateSlope1: string;
        stableRateSlope2: string;
        baseStableRateOffset: string;
        stableRateExcessOffset: string;
        optimalStableToTotalDebtRatio: string;
    };
    baseLTVAsCollateral: string;
    liquidationThreshold: string;
    liquidationBonus: string;
    liquidationProtocolFee: string;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    flashLoanEnabled: boolean;
    reserveDecimals: string;
    aTokenImpl: eContractid;
    reserveFactor: string;
    supplyCap: string;
    borrowCap: string;
    debtCeiling: string;
    borrowableIsolation: boolean;
};
export declare const strategyEURS: {
    strategy: {
        name: string;
        optimalUsageRatio: string;
        baseVariableBorrowRate: string;
        variableRateSlope1: string;
        variableRateSlope2: string;
        stableRateSlope1: string;
        stableRateSlope2: string;
        baseStableRateOffset: string;
        stableRateExcessOffset: string;
        optimalStableToTotalDebtRatio: string;
    };
    baseLTVAsCollateral: string;
    liquidationThreshold: string;
    liquidationBonus: string;
    liquidationProtocolFee: string;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    flashLoanEnabled: boolean;
    reserveDecimals: string;
    aTokenImpl: eContractid;
    reserveFactor: string;
    supplyCap: string;
    borrowCap: string;
    debtCeiling: string;
    borrowableIsolation: boolean;
};