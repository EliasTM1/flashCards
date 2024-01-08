import { BoxProps } from "@chakra-ui/react";

export type InterviewQuestion = BoxProps & {
	qId: number;
	question: string;
	answer: string;
};

export const questions :InterviewQuestion[]  = [
	{
		qId: 3457,
		question: "What language is React based on?",
		answer: "JavaScript",
	},
	{
		qId: 7336,
		question: "What are the building blocks of React apps?",
		answer: "Components",
	},
	{
		qId: 8832,
		question: "What's the name of the syntax we use to describe a UI in React?",
		answer: "JSX",
	},
	{
		qId: 1297,
		question: "How to pass data from parent to child components?",
		answer: "Props",
	},
	{
		qId: 9103,
		question: "How to give components memory?",
		answer: "useState hook",
	},
	{
		qId: 2002,
		question:
			"What do we call an input element that is completely synchronised with state?",
		answer: "Controlled element",
	},
];
