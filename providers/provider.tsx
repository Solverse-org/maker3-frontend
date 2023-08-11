"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { PropsWithChildren } from "react";

export default function Provider({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
}
