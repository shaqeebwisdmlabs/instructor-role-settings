import React, { useState } from "react";
import {
	Box,
	Image,
	Stack,
	Flex,
	FileButton,
	Button,
	TextInput,
	Text,
	Textarea,
	Group,
} from "@mantine/core";
import { IconPhotoPlus, IconEye, IconPlus } from "@tabler/icons-react";

const Profile = () => {
	const [file, setFile] = useState(null);

	return (
		<>
			<Box
				sx={(theme) => ({
					backgroundColor: "white",
					padding: "22px 27px 33px",
					border: "1px solid #D6D8E7",
					borderRadius: "8px",
					marginTop: "32px",
				})}
			>
				<h4>Basic info</h4>
				<Stack>
					<Flex align="center" gap="32px">
						<Image
							width={120}
							height={120}
							src={file}
							alt="With default placeholder"
							withPlaceholder
						/>
						<FileButton onChange={setFile} accept="image/png,image/jpeg">
							{(props) => (
								<Button
									{...props}
									variant="subtle"
									leftIcon={<IconPhotoPlus size="1rem" />}
									compact
								>
									Set a profile picture
								</Button>
							)}
						</FileButton>
					</Flex>
					<Group spacing="lg" align="flex-start" grow>
						<TextInput placeholder="First name" label="First name" />
						<TextInput placeholder="Last name" label="Last name" />
					</Group>
					<Group spacing="lg" align="flex-start" grow>
						<TextInput placeholder="Nick name" label="Nick name" />
						<TextInput
							placeholder="Display name publicly as"
							label="Display name"
						/>
					</Group>
					<Group spacing="lg" align="flex-start" grow>
						<div>
							<TextInput placeholder="User name" label="User name" />
							<Text fz="xs" color="#868E96">
								Username cannot be changed
							</Text>
						</div>
						<TextInput placeholder="Email" label="Email here" />
					</Group>
					<TextInput placeholder="Your website" label="Your website" />
				</Stack>
				<Button
					mt="24px"
					variant="gradient"
					gradient={{ from: "#06BFFF", to: "#2D73FF", deg: 90 }}
					sx={{
						"&:hover": { opacity: 0.75 },
					}}
				>
					Save Changes
				</Button>
			</Box>
			<Box
				sx={(theme) => ({
					backgroundColor: "white",
					padding: "22px 27px 33px",
					border: "1px solid #D6D8E7",
					borderRadius: "8px",
					marginTop: "32px",
				})}
			>
				<Flex align="center" justify="space-between">
					<h4>Profile page info</h4>
					<Button
						variant="subtle"
						leftIcon={<IconEye size="1.25rem" />}
						compact
					>
						View profile page
					</Button>
				</Flex>

				<Stack>
					<Text fw={500}>Introduction Section</Text>
					<Textarea placeholder="Write your bio here" label="Bio" />
					<Flex direction="column" gap="md">
						<Text fw={500} fz="sm">
							Education
						</Text>
						<div>
							<Button
								variant="subtle"
								leftIcon={<IconPlus size="1.25rem" />}
								compact
							>
								Add new education
							</Button>
						</div>
					</Flex>
					<Flex direction="column" gap="md">
						<Text fw={500} fz="sm">
							Achievement's
						</Text>
						<div>
							<Button
								variant="subtle"
								leftIcon={<IconPlus size="1.25rem" />}
								compact
							>
								Add new achievement
							</Button>
						</div>
					</Flex>
					<Text fw={500}>Social media links</Text>
					<Group spacing="lg" align="flex-start" grow>
						<TextInput placeholder="Your Facebook link here" label="Facebook" />
						<TextInput placeholder="Your Twitter link here" label="Twitter" />
					</Group>
					<TextInput placeholder="Your YouTube link here" label="YouTube" />
				</Stack>
				<Button
					mt="24px"
					variant="gradient"
					gradient={{ from: "#06BFFF", to: "#2D73FF", deg: 90 }}
				>
					Save Changes
				</Button>
			</Box>
		</>
	);
};

export default Profile;
