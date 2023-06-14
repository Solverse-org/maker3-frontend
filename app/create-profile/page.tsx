import CubeImage from "@/assets/images/cube.svg";
import Button from "@/components/button";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export default function CreateProfile() {
	return (
		<div className="bg-black text-white min-h-screen flex flex-col">
			<header className="py-4">
				<div className="container mx-auto max-w-6xl px-4">
					<Link href={"/"}>
						<Logo />
					</Link>
				</div>
			</header>
			<section className="flex-1 grid place-content-center">
				<div className="container mx-auto max-w-6xl px-4">
					<div className="bg-[#101010] rounded-md text-[#b7b7b7] flex">
						<div>
							<Image src={CubeImage} width={400} height={100} alt="" />
						</div>
						<div className="flex items-center justify-center gap-4 flex-col px-10 bg-[#05050d]">
							<h2 className="text-center text-[#9d9d9d] text-xl font-medium py-4">
								Create profile
							</h2>
							<form className="flex flex-col gap-2 w-full">
								<div className="flex flex-col gap-1">
									<input
										id="name"
										type="text"
										placeholder="Name"
										className="rounded-md h-10 bg-[#272727] placeholder:text-[#4d4d4d] px-4 py-2"
									/>
								</div>
								<div>
									<input
										id="email"
										type="email"
										placeholder="Email"
										className="rounded-md h-10 bg-[#272727] placeholder:text-[#4d4d4d] px-4 py-2"
									/>
								</div>
								<div>
									<textarea
										id="email"
										placeholder="Bio"
										className="bg-[#272727] placeholder:text-[#4d4d4d] px-4 py-2 rounded-md"
									/>
								</div>
								<Button>Create profile</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
