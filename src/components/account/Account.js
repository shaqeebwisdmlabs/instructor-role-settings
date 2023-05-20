import { Box, Button, Flex, PasswordInput, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { IconLogout, IconPlus, IconReload } from "@tabler/icons-react";

const Account = () => {
	const [password, setPassword] = useState("");
	const [showNewPass, setShowNewPass] = useState(false);
	const [showResetPass, setShowResetPass] = useState(false);

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: "white",
				padding: "22px 27px 33px",
				border: "1px solid #D6D8E7",
				borderRadius: "8px",
				marginTop: "32px",
			})}
		>
			<h4>Account</h4>
			<Stack>
				<Flex direction="column" gap="sm">
					<Text fw={500} fz="sm">
						Password
					</Text>
					<div>
						{!password ? (
							<NewPassword
								showNewPass={showNewPass}
								setShowNewPass={setShowNewPass}
								setPassword={setPassword}
							/>
						) : (
							<ResetPassword
								showResetPass={showResetPass}
								setShowResetPass={setShowResetPass}
							/>
						)}
					</div>
				</Flex>

				<Flex direction="column" gap="sm">
					<Text fw={500} fz="sm">
						Sessions
					</Text>
					<div>
						<Button variant="outline" leftIcon={<IconLogout size="1rem" />}>
							Logout all sessions
						</Button>
						<Text fz="xs" color="#868E96" sx={{ marginTop: "6px" }}>
							Did you lose your phone or leave your account logged in at a
							public computer? You can log out everywhere else, and stay logged
							in here
						</Text>
					</div>
				</Flex>
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
	);
};

export default Account;

const ResetPassword = ({ showResetPass, setShowResetPass }) => {
	return (
		<>
			{!showResetPass ? (
				<Button
					variant="outline"
					leftIcon={<IconReload size="1rem" />}
					onClick={() => setShowResetPass(true)}
				>
					Reset Password
				</Button>
			) : (
				<Flex direction="column" gap="sm">
					<PasswordInput
						placeholder="Current Password"
						label="Current Password"
					/>
					<PasswordInput
						placeholder="Confirm Password"
						label="Confirm Password"
					/>
					<div>
						<Button variant="subtle" onClick={() => setShowResetPass(false)}>
							Cancel
						</Button>
					</div>
				</Flex>
			)}
		</>
	);
};

const NewPassword = ({ showNewPass, setShowNewPass, setPassword }) => {
	return (
		<>
			{!showNewPass ? (
				<Button
					variant="outline"
					leftIcon={<IconPlus size="1rem" />}
					onClick={() => setShowNewPass(true)}
				>
					Set a new Password
				</Button>
			) : (
				<Flex direction="column" gap="sm">
					<PasswordInput placeholder="Password" />
					<div>
						<Button variant="subtle" onClick={() => setShowNewPass(false)}>
							Cancel
						</Button>
					</div>
				</Flex>
			)}
		</>
	);
};
