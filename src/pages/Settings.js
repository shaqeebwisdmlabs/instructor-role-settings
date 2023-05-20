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
			<Tabs defaultValue="gallery">
				<Tabs.List>
					<Tabs.Tab value="gallery" fw={500}>
						Profile
					</Tabs.Tab>
					<Tabs.Tab value="messages" fw={500}>
						Paypal
					</Tabs.Tab>
					<Tabs.Tab value="settings" fw={500}>
						Account
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value="gallery" pt="xs">
					<Profile />
				</Tabs.Panel>

				<Tabs.Panel value="messages" pt="xs">
					<Paypal />
				</Tabs.Panel>

				<Tabs.Panel value="settings" pt="xs">
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
