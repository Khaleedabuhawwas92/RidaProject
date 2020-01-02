import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/rida2.jpg";
import team2 from "assets/img/faces/khalid.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
       
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={10} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Tec.Rida Jamal
                <br />
                <small className={classes.smallTitle}>mathematical  </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  target="_blank"
                  color="transparent"
                  href="https://web.facebook.com/profile.php?id=100009161101579"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
             
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            
            <Card plain>
              <GridItem xs={12} sm={10} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Khalid Abuhawwas
                <br />
                <small className={classes.smallTitle}>Developer </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  target="_blank"
                  href="https://web.facebook.com/kabuhawwas"
                  color="transparent"
                  className={classes.margin5}
                >
                   <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
