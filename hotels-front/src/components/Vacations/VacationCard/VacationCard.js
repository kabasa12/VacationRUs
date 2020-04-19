import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card,CardHeader,CardMedia,CardContent,CardActions,
        Collapse,Avatar,IconButton,Typography,Box} from '@material-ui/core';
import Logo from '../../Logo/Logo';
import './VacationCard.css'


//MuiTypography-root  MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor:'rgb(54, 52, 53)',
    color:'gold'
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const VacationCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let Varr = {...props.vacations};
  let fromDate = new Date(Date.parse(Varr.from_date))
  fromDate = fromDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  let toDate = new Date(Date.parse(Varr.to_date))
  toDate = toDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
  let btnColor = Varr.follow ? "Fav-container" : null;

  return (
    <Box m={1} display="flex" alignSelf='flex-start'>
    <Card className={classes.root} style={{margin:'2rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Logo />
          </Avatar>
        }
        action={
          <Box textAlign='center'
               justifyContent='center'
               margin="1rem"
               component="div">
             {Varr.num_of_followers}
          </Box>
        }
        title={Varr.name}
        subheader={<Box color="white"> {Varr.destination} </Box>}
      />
      <CardMedia
        component="img"
        alt={props.vacations.name + ' picture'}
        height="140"
        image={props.vacations.image}
        title='coolimg'
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box color="gold"> Price: {Varr.price}$ </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box color="white"> {fromDate} - {toDate} </Box>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
                    onClick={(e) => {
                      e.preventDefault()
                      return props.updateFollowers(Varr.id,Varr.num_of_followers)
                      }}>
          <div className={btnColor}>
          <FavoriteIcon/>
          </div>
        </IconButton>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Box color="gold"> Read More... </Box>
            </Typography>
          </CardContent>
        <IconButton style={{color:'white'}}
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {Varr.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card></Box>
  );
}

export default VacationCard;