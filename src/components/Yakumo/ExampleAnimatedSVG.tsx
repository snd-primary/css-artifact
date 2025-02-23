// シンプルな2色のグラデーションの例
export const SimpleGradient: React.FC = () => {
	return (
		<svg width="300" height="100" viewBox="0 0 300 100">
			<defs>
				<linearGradient
					id="myGradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="0%"
					gradientUnits="objectBoundingBox"
					spreadMethod="reflect"
				>
					{/* stopは、与えられた領域の変化点を定義する。
							stopで定義した変換点を線形補間することになる */}
					<stop offset="0%" stop-color="#ff0000" />
					<stop offset="100%" stop-color="#0000ff" />
					<animate
						attributeName="x1"
						type="translate"
						from="0%"
						to="100%"
						dur="2s"
						repeatCount="1"
						fill="freeze"
					/>
					<animate
						attributeName="x2"
						type="translate"
						from="100%"
						to="200%"
						dur="2s"
						repeatCount="1"
						fill="freeze"
					/>
				</linearGradient>
			</defs>
			<rect width="300" height="100" fill="url(#myGradient)" />
		</svg>
	);
};
