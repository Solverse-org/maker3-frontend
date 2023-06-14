import Link from "next/link";
import Button from "./button";
import Logo from "./logo";

export default function Nav() {
	return (
		<header className="py-4">
			<div className="container mx-auto md:max-w-6xl px-4 flex items-center justify-between">
				<Logo />
				<nav>
					<ul className="flex items-center gap-3">
						<li>
							<Link href="/">discover</Link>
						</li>
						<li>
							<Link href="/">creators</Link>
						</li>
						<li>
							<Link href="/">contact us</Link>
						</li>
					</ul>
				</nav>
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
