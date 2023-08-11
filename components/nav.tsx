import Link from "next/link";
import Button from "./button";
import Logo from "./logo";

export default function Nav() {
	return (
		<header className="py-8">
			<div className="container mx-auto md:max-w-6xl px-4 flex items-center justify-between">
				<Logo />
				<NavItems />
				<div className="flex items-center gap-3">
					<Link href="/login">log in</Link>
					<Link href="/login">
						<Button>start selling</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}

function NavItems() {
	const links = ["discover", "creators", "contact us"];

	return (
		<nav>
			<ul className="flex items-center gap-3">
				{links.map((link) => (
					<li key={link}>
						<Link href="/" className="text-lg hover:opacity-80">
							{link}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
