import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import {Header} from "./components/Header";
import {ResultScreen} from "./components/ResultScreen";
import {QuestionScreen} from "./components/QuestionScreen";

function App() {
	const [question, setQuestion] = useState();
	const [questionsCounter, setQuestionsCounter] = useState(1);
	const [correctAnwers, setCorrectAnswers] = useState(0);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';
	const questionsToPass = 10;

	const handleBtnClick = useCallback((ev) => {
		ev.target.textContent === question.correct_answer
			? setCorrectAnswers(prevState => prevState + 1)
			: setIncorrectAnswers(prevState => prevState + 1);

		setQuestionsCounter(prevValue => prevValue + 1);
	}, [question])

	const handleReset = useCallback(() => {
		setIncorrectAnswers(0);
		setCorrectAnswers(0);
		setQuestionsCounter(1);
	}, [])

	useEffect(() => {
		axios.get(url)
			.then((response) => {
				setQuestion(response.data.results[0]);
			})
	}, [questionsCounter]);
	return (
		<>
			<Header/>

			<Box pt={5}>
				{
					questionsToPass < questionsCounter
						? (
							<ResultScreen
								onReset={handleReset}
								questionsToPass={questionsToPass}
								correctAnwers={correctAnwers}
								incorrectAnswers={incorrectAnswers} />
						)
						: (
							<QuestionScreen
								question={question}
								questionsCounter={questionsCounter}
								questionsToPass={questionsToPass}
								correctAnwers={correctAnwers}
								incorrectAnswers={incorrectAnswers}
								onBtnClick={handleBtnClick}
							/>
						)
				}
			</Box>
		</>
	);
}

export default App;
