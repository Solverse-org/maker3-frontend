"use client";

import CreateProductForm from "@/components/CreateProductForm";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function CreateProduct() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4">
					<Link href={"/"}>
						<Logo />
					</Link>
				</div>
			</header>
			<section className="flex-1 grid place-content-center">
				<div className="container mx-auto max-w-6xl px-4 mb-4">
					<CreateProductForm />
				</div>
			</section>
		</div>
	);
}
