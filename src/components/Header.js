import {AppBar, Toolbar, Typography} from "@material-ui/core";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className="fullWidth" variant="h6" align="center">React.js, Material UI, Quizz API Application </Typography>
            </Toolbar>
        </AppBar>
    )
}