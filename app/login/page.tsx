"use client";

import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { Card, CardContent } from "@/components/ui/card";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
	const router = useRouter();

	// todo: after wallet is connected check if profile is already there. if it is there go to creator profile page. if not go to create profile page.

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
