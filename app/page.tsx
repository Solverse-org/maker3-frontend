import Button from "@/components/button";
import Nav from "@/components/nav";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<Nav />
			<main className="flex-1 container mx-auto md:max-w-6xl px-4 grid place-content-center bg-cover bg-left-top">
				<div className="space-y-24">
					<h2 className="font-bold text-8xl text-center leading-tight md:text-7xl">
						Web3 Platform For Selling{" "}
						<span className="text-accent">Digital Products</span>
					</h2>
					<div className="flex items-center justify-center">
						<Button>start selling </Button>
					</div>
				</div>
			</main>
		</div>
	);
}
