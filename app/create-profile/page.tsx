"use client";

import Logo from "@/components/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStorage } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { FormEvent } from "react";

export default function CreateProfile() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [bio, setBio] = React.useState("");
	const [avatarFile, setAvatarFile] = React.useState("");

	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const storage = useStorage();

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		console.log({ name, email, bio, avatarFile });

		// upload profile to uri
		// TODO: call from server
		if (!storage) return;
		const profile = {
			name,
			email,
			bio,
			avatar: avatarFile,
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
							<form
								onSubmit={onSubmit}
								className="flex flex-col gap-2 w-[320px]"
							>
								<Avatar
									className="place-self-center w-20 h-20 hover:cursor-pointer mb-3"
									onClick={() => fileInputRef.current?.click()}
								>
									<AvatarImage src={avatarFile ?? ""} />
									<AvatarFallback>
										{name ? name.substring(0, 2).toUpperCase() : ""}
									</AvatarFallback>
								</Avatar>
								<Input
									ref={fileInputRef}
									id="avatar"
									type="file"
									className="hidden"
									onChange={(e) => {
										const files = fileInputRef.current?.files;
										if (!files) return;
										const file = URL.createObjectURL(files[0]);
										console.log({ file });
										setAvatarFile(file);
									}}
								/>
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
								<Button className="mt-2">Create</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	);
}
