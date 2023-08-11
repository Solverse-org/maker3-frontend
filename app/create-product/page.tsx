"use client";

import CubeImage from "@/assets/images/bg-cubes.svg";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent } from "react";

export default function CreateProduct() {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		console.log("Create product");
		console.log({ title, description });

		// TODO: upload product on uri and write to contract.
	}

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
				<div className="container mx-auto max-w-6xl px-4">
					<div className="bg-[#101010] rounded-md text-[#b7b7b7] flex">
						<div>
							<Image src={CubeImage} width={400} height={100} alt="" />
						</div>
						<div className="flex items-center justify-center gap-4 flex-col px-10 bg-[#05050d]">
							<h2 className="text-center text-[#9d9d9d] text-xl font-medium py-4">
								Create product
							</h2>
							<form className="flex flex-col gap-2 w-full" onSubmit={onSubmit}>
								<div className="flex flex-col gap-1">
									<input
										id="title"
										type="text"
										placeholder="Title"
										className="rounded-md h-10 bg-[#272727] placeholder:text-[#4d4d4d] px-4 py-2"
										onChange={(e) => setTitle(e.target.value)}
										value={title}
									/>
								</div>
								<div>
									<textarea
										id="description"
										placeholder="Description"
										className="bg-[#272727] placeholder:text-[#4d4d4d] px-4 py-2 rounded-md"
										onChange={(e) => setDescription(e.target.value)}
										value={description}
									/>
								</div>
								<Button>Create product</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
