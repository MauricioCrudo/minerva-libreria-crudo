import Lottie from "lottie-react";
import LoaderBalls from "../../assets/images/LoaderBalls.json";
export default function Loader() {
	const options = {
		loop: true,
		autoplay: true,
		animationData: LoaderBalls,
		style: {
			width: "20%",
		},
	};
	return (
		<div className="loader-wrapper">
			<Lottie {...options} />
		</div>
	);
}
