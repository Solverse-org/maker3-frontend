"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import React, { FormEvent } from "react";

export default function CreateProfile() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [bio, setBio] = React.useState("");

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		console.log({ name, email, bio });

		// TODO: upload profile to uri and write data to contract
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
				<div className="container mx-auto max-w-6xl px-4"></div>
			</section>
		</div>
	);
}
