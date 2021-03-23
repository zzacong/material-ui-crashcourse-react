import React, { useState } from 'react'
import './App.css'
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import { Save, Delete, Menu } from '@material-ui/icons'
import 'fontsource-roboto'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px',
    marginBottom: 15,
  },
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[400],
  //   },
  //   secondary: {
  //     main: orange[400],
  //   },
  // },
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExam() {
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<Delete />}
            checkedIcon={<Save />}
            onChange={e => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
            // color="primary"
            // disabled
          />
        }
        label="Testing Checkbox"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Themeing</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>

            <Typography variant="body1">
              Learn how to use Material Ui
            </Typography>

            <ButtonStyled />

            {/* <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid> */}

            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The Time"
              // value="test@test.com"
              placeholder="test@test.com"
            />

            <CheckboxExam />

            <ButtonGroup color="primary" variant="contained" size="large">
              <Button
                startIcon={<Save />}
                // size="large"
                // color="primary"
                // variant="contained"
                // onClick={() => alert('hello')}
                // href="#"
                // disabled
                // style={{ fontSize: 24 }}
              >
                Hello World
              </Button>

              <Button endIcon={<Delete />}>Discard</Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
