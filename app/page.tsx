import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "~/assets/images/maker3-logo.svg";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image src={Logo} alt="Maker3 logo" />
						<h1 className="font-semibold text-lg text-accent">Maker3</h1>
					</div>
					<nav>
						<ul className="flex items-center gap-3 uppercase text-sm">
							<li>
								<Link href="/">Discover</Link>
							</li>
							<li>
								<Link href="/">Creators</Link>
							</li>
							<li>
								<Link href="/">Contact us</Link>
							</li>
						</ul>
					</nav>
					<div className="flex items-center gap-4">
						<Link href="/" className="text-sm">
							Login
						</Link>
						<Button>Start selling</Button>
					</div>
				</div>
			</header>
		</div>
	);
}
