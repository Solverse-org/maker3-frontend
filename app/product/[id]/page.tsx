import ProductImage from "@/assets/images/product_image.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Product({ params }: { params: { id: string } }) {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="container max-w-6xl px-4 mx-auto py-4">
				<Image
					src={ProductImage}
					alt="Product Image"
					className="w-full rounded-md"
				/>
				<div className="flex gap-4 mt-4">
					<div>
						<h2 className="text-5xl mt-6  font-medium text-teal-600">
							256 Brutalist Element Mega Pack
						</h2>
						<div className="flex items-center gap-4 my-4">
							<div className="bg-black w-10 h-10 rounded-full"></div>
							<h3 className="text-lg">Kavee</h3>
						</div>
						<p className="text-lg">
							Enjoy this mega pack of brutalist elements! Yours free! (tips
							welcome 🙏) Use however you like! No restrictions whatsoever. No
							credit required. Perfect for: Hero section designs General web
							design Open Graph images Brochure design Social media graphics If
							you enjoyed them, please rate 5 stars 🤩
						</p>
					</div>
					<div className="w-[1400px] rounded-md  px-4 py-4 bg-gray-50 flex flex-col gap-4">
						<h3 className="text-lg font-semibold text-green-600">Price</h3>
						<div className="flex gap-4 items-center px-4 py-4 bg-black rounded-md">
							<div className="bg-green-400 px-6 py-2 rounded-full">SOL</div>
							<div className="text-white font-bold">2</div>
						</div>
						<Button>Buy</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
