// animations.ts
export interface PathColorConfig {
	initialFill: string;
	finalFill: string;
}

export interface AnimationConfig {
	duration: number;
	delay: number;
	pathColors?: Record<string, PathColorConfig>;
	defaultFill?: string;
}

export const colors = {
	darkBlue: "hsl(238, 35%, 29%)",
	darkPurple: "hsl(267, 34%, 23%)",
	gray: "hsl(0, 0%, 61%)",
	pink: "hsl(344, 59%, 64%)",
	green: "hsl(126, 43%, 67%)",
	white: "hsl(0, 0%, 97%)",
	black: "hsl(0, 0%, 13%)",
} as const;

// 明示的に型を指定
export const ANIMATION_CONFIGS: Record<string, AnimationConfig> = {
	lMark: {
		duration: 2,
		delay: 2,
		defaultFill: colors.darkBlue,
	},
	ya: {
		duration: 3.5,
		delay: 3.5,
		defaultFill: colors.darkPurple,
	},
	ku: {
		duration: 3,
		delay: 3,
		defaultFill: colors.gray,
	},
	mo: {
		duration: 3,
		delay: 3,
		defaultFill: colors.pink,
	},
	clouds: {
		duration: 3,
		delay: 3,
		defaultFill: colors.green,
		pathColors: {
			cloud1: { initialFill: colors.black, finalFill: colors.white },
			cloud2: { initialFill: colors.black, finalFill: colors.white },
			cloud3: { initialFill: colors.black, finalFill: colors.pink },
			cloud4: { initialFill: colors.black, finalFill: colors.pink },
			cloud5: { initialFill: colors.black, finalFill: colors.green },
			cloud6: { initialFill: colors.black, finalFill: colors.white },
			cloud7: { initialFill: colors.black, finalFill: colors.pink },
			cloud8: { initialFill: colors.black, finalFill: colors.white },
			cloud9: { initialFill: colors.black, finalFill: colors.pink },
		},
	},
};

export type AnimationGroupKey = keyof typeof ANIMATION_CONFIGS;

export const getAnimationConfig = (
	group: AnimationGroupKey
): AnimationConfig => {
	return ANIMATION_CONFIGS[group];
};

export const getPathColorConfig = (
	group: AnimationGroupKey,
	pathId: string
): PathColorConfig | null => {
	const config = ANIMATION_CONFIGS[group];
	return config.pathColors?.[pathId] || null;
};
