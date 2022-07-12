import Header from "./Header";

export default function Layout(props) {
	const { children } = props;

	return (
		<div className="l-wrapper">
			<Header />
			<div className="l-grid">{children}</div>
		</div>
	);
}
