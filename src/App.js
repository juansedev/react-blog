import React from "react";
import { Container, Grid, Box, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import NavBar from "./components/appBar.js";
import Hero from "./components/hero.js";
import CardCmp from "./components/card.js";


// Data to test the app
const cardListData = [
  {
    alt: "comment / accessibility",
    id: 1,
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "React Native",
    content2:
      "React Native is an open-source mobile application framework created by Facebook, Inc. [3] It is used to develop applications for Android...",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "comment / accessibility",
    id: 2,
    image:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=743&q=80",
    title: "React",
    content2:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render ...",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "comment / accessibility",
    id: 3,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "React useContext",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
  {
    alt: "comment / accessibility",
    id: 4,
    image:
      "https://rosolutions.com.mx/blog/wp-content/uploads/2019/06/1-y6C4nSvy2Woe0m7bWEn4BA.png",
    title: "React Developer Tools",
    content2:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img_author:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    name: "David Watts",
    date: "Oct 8, 2020",
  },
];

/**
  Link a style sheet with a function component using the hook pattern.
  Arguments:
  1-  styles (Function | Object): A function generating the styles or a styles object. It will be linked to the component.
      Use the function signature if you need to have access to the theme. It's provided as the first argument.
  2-  options (Object [optional]):
        *  options.defaultTheme (Object [optional]): The default theme to use if a theme isn't supplied through a Theme Provider.
        *  options.name (String [optional]): The name of the style sheet. Useful for debugging.
        *  options.flip (Boolean [optional]): When set to false, this sheet will opt-out the rtl transformation. When set to true,
        *  the styles are inversed. When set to null, it follows theme.direction.
        *  The other keys are forwarded to the options argument of jss.createStyleSheet([styles], [options]).
  Return:
      hook: A hook. This hook can be used in a function component. The documentation often calls this returned hook useStyles.
      It accepts one argument: the properties that will be used for "interpolation" in the style sheet.
 */
export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
                      url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`,
    height: 500,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
    top: 0,
  },
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    borderBlockColor: "#f555",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  /**
   * --> Map Application
   * NavBar component
   * Hero Component
   * Container Component
   *  * Typography Component
   *  * Grid Component
   *    * CardCmp Component : In this component it maps all data input from an array, the array works
   *                          as an API that returns a data in JSON Format.
   *                          This component renders as many cards according to the number of objects in the JSON
   *  * Box Component
   *    * Pagination Component
   */
  return (
    <div className="App">
      <NavBar nameCmp={classes.appBar}></NavBar>
      <Hero nameCmp={classes.hero}></Hero>
      <Container maxWidth="lg" className={classes.blogContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Posts
        </Typography>
        <Grid container spacing={3}>
          {cardListData.map((cardData) => (
            <CardCmp key={cardData.id} {...cardData} />
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
