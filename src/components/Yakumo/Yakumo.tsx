import { useRef } from "react";
import {
	useCardAnimation,
	AnimationConfig,
} from "../../hooks/useCardAnimation";
import "./Yakumo.css";

/* type AnimationOptions = {
	duration: number;
	delay: number;
	fill: FillMode | undefined;
	easing: string;
} */

function Yakumo() {
	// const elementRef = useRef<HTMLDivElement>(null);

	//簡単な例
	/* 	useEffect(() => {
		const card = elementRef.current;

		if (!card) return;

		const UPDATE = ({ x, y }: { x: number; y: number }) => {
			const BOUNDS = card.getBoundingClientRect();
			const posX = x - BOUNDS.x;
			const posY = y - BOUNDS.y;
			const ratioX: string = String(posX / BOUNDS.width);
			const ratioY: string = String(posY / BOUNDS.height);
			card.style.setProperty("--ratio-x", ratioX);
			card.style.setProperty("--ratio-y", ratioY);
		};

		document.body.addEventListener("pointermove", UPDATE);
	}, []); */

	//WebAnimationAPIを使った例｀
	/* 	useEffect(() => {
		const cardEl = elementRef.current;
		if (!cardEl) return;

		//要素の領域を取得
		const width = cardEl.clientWidth;
		const height = cardEl.clientHeight;

		const pSize = 900;

		const animationOptions: AnimationOptions = {
			duration: 10,
			delay: 0,
			fill: "forwards",
			easing: "ease-out",
		};

		const getKeyframes = (transform: string): Keyframe[] => [
			{
				transform,
			},
		];

		const handleMove = (e: MouseEvent) => {
			//マウスカーソルの座標を取得
			const xVal = Math.round(e.offsetX);
			const yVal = Math.round(e.offsetY);

			//mousemove時の変化量を定義
			const yRotation = 10 * ((xVal - width / 2) / width);
			const xRotation = 10 * ((yVal - height / 2) / height);

			cardEl.animate(
				getKeyframes(
					`perspective(${pSize}px) scale(1) rotateX(${xRotation}deg) rotateY( ${yRotation}deg)`
				),
				animationOptions
			);
		};

		const handleMouseOut = () => {
			cardEl.animate(
				getKeyframes(`perspective(${pSize}px) scale(1) rotateX(0) rotateY(0)`),
				animationOptions
			);
		};

		cardEl.addEventListener("mousemove", handleMove);
		cardEl.addEventListener("mouseout", handleMouseOut);
	}, []) */

	const animationConfig: AnimationConfig = {
		perspective: 1000,
		rotationFactor: 20,
		duration: 100,
		easing: "ease-in",
	};
	const cardRef = useCardAnimation(animationConfig);
	return (
		<>
			<div className="container" ref={cardRef}>
				<svg
					viewBox="0 0 2017 1565"
					xmlns="http://www.w3.org/2000/svg"
					id="yakumoSvg"
				>
					<rect
						x="9"
						y="9"
						width="1999"
						height="1547"
						rx="47"
						stroke="var(--bg-stroke)"
						strokeWidth="17"
						className="backplate"
					/>
					<path
						className="lmark-outer"
						d="M401.5 170.5C394.5 170.5 381.5 177.5 381.5 188.5V393C381.5 408 395 413.5 401.5 413.5H547.5C562.5 413.5 569 401.5 569 395V189C569 176 555 170.5 548 170.5H401.5Z"
					/>
					<path
						className="lmark-inner"
						d="M546.5 217.5V192.5C485 199.5 463.119 233 457 258.5C452.428 277.553 455.701 299.212 449.5 317.5C442.906 336.946 427.701 354.766 404 364.5V389.5L546.5 389.665V362.5H452.5C468.5 353.5 477.229 324.597 479.5 300C482.483 267.692 483.292 250.727 499.5 237.5C508.877 229.847 523.41 220.982 546.5 217.5Z"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M522 509.995L505.5 608.495L564.5 607.495L573 839.495H667.5L658.5 605.495H675.5L661 656.495H752L768.5 599.5L774.5 600C785.999 601 783.501 608.493 782.5 611.494L782.5 611.495C780.773 616.677 778.668 624.823 771.5 635.995C758.94 655.572 737.5 682.495 727 694.495H827C862.5 649.998 873.577 616.737 875 586.5C876.041 564.377 867.988 544.568 854 529.5C841.116 515.621 823.549 505.539 795.5 506.495L809 461H717L704.5 506.5L654.5 507.5L652.5 461H558.5L560.5 509L522 509.995ZM528 589.5L538.5 528.5L579.5 527.5L577.5 479.5H635.5L636.5 526.5L717.5 525.5L731 479.5H785L771 524.5L809.5 526C827.254 529.452 844.786 540.698 852.5 564C860.428 587.948 855.303 623.6 818 675.5H766.5C791 647 813 607.624 796 590C791.478 585.312 785 581.5 775.5 581.5H753.5L737.5 637.5H685.5L700.5 586.5L638.5 587.5L647.5 820.5H591.5L582.5 588.5L528 589.5Z"
						className="text-ya-outer"
					/>
					<path
						d="M538.5 528.5L528 589.5L582.5 588.5L591.5 820.5H647.5L638.5 587.5L700.5 586.5L685.5 637.5H737.5L753.5 581.5H775.5C785 581.5 791.478 585.312 796 590C813 607.624 791 647 766.5 675.5H818C855.303 623.6 860.428 587.948 852.5 564C844.786 540.698 827.254 529.452 809.5 526L771 524.5L785 479.5H731L717.5 525.5L636.5 526.5L635.5 479.5H577.5L579.5 527.5L538.5 528.5Z"
						className="text-ya-inner"
					/>
					<path
						d="M912.5 600.5C919 595 1083 461.5 1083 461.5H1240.5L1046.5 624.5C1036 633.5 1037 633 1046.5 643.5L1225.33 839.5H1076.5C1076.5 839.5 913 651.5 911.5 649.5C910 647.5 901 637.5 901 625.5C901 613.5 906 606 912.5 600.5Z"
						className="text-ku-outer"
					/>
					<path
						d="M1188.49 480.5H1089.49C1089.49 480.5 948.995 595.5 942.494 600.5C928.089 611.58 920.854 618.27 921 625.5C921.163 633.604 930.273 642.259 942.496 656C946.499 660.5 1085.49 820.5 1085.49 820.5H1181.49L1028.49 652.5C1015.99 639 1015.99 624.5 1029.49 613.5L1188.49 480.5Z"
						className="text-ku-inner"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1288.5 484.5L1363.5 483.5L1368.5 461.5H1479.5L1473.5 482.5H1567.5L1548.5 569.5L1450.5 570.5L1448.5 581.5H1542.5L1523.5 668.5L1425.5 669.5C1424.38 674.986 1422.91 680.753 1421.46 686.472C1416.43 706.24 1411.54 725.44 1421.5 730.5C1424.68 732.115 1428.59 733.375 1433 733.5C1451.99 734.039 1480.81 719.341 1499.5 696.5C1504.46 690.435 1508.25 683.529 1511.5 676.5L1620.5 677.5C1579.01 754.053 1527.67 795.552 1479.5 818.5C1421.78 846 1366 846.77 1339 833C1289 807.5 1287.32 775 1297 739.5C1298.5 734 1315.5 670.5 1315.5 670.5H1244.5L1263.5 583.5L1338.5 582.5L1340.5 571.5H1269.5L1288.5 484.5ZM1293 553L1303.5 503.5L1377.5 502.5L1383 480H1455L1449.5 502L1544 501L1534 551L1436.5 552L1424 601L1519 600L1509 650L1411.5 651C1411.5 651 1400.31 693 1398.5 702C1383.2 778 1479.32 762.293 1523.5 696.5H1586.5C1523.5 797 1389.06 852 1331 805C1320.5 796.5 1310.5 781.5 1312 766.5C1313.5 751.5 1329.97 690.033 1340.5 651.5L1268 652L1278.5 602.5L1353 601.5L1365.5 552.5L1293 553Z"
						className="mo-outer"
					/>
					<path
						d="M1303.5 503.5L1293 553L1365.5 552.5L1353 601.5L1278.5 602.5L1268 652L1340.5 651.5C1329.97 690.033 1313.5 751.5 1312 766.5C1310.5 781.5 1320.5 796.5 1331 805C1389.06 852 1523.5 797 1586.5 696.5H1523.5C1479.32 762.293 1383.2 778 1398.5 702C1400.31 693 1411.5 651 1411.5 651L1509 650L1519 600L1424 601L1436.5 552L1534 551L1544 501L1449.5 502L1455 480H1383L1377.5 502.5L1303.5 503.5Z"
						className="mo-inner"
					/>
					<path
						className="cloud1"
						d="M429.5 1067.5C421.5 1067.5 401 1075.5 407 1107C395.333 1104.33 371.8 1105.2 371 1130C370.2 1154.8 402.667 1162.67 419 1163.5L571.5 1163C588.5 1163 580 1155 567 1151C543 1142.5 545 1119.5 543.5 1119.5C541 1119.5 497.5 1120.5 493.5 1120.5C489.5 1120.5 485.5 1119.5 485.5 1115C485.5 1110.5 489.5 1108.96 491 1108C511 1095.14 509 1070 480.5 1067.5H429.5Z"
					/>
					<path
						className="cloud2"
						d="M632.501 979.5C502.501 979.5 511.501 1091.5 565.001 1091.5C544 1101 536.5 1145.5 597 1159.5C608.5 1162.16 653.5 1157.5 745 1157C756.075 1157 764 1148 764 1141C764 1136 757 1134.5 757 1134.5C704.5 1122.5 698.5 1126 698.5 1122C698.5 1118 720.5 1124 720.5 1102C720.5 1083 707 1078 696.5 1078C659.5 1076.5 639 1076.19 634.5 1073C622.599 1064.57 609.221 1046.79 633.882 1047.48C634.25 1047.49 634.6 1047.71 634.768 1048.03C648.201 1074.12 699.917 1082.84 725.5 1059C747.5 1038.5 758.501 979.5 632.501 979.5Z"
					/>
					<path
						className="cloud3"
						d="M616.503 1250.33C635.003 1240.62 654.503 1200.33 588.003 1186.83C579 1185 569.5 1185.92 562 1186.33C544.168 1187.3 522.179 1190.06 505.5 1194.83C476.899 1203.01 455 1214.56 455 1239.83C455.5 1252.83 456 1274.83 502.003 1274.83C503.003 1271.83 506.503 1264.53 512.503 1259.33C502.575 1274.16 501.052 1288.32 511.5 1297.5C516.315 1301.73 524.065 1305.93 534.003 1306.83C539.503 1307.33 573.003 1310.33 734.503 1310.33C727.17 1308.16 708.803 1300.43 694.003 1286.83C675.003 1285.83 634.003 1283.83 617.003 1282.83C607.003 1282.24 593.836 1278.83 590.503 1270.83C589.101 1267.47 592.703 1262.25 603.003 1256.33C606.003 1254.61 613.646 1251.83 616.503 1250.33Z"
					/>
					<path
						className="cloud4"
						d="M910.5 1049C906 1042 845 1018 820.5 1065.5C797 1062.5 782.5 1072.73 777 1088.5C775.301 1093.37 775.727 1099.5 777 1103C785 1125 776 1134 762.5 1154C781.5 1154 802 1161.5 820.5 1190.5C823.006 1186.4 833.5 1171.5 845.5 1163C857.5 1154.5 882.5 1148.5 898 1171C918.667 1171.83 961.1 1186.4 965.5 1238L989 1240.5C982.5 1216.5 983.5 1200.5 998 1180L972.5 1164.5C990.5 1154 1035.21 1134.5 1021 1074.5C1016.5 1055.5 976 1000.5 910.5 1049Z"
					/>
					<path
						className="cloud5"
						d="M925.503 1296C933 1300 955 1308.5 974.003 1312.5C933.5 1334.5 803.5 1338 771.002 1314C701.314 1301.88 678.37 1273.3 677.499 1244.5C676.413 1208.59 711.846 1173.12 753 1171.5C776.883 1170.56 800.88 1169.83 820.002 1201.5C853.745 1160.74 901.5 1175.04 929 1193.5C962.5 1215.99 981.959 1264.26 925.503 1296Z"
					/>
					<path
						className="cloud6"
						d="M1205.5 1252.5C1222.5 1239 1226.59 1221.5 1226.5 1212.5C1226.5 1144 1181 1117 1133 1117C1107.5 1117 1090.37 1120.56 1076.01 1129.5C1056.5 1128 1032.09 1133.5 1011.5 1158.5C1001.26 1170.93 994.833 1185.99 996.5 1208.5C999.796 1253 1013.86 1267.72 1032 1277.5C1047 1285.58 1062 1290 1088.51 1289C1061 1314.5 1009 1326 998 1329C987 1332 942 1341.5 942 1341.5C1039.5 1355 1188 1341 1207.5 1333C1271.5 1308 1235.5 1269.5 1205.5 1252.5Z"
					/>
					<path
						className="cloud7"
						d="M1235.5 1229L1223.5 1255C1235 1259 1242.5 1265.5 1248 1274.5C1255.5 1272.5 1271 1270.5 1288.5 1268.5C1289 1263.5 1293 1253.5 1302 1239L1235.5 1229Z"
					/>
					<path
						className="cloud8"
						d="M1485.5 1157C1473.49 1139.5 1448 1114 1385.5 1120C1363.54 1122.11 1335.72 1137.77 1318.5 1160.5C1300.05 1184.86 1293.7 1216.89 1317.5 1235C1334.5 1228 1355 1220.5 1377 1245V1251.5C1364.5 1235 1354.5 1225.72 1325.5 1235C1313 1239 1295.3 1260.4 1304.5 1274C1316.5 1290 1320 1324.5 1245 1320L1231 1340C1292 1340 1373 1339.5 1421 1337.5C1469 1335.5 1530 1296 1473.5 1268.5C1475.17 1263.83 1475.9 1251.7 1467.5 1238.5C1494.66 1220.87 1507.81 1189.5 1485.5 1157Z"
					/>
					<path
						className="cloud9"
						d="M1667.5 1131C1701.5 1089.5 1660.5 1062.5 1593.5 1067.5C1602.5 1059.5 1604.5 1042.5 1604.5 1036C1604.5 991.5 1550.5 978.5 1503.5 978.5C1489 978.5 1473.5 980.158 1462 985C1439.35 994.535 1423.19 1007.27 1413 1019C1387.2 1048.72 1397.5 1080.76 1415.5 1097C1436 1115.5 1455.86 1116.75 1468.5 1113C1487.17 1107.46 1492 1085.5 1483.5 1051C1496.5 1066 1495 1083 1493.5 1094C1536 1113 1542.5 1142 1507 1179.5C1511 1211 1501 1222.5 1482 1239C1483.5 1248.5 1484 1261.5 1482.5 1266.5C1678.05 1240.23 1680 1171 1646 1139.5C1643.3 1137 1632.5 1126 1626.5 1120C1643 1117.5 1662 1126.5 1667.5 1131Z"
					/>
				</svg>
			</div>
		</>
	);
}

export default Yakumo;
