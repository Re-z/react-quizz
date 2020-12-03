import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import {Question} from "./Question";
import {Container} from "@material-ui/core";
import React from "react";

export const QuestionScreen = (props) => {
    const {question, onBtnClick, correctAnwers, incorrectAnswers, questionsToPass, questionsCounter} = props;
    return (
        <Container>
            <Box mt={5} display="flex" justifyContent="space-between">
                <div>
                    <Chip label={`Correct answers: ${correctAnwers}`} className="green"/>
                    <Box ml={2} component="span">
                        <Chip label={`Incorrect answers: ${incorrectAnswers}`} color="secondary" />
                    </Box>
                </div>
                <span>Question #{questionsCounter}/{questionsToPass}</span>
            </Box>

            {question &&  <Question question={question} onBtnClick={onBtnClick}/>}

        </Container>
        )

}