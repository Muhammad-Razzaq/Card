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
import Button from '@material-ui/core/Button';
import Photo from './../../images/Fuel_Meter.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './../../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 445,
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
        height: 285,
        backgroundColor: "#D3D3D3"
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <h4 style={{ fontSize: "0.9em", marginTop: "10px" }}><b>LOREM IPSUM DOLOR SIT AMET</b></h4>
                                        <h4 style={{ fontSize: "0.7em", marginTop: "-7px", color: "#66635d" }}>lorem ipsum dolor</h4>
                                    </div>
                                    <div className="col-4">
                                        <Button variant="contained" style={{ textTransform: "capitalize", marginTop: "10px" }}>Shop Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div class="d-flex">
                                <div class="mr-auto">
                                    <Button style={{ textTransform: "capitalize", marginTop: "18px", backgroundColor: "#328f87", color: "white" }}>Shop Now</Button>
                                </div>
                                <div class="p-2">
                                    <Button variant="contained" style={{ textTransform: "capitalize", marginTop: "10px", backgroundColor: "#22bf81", color: "white" }}>Rev Generated: $6,611,211</Button>
                                </div>
                            </div>
                            <div class="d-flex" style={{ marginTop: "-15px" }}>
                                <div class="mr-auto p-2"></div>
                                <div class="p-2">
                                    <Button variant="contained" style={{ textTransform: "capitalize", marginTop: "10px", backgroundColor: "#22bf81", color: "white" }}>Rev Generated: $6,611,211</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>

    );
}
