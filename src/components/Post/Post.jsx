import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Facebook from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Photo from './../../images/FallBack.png';
import 'bootstrap/dist/css/bootstrap.css';
import './../../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 475,
        height: 900,
        borderRadius: 9
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        borderRadius: 9,
        marginTop: 10
    },
    avatar: {
        backgroundColor: red[500],
    },
    main: {
        flexGrow: 1,
        borderRadius: 9,
        backgroundColor: "white"
    },
    sub: {
        flexGrow: 1,
        borderRadius: 9,
        height: 315,
        backgroundColor: "#D3D3D3"
    },
    btngroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function RecipeReviewCard() {

    const [readMore, setReadMore] = useState(false);
    const classes = useStyles();

    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
      </p>
    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'

    return (
        <Grid container >
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
          </Avatar>
                    }
                    action={
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <Facebook />
                            </IconButton>
                        </CardActions>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span className="read-more-link" onClick={() => { setReadMore(!readMore) }}><p>{linkName}</p></span>
                        {readMore && extraContent}
                    </Typography>
                    <div className={classes.main}>
                        <div className={classes.sub}>
                            <CardMedia
                                className={classes.media}
                                image={Photo}
                                title="Paella dish"
                            />
                            <div className={classes.btngroup}>
                                <ButtonGroup size="large">
                                    <h4 style={{ fontSize: "0.9em", marginRight: "81px" }}><b>LOREM IPSUM DOLOR SIT AMET</b> <br />
                                        <h4 style={{ fontSize: "0.9em", color: "#66635d" }}>lorem ipsum dolor</h4></h4>
                                    <Button variant="contained" style={{ textTransform: "capitalize", borderRadius: "3px", fontSize: "0.9em" }}>Shop Now</Button>
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className={classes.btngroup}>
                            <ButtonGroup size="large">
                                <Button style={{ textTransform: "capitalize", backgroundColor: "#328f87", color: "white", marginLeft: "68px", borderRadius: "3px", fontSize: "0.9em" }}>Shop Now</Button>
                                <Button style={{ textTransform: "capitalize", backgroundColor: "#22bf81", color: "white", marginLeft: "5px", borderRadius: "3px", fontSize: "0.9em" }}>Rev Generated: $6,611,211</Button>
                            </ButtonGroup>
                            <ButtonGroup size="large">
                                <Button style={{ textTransform: "capitalize", backgroundColor: "#22bf81", color: "white", marginLeft: "186px", marginTop: "-11px", borderRadius: "3px", fontSize: "0.9em" }}>Rev Generated: $6,611,211</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>

    );
}
