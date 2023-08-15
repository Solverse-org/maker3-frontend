"use client";

import CreateProfileForm from "@/components/CreateProfileForm";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { atom, useAtom } from "jotai";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export const createProfileError = atom(false);
export const createProfileSuccess = atom(false);

export default function CreateProfile() {
	const [isCreateProfileError, setIsCreateProfileError] =
		useAtom(createProfileError);
	const [isCreateProfileSuccess, setIsCreateProfileSuccess] =
		useAtom(createProfileSuccess);

	const { toast } = useToast();

	React.useEffect(() => {
		if (isCreateProfileError) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "Failed to create profile",
			});
			setIsCreateProfileError(false);
		}
	}, [isCreateProfileError, setIsCreateProfileError, toast]);

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
					{isCreateProfileSuccess ? (
						<CreateProfileSuccess />
					) : (
						<CreateProfileForm />
					)}
				</div>
			</section>
		</div>
	);
}

function CreateProfileSuccess() {
	return (
		<Card className="p-4">
			<CardContent className="mt-4 ">
				<div className="flex flex-col items-center gap-3">
					<CheckCircle className="w-10 h-10 text-green-500" />
					<p className="text-lg">Profile created successfully</p>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-center gap-1">
				<Link href="/create-product">
					<Button>Create product</Button>
				</Link>
				<Button variant="link">Go to profile</Button>
			</CardFooter>
		</Card>
	);
}
