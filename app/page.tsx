import Button from "@/components/button";
import Nav from "@/components/nav";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<Nav />
			<main className="flex-1 container mx-auto md:max-w-6xl px-4 grid place-content-center bg-cover bg-left-top gap-8">
				<div className="space-y-24">
					<h2 className="font-bold text-8xl text-center leading-4 md:text-8xl md:max-w-6xl">
						Web3 Platform For Selling{" "}
						<span className="text-accent">Digital Products</span>
					</h2>
				</div>
				<div className="place-self-center">
					<Link href="/login">
						<Button>
							<div className="flex items-center gap-2">
								<p>start selling</p>
								<LucideArrowRight width={16} height={16} />
							</div>
						</Button>
					</Link>
				</div>
			</main>
		</div>
	);
}
