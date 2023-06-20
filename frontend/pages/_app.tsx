import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
        activeChain={{
          // === Required information for connecting to the network === \\
          chainId: 7001, // Chain ID of the network
          // Array of RPC URLs to use
          rpc: ["https://api.athens2.zetachain.com/evm"],

          // === Information for adding the network to your wallet (how it will appear for first time users) === \\
          // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
          nativeCurrency: {
            decimals: 18,
            name: "ZETA",
            symbol: "aZETA",
          },
          shortName: "zetatestnet", // Display value shown in the wallet UI
          slug: "zetatestnet", // Display value shown in the wallet UI
          testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
          chain: "ZetaChaintestnet", // Name of the network
          name: "Zeta Testnet", // Name of the network
    }} >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
