"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import { Network } from "@thirdweb-dev/sdk/solana";
import { PropsWithChildren } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Provider({ children }: PropsWithChildren) {
	const network: Network = "devnet";

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<ThirdwebProvider network={network}>
				<WalletProvider wallets={[new SolflareWalletAdapter()]} autoConnect>
					<WalletModalProvider>{children}</WalletModalProvider>
				</WalletProvider>
			</ThirdwebProvider>
		</ThemeProvider>
	);
}
