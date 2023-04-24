import { Container, IContainer } from "./3DCard.styles";

interface IDCard extends IContainer {
	children: JSX.Element;
}

export default function DCard({ children, color, width, height }: IDCard) {
	return (
		<Container
			color={color}
			width={width}
			height={height}>
			<li>
				<a href='#'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span>{children}</span>
				</a>
			</li>
		</Container>
	);
}
