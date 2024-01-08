import { Box, Text } from "@chakra-ui/react";
import { InterviewQuestion } from "./data";
import { useState } from "react";

const Card = ({ question, answer }: InterviewQuestion) => {
	const [selectedID, setSelectedID] = useState<boolean>(false);
	return (
		<Box
			width='25%'
			onClick={() => setSelectedID(!selectedID)}
			cursor='pointer'
			height='fit-content'
            border="2px solid"
            borderColor="flashStrongBlue"
            borderRadius="10px"
			marginBottom="4rem"

		>
			{selectedID ? 
			<Text padding="10px" backgroundColor="flashStrongBlue" color="flashWhite">{answer}</Text> : 
			<Text padding="10px">{question}</Text>}
		</Box>
	);
};

export default Card;
