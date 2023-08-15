import Provider from "@/providers/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Maker3",
	description: "Buy and sell digital products on Solana",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Provider>{children}</Provider>
				<Toaster />
			</body>
		</html>
	);
}
