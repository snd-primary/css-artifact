import { style } from "@vanilla-extract/css";

export const appStyle = style({
	display: "grid",
	placeItems: "center",
	placeContent: "center",
	gridTemplateColumns: "1fr",
	width: "100%",
	height: "100vh",
	background: "hsl(0, 0%, 13%)",
});
