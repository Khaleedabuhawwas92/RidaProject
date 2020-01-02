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
        brand="Differential Equation"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/examples/diff.jpg")}>
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
                    tabButton: "Basic Concepts ",
                    tabContent: (
                      <span >
                        <strong >
                          (a)Definitions
                        </strong>
                        <br />
                        <strong >
                          (b)Direction Fields
                        </strong>
                        <br />
                        <strong >
                          (c)Final Thoughts
                        </strong>
                      </span>
                    )
                  },
                  {
                    tabButton: "First Order Differential Equations",
                    tabContent: (
                      <span>
                        <strong >
                          (a)Linear Equations
                        </strong>
                        <br />
                        <strong >
                          (b)Separable Equations
                        </strong>
                        <br />
                        <strong >
                          (c)Exact Equations
                        </strong>
                        <br />
                        <strong >
                          (d)Bernoulli Differential Equations
                        </strong>
                        <br />
                        <strong >
                          (e)Substitutions
                        </strong>
                        <br />
                        <strong >
                          (f)Intervals of Validity
                        </strong>
                        <br />
                        <strong >
                          (g)Modeling with First Order Differential Equations
                        </strong>
                        <br />
                        <strong >
                          (h)Equilibrium Solutions
                        </strong>
                        <br />
                        <strong >
                          (i)Euler’s Method
                        </strong>

                      </span>
                    )
                  },
                  {
                    tabButton: "Second Order Differential Equations ",
                    tabContent: (
                      <span>
                        <strong>
                          (a)Basic Concepts
                      </strong>
                        <br />
                        <strong >
                          (b)Real Roots
                      </strong>
                        <br />
                        <strong >
                          (c)Complex Roots
                      </strong>
                        <br />
                        <strong >
                          (d)Repeated Roots
                      </strong>
                        <br />
                        <strong >
                          (e)Reduction of Order
                      </strong>
                        <strong >
                          (f)Fundamental Sets of Solutions
                        </strong>
                        <br />
                        <strong >
                          (g)Nonhomogeneous Differential Equations
                        </strong>
                        <br />
                        <strong >
                          (h)Undetermined Coefficients
                        </strong>
                        <br />
                        <strong >
                          (i)Variation of Parameters
                        </strong>
                        <br />
                        <strong >
                          (j)Mechanical Vibrations
                        </strong>

                      </span>
                    )
                  },
                  {
                    tabButton: "Laplace Transforms",
                    tabContent: (
                      <span>
                        <strong>
                          (a)The Definition
                      </strong>
                        <br />
                        <strong >
                          (b)Laplace Transforms
                      </strong>
                        <br />
                        <strong >
                          (c)Inverse Laplace Transforms
                      </strong>
                        <br />
                        <strong >
                          (d)Step Functions
                      </strong>
                        <br />
                        <strong >
                          (e)Solving IVPs' with Laplace Transforms 
                      </strong>
                        <strong >
                          (f)Nonconstant Coefficient IVP’s
                        </strong>
                        <br />
                        <strong >
                          (g)IVP’s with Step Functions
                        </strong>
                        <br />
                        <strong >
                          (h)Dirac Delta Function
                        </strong>
                        <br />
                        <strong >
                          (i)Convolution Integral
                        </strong>
                        <br />
                        <strong >
                          (j)Table of Laplace Transforms
                        </strong>
                      </span>
                    )
                  }
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
