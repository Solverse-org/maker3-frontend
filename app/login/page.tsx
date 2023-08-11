"use client";

import Logo from "@/components/Logo";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
	const { connected } = useWallet();
	const router = useRouter();

	// todo: after wallet is connected check if profile is already there. if it is there go to creator profile page. if not go to create profile page.

	React.useEffect(() => {
		if (connected) {
			console.log("wallet is connected");
			router.push("/create-profile");
		}
	}, [connected]);

	return (
		<div className="min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4">
					<Link href={"/"}>
						<Logo />
					</Link>
				</div>
			</header>
			<section className="flex-1 grid place-content-center">
				<div className="container mx-auto max-w-6xl px-4">
					<div>
						<h2 className="text-xl">Connect wallet</h2>
						<WalletMultiButton className="bg-black text-white" />
					</div>
				</div>
			</section>
		</div>
	);
}
