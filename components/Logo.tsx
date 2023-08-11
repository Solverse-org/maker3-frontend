import maker3Logo from "@/assets/images/maker3-logo.svg";
import Image from "next/image";

export default function Logo() {
	return (
		<div className="flex gap-3 items-center hover:opacity-90">
			<Image src={maker3Logo} alt="Maker3" width={32} height={32} />
			<p className="text-2xl font-bold">Maker3</p>
		</div>
	);
}
