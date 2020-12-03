import Box from "@material-ui/core/Box";
import {Button, Container, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import React from "react";

export const ResultScreen = (props) => {
    const {questionsToPass, correctAnwers, incorrectAnswers, onReset} = props;

    return (
        <Container>
            <Box textAlign="center" >
                <Typography variant="h3">Well done! You answered {questionsToPass} questions</Typography>
                <Box mt={5} alignItems="center" display="flex" justifyContent="center">
                    <p>Correct answers:</p>
                    <Box ml={1}>
                        <Chip className="green" label={correctAnwers} />
                    </Box>

                </Box>
                <Box alignItems="center" display="flex" justifyContent="center">
                    <p>Incorrect answers: </p>
                    <Box ml={1}>
                        <Chip label={incorrectAnswers} color="secondary" />
                    </Box>
                </Box>
                <Box mt={8}>
                    <Button onClick={onReset} size="large" variant="contained" color="primary">Start Again</Button>
                </Box>
            </Box>

        </Container>
    )
}