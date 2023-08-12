"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PropsWithChildren } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");

const THIRDWEB_CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

export default function Provider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<ThirdwebProvider clientId={THIRDWEB_CLIENT_ID}>
				<WalletProvider wallets={[new SolflareWalletAdapter()]} autoConnect>
					<WalletModalProvider>{children}</WalletModalProvider>
				</WalletProvider>
			</ThirdwebProvider>
		</ThemeProvider>
	);
}
