import { hre } from '../misc-utils';

const getEthersSigners = async () => {
    const ethersSigners = await hre.ethers.getSigners();
    return ethersSigners;
};

export const getFirstSigner = async () => (await getEthersSigners())[0];