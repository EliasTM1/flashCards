import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";
import { questions } from "./data.tsx";

function App() {
	return (
		<Box height='100vh' display="flex" justifyContent="center" alignItems="center">
			<Flex
				justifyContent='space-around'
				flexWrap='wrap'
				gap="3rem"
			>
				{questions.map((item) => (
					<Card key={item.id} qId={item.qId} answer={item.answer} question={item.question} />
				))}
			</Flex>
		</Box>
	);
}

export default App;
