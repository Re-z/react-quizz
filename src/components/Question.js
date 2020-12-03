import { Typography, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";


export const Question = (props) => {
	const {question, category, incorrect_answers, correct_answer} = props.question;
	let answers = [correct_answer, ...incorrect_answers].sort();

	console.log('correct', correct_answer);

	return (
		<Box pt={5}>
			<Typography variant="h3" dangerouslySetInnerHTML={{__html:question}}></Typography>
			<Box mt={2} mb={6}>
				<Typography  dangerouslySetInnerHTML={{__html:category}}></Typography>
			</Box>
			<Box display="flex" alignItems="center" flexWrap="wrap">
				{
					answers.map(answer => {
						return(
							<Box key={answer} mr={2} mb={2}>
								<Button
									onClick={props.onBtnClick}
									color="primary"
									variant="contained" >
									{answer}
								</Button>
							</Box>
						)
					})
				}
			</Box>
		</Box>
	);
};
