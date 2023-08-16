import {
	createProductError,
	createProductSuccess,
} from "@/app/create-product/page";
import CoverImagePlaceholder from "@/assets/images/cover-image-placeholder.svg";
import { useSetAtom } from "jotai";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { FormEvent } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function CreateProductForm() {
	const [title, setTitle] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [coverImageFile, setCoverImageFile] = React.useState("");
	const [coverFile, setCoverFile] = React.useState<File | null>(null);
	const [productFile, setProductFile] = React.useState<File | null>(null);
	const [isUploadProductLoading, setIsUploadProductLoading] =
		React.useState(false);

	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const setIsCreateProductSuccess = useSetAtom(createProductSuccess);
	const setIsCreateProductError = useSetAtom(createProductError);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		console.log({ title, price, description, coverFile, productFile });

		const formData = new FormData();
		formData.set("title", title);
		formData.set("price", price);
		formData.set("description", description);
		formData.set("cover", coverFile!);
		formData.set("product", productFile!);

		setIsUploadProductLoading(true);
		const res = await fetch("http://localhost:3000/create-product/upload", {
			method: "POST",
			body: formData,
		});

		const result = await res.json();
		console.log(result);
		if (!result) {
			setIsCreateProductError(true);
			setIsUploadProductLoading(false);
		}
		setIsUploadProductLoading(false);
		setIsCreateProductSuccess(true);
	}

	return (
		<Card>
			<CardHeader>Create product</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[400px]">
					<div className="mb-2">
						<Image
							src={coverImageFile ?? CoverImagePlaceholder}
							alt="cover image"
							onClick={(e) => fileInputRef.current?.click()}
							className="hover:cursor-pointer rounded-md aspect-video"
							width={400}
							height={100}
						/>
						<Input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							className="hidden"
							required
							onChange={(e) => {
								const files = e.target.files;
								if (!files) return;
								const file = files[0];
								setCoverImageFile(URL.createObjectURL(file));
								setCoverFile(file);
							}}
						/>
					</div>
					<Input
						type="text"
						id="title"
						placeholder="Title"
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Input
						type="number"
						id="price"
						placeholder="Price (in USD)"
						required
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<Textarea
						placeholder="Description"
						id="description"
						className="h-36"
						required
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<div className="space-y-1">
						<Label htmlFor="product-file">Select product file</Label>
						<Input
							id="product-file"
							type="file"
							required
							onChange={(e) => {
								const files = e.target.files;
								if (!files) return;
								const file = files[0];
								setProductFile(file);
							}}
						/>
					</div>
					<Button className="mt-2">
						{isUploadProductLoading && (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						)}
						{isUploadProductLoading ? "Uploading product" : "Create"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
