import CoverImagePlaceholder from "@/assets/images/cover-image-placeholder.svg";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function CreateProductForm() {
	const [coverImageFile, setCoverImageFile] = React.useState<string>();
	const fileInputRef = React.useRef<HTMLInputElement>(null);

	return (
		<Card>
			<CardHeader>Create product</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-2 w-[400px]">
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
							onChange={(e) => {
								const files = e.target.files;
								if (!files) return;
								const file = files[0];
								setCoverImageFile(URL.createObjectURL(file));
							}}
						/>
					</div>
					<Input type="text" placeholder="Title" />
					<Input type="number" placeholder="Price (in USD)" />
					<Textarea placeholder="Description" className="h-36" />
					<div className="space-y-1">
						<Label htmlFor="product-file">Select product file</Label>
						<Input id="product-file" type="file" />
					</div>
					<Button className="mt-2">Create</Button>
				</form>
			</CardContent>
		</Card>
	);
}
