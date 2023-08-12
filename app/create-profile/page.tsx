"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStorage } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { FormEvent } from "react";

interface Profile {
	name: string;
	email: string;
	bio: string;
}

export default function CreateProfile() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [bio, setBio] = React.useState("");

	const storage = useStorage();

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		console.log({ name, email, bio });

		// upload profile to uri
		if (!storage) return;
		const profile: Profile = {
			name,
			email,
			bio,
		};
		const uri = await storage.upload(profile);
		console.log({ uri });

		// TODO: write data to contract
	}

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
					<Card>
						<CardHeader>Create profile</CardHeader>
						<CardContent>
							<form onSubmit={onSubmit} className="flex flex-col gap-2">
								<Input
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<Input
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Textarea
									placeholder="Bio"
									value={bio}
									onChange={(e) => setBio(e.target.value)}
								/>
								<Button>Create</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
