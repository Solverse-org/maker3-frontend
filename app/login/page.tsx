import Button from "@/components/button";
import Logo from "@/components/logo";

export default function Login() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4">
					<Logo />
				</div>
			</header>
			<section className="flex-1 grid place-content-center">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="bg-[#101010] rounded-md px-8 py-6 text-[#b7b7b7] flex flex-col items-center gap-4">
						<h2 className="text-xl">Get started</h2>
						<Button>Connect wallet</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
