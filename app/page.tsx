import Logo from "@/assets/images/maker3-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image src={Logo} alt="Maker3 logo" width={25} height={25} />
						<h1 className="font-semibold text-xl text-accent">Maker3</h1>
					</div>
				</div>
			</header>
			<main className="flex-1 container mx-auto max-w-8xl px-4 grid place-content-center bg-hero bg-cover bg-left-top">
				<div className="space-y-24">
					<h2 className="font-bold text-8xl text-center leading-tight">
						Web3 Platform For Selling{" "}
						<span className="text-accent">Digital Products</span>
					</h2>
					<div className="flex justify-around items-center text-xl cursor-pointer">
						<Link
							target="_blank"
							href="https://fiqwy7k9btl.typeform.com/to/se6eiisR"
						>
							<p className="hover:text-gray-300">Early access</p>
						</Link>
						<Link target="_blank" href="https://discord.gg/DXn8rrnZaD">
							<p className="hover:text-gray-300">Join Discord</p>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
