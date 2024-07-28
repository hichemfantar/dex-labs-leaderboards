import Header from "./Header";

export default function Layout(props: any) {
	const { children } = props;

	return (
		<div className="container mx-auto">
			<Header />
			<div className="grid md:grid-cols-12 gap-y-6 md:gap-x-6 px-2">
				{children}
			</div>
			<div className="h-6"></div>
		</div>
	);
}
