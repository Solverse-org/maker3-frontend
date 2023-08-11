import maker3Logo from "@/assets/images/maker3-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href={"/"} className="flex gap-3 items-center hover:opacity-80">
			<Image src={maker3Logo} alt="Maker3" width={32} height={32} />
			<p className="text-2xl font-bold">Maker3</p>
		</Link>
	);
}
