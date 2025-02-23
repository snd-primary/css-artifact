import { keyframes, style, createVar, globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const TIMING = {
	fill: 1.8,
	stroke: 3,
};

export const colors = {
	white: createVar(),
	black: createVar(),
	green: createVar(),
	darkBlue: createVar(),
	darkPurple: createVar(),
	gray: createVar(),
	pink: createVar(),
};

// グローバルに色を設定
globalStyle(":root", {
	vars: {
		[colors.white]: "hsl(0, 0%, 97%)",
		[colors.black]: "hsl(0, 0%, 13%)",
		[colors.green]: "hsl(126, 43%, 67%)",
		[colors.darkBlue]: "hsl(238, 35%, 29%)",
		[colors.darkPurple]: "hsl(267, 34%, 23%)",
		[colors.gray]: "hsl(0, 0%, 61%)",
		[colors.pink]: "hsl(344, 59%, 64%)",
	},
});

const strokeDuration = createVar({
	syntax: "<time>",
	inherits: true,
	initialValue: `${TIMING.stroke}s`,
});

const fillColor = createVar({
	syntax: "<color>",
	inherits: false,
	initialValue: "transparent",
});

const strokeColor = createVar({
	syntax: "<color>",
	inherits: true,
	initialValue: "hsl(0, 0%, 97%)",
});

const gradientPosition = createVar({
	syntax: "<percentage>",
	inherits: false,
	initialValue: "0%",
});

// Keyframes
export const moveGradient = keyframes({
	"0%": {
		vars: {
			[gradientPosition]: "-100%",
		},
	},
	"100%": {
		vars: {
			[gradientPosition]: "100%",
		},
	},
});

export const draw = keyframes({
	to: {
		strokeDashoffset: 0,
	},
});

export const fillIn = keyframes({
	from: {
		fill: "transparent",
	},
	to: {
		fill: fillColor,
	},
});

// Base Styles
export const Backplate = style({
	margin: 25,
	borderRadius: "2rem",
	background: `linear-gradient(
      to right,
      ${colors.darkPurple} ${gradientPosition},
      ${colors.black} ${calc.add(gradientPosition, 100)}
    )`,
	animation: `${moveGradient} ${TIMING.fill}s linear forwards`,
});

export const YakumoSVG = style({
	maxWidth: "800px",
	width: "800px",
	height: "auto",
});

export const PathDefault = style({
	strokeWidth: "1px",
	stroke: strokeColor,
	fill: "transparent",
	strokeDashoffset: 100,
	strokeDasharray: 100,
	animation: `
          ${draw} ${strokeDuration} forwards,
          ${fillIn} 0.3s forwards
        `,
	animationTimingFunction: "linear, cubic-bezier(0.51, 0.41, 0.43, 0.87)",
	animationDelay: `0s, ${calc.subtract(strokeDuration)}`,
});

// SVG Component Styles
export const LMark = {
	Outline: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Inner: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.65),
				[fillColor]: colors.darkPurple,
			},
		},
		PathDefault,
	]),
};

export const Ya = {
	Outline: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Inner: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.green,
			},
		},
		PathDefault,
	]),
};

export const Ku = {
	Outline: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Inner: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.green,
			},
		},
		PathDefault,
	]),
};

export const Mo = {
	Outline: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Inner: style([
		{
			vars: {
				[strokeDuration]: calc.multiply(`${TIMING.stroke}s`, 0.5),
				[fillColor]: colors.green,
			},
		},
		PathDefault,
	]),
};

export const Clouds = {
	Path1: style([
		{
			vars: {
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Path2: style([
		{
			vars: {
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Path3: style([
		{
			vars: {
				[fillColor]: colors.pink,
			},
		},
		PathDefault,
	]),
	Path4: style([
		{
			vars: {
				[fillColor]: colors.pink,
			},
		},
		PathDefault,
	]),
	Path5: style([
		{
			vars: {
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Path6: style([
		{
			vars: {
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Path7: style([
		{
			vars: {
				[fillColor]: colors.pink,
			},
		},
		PathDefault,
	]),
	Path8: style([
		{
			vars: {
				[fillColor]: colors.white,
			},
		},
		PathDefault,
	]),
	Path9: style([
		{
			vars: {
				[fillColor]: colors.pink,
			},
		},
		PathDefault,
	]),
};
