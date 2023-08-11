import LogoImage from "@/assets/images/maker3-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href={"/"} className="flex items-center gap-2 hover:opacity-80">
			<Image src={LogoImage} alt="Maker3 logo" width={36} height={36} />
			<h1 className="font-bold text-3xl text-accent">Maker3</h1>
		</Link>
	);
}
