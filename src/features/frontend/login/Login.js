import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import API from "../../../api/API";
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) =>({
  root: {
    width: '25%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '6rem',marginLeft:'36%',
    boxShadow:'#DC143C 1px 3px',
 },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    marginLeft:"0.8rem",
  },
}));


const Login = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  
    return ( <>
    <Card className={classes.root}>
      <CardContent>
        <h2 style={{color:"#DC143C", textAlign:"center", marginBottom:"1.5rem"}}>Login</h2>

        <form onSubmit={handleSubmit}>
        <div>
        <FormControl>
        <TextField className={classes.textField}
          id="outlined-textarea"
          label="Email"
          value={values.email}
          placeholder="abc@gmail.com"
          onChange={handleChange}
          multiline
          variant="outlined"
        />
        </FormControl>
        </div>
        <div>
            <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            variant="outlined"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
      <div style={{marginTop:'1rem'}}>
        <Button size="small" >Login</Button>
        <Button size="small" >Clear</Button>
    </div>
    </form>
    </CardContent>

    </Card>

    
    </> );
} 
export default Login;