import React from "react";
import DCard from "../../src/components/3DCard/index";

describe("<DCard />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<DCard>
				<p>aaa</p>
			</DCard>
		);
	});
});
