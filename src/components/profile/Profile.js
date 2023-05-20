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
	ActionIcon,
} from "@mantine/core";
import {
	IconPhotoPlus,
	IconEye,
	IconPlus,
	IconTrash,
} from "@tabler/icons-react";

const Profile = () => {
	const [file, setFile] = useState(null);
	const [educationFields, setEducationFields] = useState([]);
	const [achievementFields, setAchievementFields] = useState([]);

	const handleInputChange = (type, index, event) => {
		if (type === "education") {
			const values = [...educationFields];
			values[index].value = event.target.value;
			setEducationFields(values);
		} else if (type === "achievement") {
			const values = [...achievementFields];
			values[index].value = event.target.value;
			setAchievementFields(values);
		}
	};

	const handleAddField = (type) => {
		if (type === "education") {
			setEducationFields([...educationFields, { value: "" }]);
		} else if (type === "achievement") {
			setAchievementFields([...achievementFields, { value: "" }]);
		}
	};

	const handleRemoveField = (type, index) => {
		if (type === "education") {
			const values = [...educationFields];
			values.splice(index, 1);
			setEducationFields(values);
		} else if (type === "achievement") {
			const values = [...achievementFields];
			values.splice(index, 1);
			setAchievementFields(values);
		}
	};

	const handleFileChange = (event) => {
		setFile(URL.createObjectURL(event));
	};

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
							width={100}
							height={100}
							src={file}
							alt="With default placeholder"
							withPlaceholder
						/>

						<FileButton
							onChange={(event) => handleFileChange(event)}
							accept="image/png,image/jpeg"
						>
							{(props) => (
								<Button
									{...props}
									variant="subtle"
									leftIcon={<IconPhotoPlus size="1rem" />}
									compact
								>
									{!file ? "Set a profile picture" : "Replace"}
								</Button>
							)}
						</FileButton>
						{file && (
							<Button
								variant="subtle"
								leftIcon={<IconTrash size="1rem" />}
								compact
								color="red"
								onClick={() => setFile(null)}
							>
								Remove
							</Button>
						)}
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
						{educationFields.map((field, index) => (
							<Flex align="center" gap="16px" key={index}>
								<TextInput
									value={field.value}
									placeholder="Write your institute name here"
									style={{ width: "100%" }}
									onChange={(event) =>
										handleInputChange("education", index, event)
									}
								/>
								<ActionIcon
									variant="transparent"
									onClick={() => handleRemoveField("education", index)}
								>
									<IconTrash size="1.25rem" />
								</ActionIcon>
							</Flex>
						))}
						<div>
							<Button
								variant="subtle"
								leftIcon={<IconPlus size="1.25rem" />}
								compact
								onClick={() => handleAddField("education")}
							>
								Add new education
							</Button>
						</div>
					</Flex>
					<Flex direction="column" gap="md">
						<Text fw={500} fz="sm">
							Achievements
						</Text>
						{achievementFields.map((field, index) => (
							<Flex align="center" gap="16px" key={index}>
								<TextInput
									value={field.value}
									placeholder="Write your achievements here"
									style={{ width: "100%" }}
									onChange={(event) =>
										handleInputChange("achievement", index, event)
									}
								/>
								<ActionIcon
									variant="transparent"
									onClick={() => handleRemoveField("achievement", index)}
								>
									<IconTrash size="1.25rem" />
								</ActionIcon>
							</Flex>
						))}
						<div>
							<Button
								variant="subtle"
								leftIcon={<IconPlus size="1.25rem" />}
								compact
								onClick={() => handleAddField("achievement")}
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
