import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { getProvider } from "../constants/providers";
import { getStakingContract } from "../constants/contracts.js";
import { toast } from "react-toastify"
import { ethers } from "ethers";

const useStake = () => {
    
        const { walletProvider } = useWeb3ModalProvider();
        const { address } = useWeb3ModalAccount();
    
        return useCallback(async (id,amount) => {
            const readWriteProvider = getProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();
            const amount = ethers.parseEther("0.01")
            console.log(amount);
    
            const contract = getStakingContract(signer);
    
            try {
                const transaction = await contract.stake(id,amount);
                console.log("transaction: ", transaction);
                const receipt = await transaction.wait();
    
                console.log("receipt: ", receipt);
    
                if (receipt.status) {
                    return toast.success("unstake successfully!");
                }
    
                toast.error("stake failed!");
            } catch (error) {
                console.log("error :", error);
            }
        }, [address, walletProvider]);
    }
    



export default useStake