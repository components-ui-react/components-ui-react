import DCard from "./index";

describe("<DCard />", () => {
	it("renders", () => {
		cy.mount(
			<DCard>
				<p>3D</p>
			</DCard>
		);
	});
});
