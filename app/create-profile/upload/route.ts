import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const formData = await request.formData();
	console.log({ formData });

	const name = formData.get("name");
	const email = formData.get("email");
	const bio = formData.get("bio");
	const avatar = formData.get("avatar");

	const storage = new ThirdwebStorage({
		secretKey: process.env.THIRDWEB_SECRET_KEY,
	});

	try {
		const uri = await storage.upload({
			name,
			email,
			bio,
			avatar,
		});
		console.log(uri);
		const url = storage.resolveScheme(uri);
		console.log(url);
		return NextResponse.json({ uri });
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
