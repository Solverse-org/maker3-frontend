"use client";

import CreateProfileForm from "@/components/CreateProfileForm";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

export default function CreateProfile() {
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
					<CreateProfileForm />
				</div>
			</section>
		</div>
	);
}
