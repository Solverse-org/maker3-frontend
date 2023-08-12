"use client";

import { IDL, Contract as Maker3Contract } from "@/anchor/types/contract";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { AnchorProvider, Program } from "@project-serum/anchor";
import {
	useAnchorWallet,
	useConnection,
	useWallet,
} from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import React from "react";

const PROGRAM_ADDRESS = process.env.NEXT_PUBLIC_PROGRAM_ADDRESS;

export default function Login() {
	const [provider, setProvider] = React.useState<AnchorProvider | null>(null);
	const { connected } = useWallet();
	const { connection } = useConnection();
	const wallet = useAnchorWallet();
	const router = useRouter();

	React.useEffect(() => {
		if (!connection || !wallet) return;

		const provider = new AnchorProvider(connection, wallet, {
			commitment: "confirmed",
		});
		setProvider(provider);

		const programId = new PublicKey(
			"GSgoPM6DQUfXt5Vsom7H8nwQX9NDqQNnNdMDxfNvEQ8s"
		);
		const program = new Program<Maker3Contract>(IDL, programId);

		async function fetchCreatorAccount() {
			if (!wallet) return;

			const sellers = await program.account.seller.all();
			const isSellerPresent = sellers.find(
				(seller) => seller.account.authority === wallet?.publicKey
			);
			if (isSellerPresent) {
				console.log("found seller");
			} else {
				console.log("no seller found");
				router.push("/create-profile");
			}
		}
		fetchCreatorAccount();
	}, [connection, wallet, router]);

	React.useEffect(() => {
		async function fetchProgram() {
			if (!connected) return;
			console.log("wallet is connected");

			// TODO: after wallet is connected check if profile is already there. if it is there go to creator profile page. if not go to create profile page.
		}

		fetchProgram();
	}, [connected]);

	return (
		<div className="min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4">
					<nav className="flex items-center justify-between w-full">
						<Logo />
						<ModeToggle />
					</nav>
				</div>
			</header>
			<section className="flex-1 grid place-content-center">
				<div className="container mx-auto max-w-6xl px-4">
					<Card className="p-4">
						<CardContent className="mt-2 flex flex-col gap-3 items-center">
							<h2 className="text-xl">Get started</h2>
							<WalletMultiButton />
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
