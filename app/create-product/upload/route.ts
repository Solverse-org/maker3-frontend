import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const formData = await request.formData();

	console.log(formData);

	const title = formData.get("title");
	const price = formData.get("price");
	const description = formData.get("description");
	const cover = formData.get("cover");
	const product = formData.get("product");

	const storage = new ThirdwebStorage({
		secretKey: process.env.THIRDWEB_SECRET_KEY,
	});

	try {
		const uri = await storage.upload({
			title,
			price,
			description,
			cover,
			product,
		});
		console.log(uri);
		return NextResponse.json({ uri });
	} catch (error) {
		console.log(error);
		return NextResponse.error();
	}
}
