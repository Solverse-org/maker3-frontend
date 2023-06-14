import LogoImage from "@/assets/images/maker3-logo.svg";
import Image from "next/image";

export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<Image src={LogoImage} alt="Maker3 logo" width={25} height={25} />
			<h1 className="font-semibold text-xl text-accent">Maker3</h1>
		</div>
	);
}
