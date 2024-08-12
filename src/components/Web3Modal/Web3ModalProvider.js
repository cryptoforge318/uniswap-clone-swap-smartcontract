import React, { useEffect, useState, useCallback } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { useCall, WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import projectId from "../../config/key";
import { getAccount } from "@wagmi/core";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Create wagmiConfig
const metadata = {
  name: "aaa",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 2. Create modal
const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

// ConnectButton component
export function ConnectButton() {
  const [account, setAccount] = useState("");
  const [modalState, setModalState] = useState(null);

  web3Modal.subscribeState(state => setModalState(state));
  
  const checkAccount = useCallback((state) => {
    if (getAccount(config).address || state) {
      setAccount(getAccount(config).address);
    }
  }, []);

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    checkAccount(modalState ? modalState.selectedNetworkId : "");
  }, [checkAccount, modalState]);

  const handleConnect = async () => {
    try {
      // Open the modal
      web3Modal.open();
      setAccount(getAccount(config).address);
      // You can add more logic here after the connection is established
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleConnect}
        class="bg-pink-100 h-10 py-1 px-4 font-semibold rounded-full text-fuchsia-500 hover:bg-pink-200"
      >
        {account ? formatAddress(account) : "Connect"}
      </button>
    </div>
  );
}
