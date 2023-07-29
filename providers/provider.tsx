"use client";

import { PropsWithChildren } from "react";
import { Wallet } from "./wallet";

export default function Provider({ children }: PropsWithChildren) {
	return <Wallet>{children}</Wallet>;
}
