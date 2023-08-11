import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
	return (
		<button className="bg-accent  text-black rounded-full px-6 py-4 text-sm font-medium">
			{children}
		</button>
	);
}
