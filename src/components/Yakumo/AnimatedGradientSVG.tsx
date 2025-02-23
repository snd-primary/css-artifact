import React from "react";

type AnimatedGradientProps = {
	gradientId: string;
	startColor: string;
	endColor: string;
	duration: number;
	delay?: number;
	repeat?: boolean;
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
	gradientId,
	startColor,
	endColor,
	duration = 2,
	delay = 0,
	repeat = false,
}) => {
	const animationProps = {
		dur: `${duration}s`,
		begin: `${delay}s`,
		repeatCount: repeat ? "indefinite" : "1",
		fill: repeat ? "none" : "freeze",
	};
	return (
		<defs>
			<linearGradient
				id={gradientId}
				x1="0%"
				y1="0%"
				x2="100%"
				y2="0%"
				gradientUnits="objectBoundingBox"
				spreadMethod="reflect"
			>
				<stop offset="0%" stopColor={startColor} />
				<stop offset="100%" stopColor={endColor} />

				<animate
					attributeName="x1"
					type="translate"
					from="0%"
					to="100%"
					{...animationProps}
				/>
				<animate
					attributeName="x2"
					type="translate"
					from="100%"
					to="200%"
					{...animationProps}
				/>
			</linearGradient>
		</defs>
	);
};

export const TextGradient: React.FC = () => {
	return (
		<svg width="300" height="100" viewBox="0 0 300 100">
			<AnimatedGradient
				gradientId="simpleGradient"
				startColor="#ffBBBB"
				endColor="#0000ff"
				duration={1}
				delay={0}
				repeat={false}
			/>
			<rect width="300" height="100" fill="url(#simpleGradient)" />
		</svg>
	);
};
