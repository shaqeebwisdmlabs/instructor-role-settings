import { Tabs } from "@mantine/core";

export default function Tab() {
	return (
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
				Gallery tab content
			</Tabs.Panel>

			<Tabs.Panel value="messages" pt="xs">
				Messages tab content
			</Tabs.Panel>

			<Tabs.Panel value="settings" pt="xs">
				Settings tab content
			</Tabs.Panel>
		</Tabs>
	);
}
