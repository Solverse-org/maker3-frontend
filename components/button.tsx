import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
	return (
		<button className="bg-accent text-black rounded-sm px-3 py-2 text-sm font-medium">
			{children}
		</button>
	);
}
