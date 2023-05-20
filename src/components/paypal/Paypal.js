import { Box, Button, Stack, Text, TextInput } from "@mantine/core";
import React from "react";

const Paypal = () => {
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
			<h4>Paypal Payouts Settings</h4>
			<Stack>
				<div>
					<TextInput
						placeholder="Write your PayPal email here"
						label="PayPal payment email "
					/>
					<Text fz="xs" color="#868E96" sx={{ marginTop: "6px" }}>
						Please write you PayPal email carefully because you will receive
						your payment via this email address
					</Text>
				</div>
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

export default Paypal;
