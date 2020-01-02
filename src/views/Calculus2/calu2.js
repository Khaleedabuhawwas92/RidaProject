import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Calculus 2"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/examples/calu1.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Prove Yourself in Mathematics as an Individual Able to Overcome The Most Important Obstacles of Life From The Professional Side
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/playlist?list=PLDoPjvoNmBAz0_Ujf9ZB9KceUzzSVYDci"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <GridContainer>   
            <GridItem>            
              <NavPills
                color="danger"
                tabs={[
                  {
                    tabButton: "Inverse Functions",
                    tabContent: (
                      <span >
                        <strong >
                       (a)Exponential Functions
                        </strong>
                        <br />
                        <strong >
                       (b)Inverse Trig Functions
                        </strong>
                        <br />
                        <strong >
                       (c)Hyperbolic Functions
                        </strong>
                        <br />
                        <strong >
                       (d)Integration
                        </strong>
                        <br />
                        <strong >
                       (e)Integration by Parts
                        </strong>
                        <br />
                        <strong >
                       (f)Trigonometric Techniques
                        </strong>
                        <br />
                        <strong >
                       (g)Partial Fractions
                        </strong>
                        <br />
                        <strong >
                       (h)Summary of Integration Techniques
                        </strong>
                        <br />
                        <strong >
                       (i)Improper Integrals
                        </strong>
                      </span>
                    )
                  },
                  {
                    tabButton: "Sequences",
                    tabContent: (
                      <span>
                    <strong >
                       (a)Infinite Series
                        </strong>
                        <br />
                        <strong >
                       (b)Integral Test
                        </strong>
                        <br />
                        <strong >
                       (c)Comparison Tests
                        </strong>
                        <br />
                        <strong >
                       (d)Alternating Series
                        </strong>
                        <br />
                        <strong >
                       (e)Absolute Convergence
                        </strong>
                        <br />
                        <strong >
                       (f)Ratio Test
                        </strong>
                        <br />
                        <strong >
                       (g)Ratio Test
                        </strong>
                        <br />
                        <strong >
                       (h)Summary of Convergence Tests
                        </strong>
                        <br />
                        <strong >
                       (i)Power Series
                        </strong>
                        <br />
                        <strong >
                       (j)Taylor Series
                        </strong>
                      </span>
                    )
                  },
                  {
                    tabButton: "Parametric Equations",
                    tabContent: (
                      <span>
                      <strong>
                      (a)Calculus of Parametric Equations
                      </strong>
                      <br />
                      <strong >
                     (b)Arc Length and Surface Area
                      </strong>
                      <br />
                      <strong >
                     (c)Arc Length and Surface Area
                      </strong>
                      <br />
                      <strong >
                     (d)Polar Coordinates
                      </strong>
                      <br />
                      <strong >
                     (e)Calculus in Polar Coordinates
                      </strong>
                      </span>
                    )
                  },
                ]}
              />

            </GridItem>
          </GridContainer>
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
