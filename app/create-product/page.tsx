"use client";

import CreateProductForm from "@/components/CreateProductForm";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { atom, useAtom } from "jotai";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export const createProductSuccess = atom(false);
export const createProductError = atom(false);

export default function CreateProduct() {
	const [isCreateProductSuccess, setIsCreateProductSuccess] =
		useAtom(createProductSuccess);
	const [isCreateProductError, setIsCreateProductError] =
		useAtom(createProductError);

	React.useEffect(() => {
		if (isCreateProductError) {
			toast({
				variant: "destructive",
				title: "Uh oh! There was some error",
				description: "Failed to create product",
			});
			setIsCreateProductError(false);
		}
	}, [isCreateProductError, setIsCreateProductError]);

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
					{isCreateProductSuccess ? (
						<CreateProductSuccess />
					) : (
						<CreateProductForm />
					)}
				</div>
			</section>
		</div>
	);
}

function CreateProductSuccess() {
	return (
		<Card className="p-4">
			<CardContent className="mt-4 ">
				<div className="flex flex-col items-center gap-3">
					<CheckCircle className="w-10 h-10 text-green-500" />
					<p className="text-lg">Product created successfully</p>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-center gap-1">
				<Link href="/create-product">
					<Button>Go to product page</Button>
				</Link>
				<Button variant="link">Go to profile</Button>
			</CardFooter>
		</Card>
	);
}
