import React from 'react';
import './Recipe.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    wrap : {
        display: 'flex'
    },
    title: {
        fontSize: '28px',
        fontWeight: 600,
    },
    category: {
        fontSize: '22px',
        fontWeight: 600,
    },
    recipe: {
        textAlign:'center'
    }

  }));
  

const Recipe = ({title, calories, ingredients, image, url}) => {

    const classes = useStyles();

    return(
        
        <Container maxWidth="sm">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.wrap}>
                            <div className={classes.titleBox}>
                                <p className={classes.title}>{title}</p> 
                                <img src={image} alt="" width="200px"/>
                                <p className={classes.category}>Calories</p>
                            <p>{calories}</p>
                            </div>
                            <div className={classes.ingredientsBox}>
                                <p className={classes.category}>Ingredients</p>
                                <ol>
                                    {ingredients.map(ingredients => (
                                        <li>{ingredients.text}</li>
                                    ))}
                                </ol>
                            </div>
                            
                        </div>

                        <Button className={classes.recipe} href={url} variant="contained" color="secondary">
                        GO TO RECIPE
                        </Button>
                    
                </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Recipe;