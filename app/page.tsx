import Nav from "@/components/nav";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<Nav />
			<main className="flex-1 container mx-auto md:max-w-6xl px-4 grid place-content-center bg-hero bg-cover bg-left-top">
				<div className="space-y-24">
					<h2 className="font-bold text-8xl text-center leading-relaxed md:text-7xl">
						Web3 Platform For Selling{" "}
						<span className="text-accent">Digital Products</span>
					</h2>
					<div className="flex items-center justify-center gap-8">
						<Link
							href="https://fiqwy7k9btl.typeform.com/to/se6eiisR"
							target="_blank"
						>
							<p className="text-lg hover:cursor-pointer hover:text-gray-400">
								Early Access
							</p>
						</Link>
						<Link href="https://discord.gg/DXn8rrnZaD" target="_blank">
							<p className="text-lg hover:cursor-pointer hover:text-gray-400">
								Join Discord
							</p>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
