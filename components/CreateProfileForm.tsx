import {
	createProfileError,
	createProfileSuccess,
} from "@/app/create-profile/page";
import { useSetAtom } from "jotai";
import { Loader2, LucideUserCircle } from "lucide-react";
import React, { FormEvent } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function CreateProfileForm() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [bio, setBio] = React.useState("");
	const [avatarFile, setAvatarFile] = React.useState<File | null>(null);
	const [avatarImageFile, setAvatarImageFile] = React.useState("");
	const [isUploadProfileLoading, setUploadProfileLoading] =
		React.useState(false);

	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const setIsCreateProfileError = useSetAtom(createProfileError);
	const setIsCreateProfileSuccess = useSetAtom(createProfileSuccess);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log({ name, email, bio, avatarFile });

		// TODO: submit form on server side
		const formData = new FormData();
		formData.set("name", name);
		formData.set("email", email);
		formData.set("bio", bio);
		formData.set("avatar", avatarFile!);

		setUploadProfileLoading(true);
		const res = await fetch("http://localhost:3000/create-profile/upload", {
			method: "POST",
			body: formData,
		});

		const result = await res.json();
		console.log({ result });
		if (!result) {
			setIsCreateProfileError(true);
			setUploadProfileLoading(false);
			return;
		}
		setUploadProfileLoading(false);
		setIsCreateProfileSuccess(true);

		// TODO: write data to contract
	}

	return (
		<Card>
			<CardHeader>Create profile</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[320px]">
					<Avatar
						className="place-self-center w-20 h-20 hover:cursor-pointer mb-3"
						onClick={() => fileInputRef.current?.click()}
					>
						{avatarImageFile ? (
							<AvatarImage src={avatarImageFile} />
						) : (
							<LucideUserCircle strokeWidth={1} className="w-20 h-20" />
						)}
					</Avatar>
					<Input
						ref={fileInputRef}
						type="file"
						className="hidden"
						accept="image/*"
						required
						onChange={(e) => {
							const files = e.target.files;
							if (!files) return;
							const file = files[0];
							setAvatarFile(file);
							setAvatarImageFile(URL.createObjectURL(file));
						}}
					/>
					<Input
						type="text"
						placeholder="Name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Textarea
						placeholder="Bio"
						value={bio}
						required
						onChange={(e) => setBio(e.target.value)}
					/>
					<Button className="mt-2">
						{isUploadProfileLoading && (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isUploadProfileLoading ? "Uploading profile" : "Create"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
