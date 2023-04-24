import { HTMLAttributes } from "react";
import { StyleButton } from "./button.styles";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
	return <StyleButton {...props} />;
}
