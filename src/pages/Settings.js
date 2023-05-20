import React from "react";
import { MantineProvider, Tabs } from "@mantine/core";
import Profile from "../components/profile/Profile";
import { render } from "@wordpress/element";
import Paypal from "../components/paypal/Paypal";
import Account from "../components/account/Account";

const Settings = () => {
	return (
		<MantineProvider
			theme={{
				fontFamily: "Open Sans, sans-serif",
			}}
		>
			<Tabs defaultValue="profile">
				<Tabs.List>
					<Tabs.Tab value="profile" fw={500}>
						Profile
					</Tabs.Tab>
					<Tabs.Tab value="paypal" fw={500}>
						Paypal
					</Tabs.Tab>
					<Tabs.Tab value="account" fw={500}>
						Account
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value="profile" pt="xs">
					<Profile />
				</Tabs.Panel>

				<Tabs.Panel value="paypal" pt="xs">
					<Paypal />
				</Tabs.Panel>

				<Tabs.Panel value="account" pt="xs">
					<Account />
				</Tabs.Panel>
			</Tabs>
		</MantineProvider>
	);
};

export default Settings;

window.addEventListener("DOMContentLoaded", (event) => {
	const container = document.querySelector(".profile-page-frontend");
	if (container) {
		render(<Settings />, container);
	}
});
