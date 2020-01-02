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
        brand="Calculus 1"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
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
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
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
                    tabButton: "Funcations",
                    tabContent: (
                      <span >
                        <strong >
                          (a) polynomials, rationals, exponentials, logarithmic, trigonometric, arctan, absolute
                           value, radicals, power function
                        </strong>
                        <p>  i. graphs</p>
                        <p>  ii. continuity properties</p>
                        <strong>
                          (b) inverse functions
                        </strong>
                        <br />
                        <strong>
                          (c) composition of functions
                        </strong>
                        <br />
                        <strong>
                          (d) functional notation
                        </strong>
                      </span>
                    )
                  },
                  {
                    tabButton: "Limits and continuity",
                    tabContent: (
                      <span>
                        <strong><u>Limit</u></strong>
                        <br />
                        <p>(a) intuitive definition </p>
                        <p>i. graph</p>
                        <p>ii. table </p>
                        <p>(b) right- and left-hand limits</p>
                        <p> (c) analytical procedures for computing limits </p>
                        <p>(d) limit laws (properties of limits)</p>
                        <p>(e) indeterminate forms (∞ ∞ and 0 0) </p>
                        <p>(f) successive approximations (judging accuracy subjectively through iterations, i.e.two approximations of the same result are better than one) </p>
                        <br />
                        <strong><u>Continuity</u></strong>
                        <br />
                        <p>(a) intuitive/graphical understanding</p>
                        <p>(b) list of functions that are continuous on their domains</p>
                        <p>(c) recognizing discontinuities in a function given by a formula</p>
                        <p>(d) definition of continuity (“limit” definition)</p>

                      </span>
                    )
                  },
                  {
                    tabButton: "derivaatives",
                    tabContent: (
                      <span>
                        <strong>(a) interpretation</strong>
                        <br />
                        <p>i. rate of change</p>
                        <p>ii. slope of tangent line</p>
                        <strong>(b) derivative as a function</strong>
                        <br />
                        <strong>(c) limit definition of derivative</strong>
                        <br />
                        <strong>(d) computing derivatives</strong>
                        <p>i. rules (sum, product, quotient, chain rule)</p>
                        <p>ii. derivatives of functions listed under Continuity and Functions sections</p>
                        <strong>(e) max-min (single variable optimization), including word problems</strong>
                        <br />
                        <strong>(f) higher order derivatives</strong>
                        <br />
                        <strong>(g) velocity and acceleration</strong>
                        <br />
                        <strong>(h) using the derivative to understand properties of graphs</strong>
                        <br />
                        <strong>(i) local linearity (estimating a function with its tangent line)</strong>
                        <br />
                        <strong>(j) implicit differentiation (differentiation of an implictly-defined function)</strong>
                        <br />
                        <strong>(k) introduction to partial differentiation, i.e. differentiation of functions of two inputs</strong>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "integrals",
                    tabContent: (
                      <span>
                        <strong>(a) Riemann sigma Sum</strong>
                        <br />
                        <strong>(b) Notation Integration</strong>
                        <br />
                        <strong>(c) RulesTrig</strong>
                        <br />
                        <strong>(d) Integrals Fundamental Theorem of Calculus</strong>
                        <br />
                        <strong>(e) Substitution</strong>
                        <br />
                        <strong>(f) Arc Length Formula</strong>
                        <br />
                        <strong>(g) Mean Value Theorem for Integrals Particle Motion</strong>
                        <br />
                        <strong>(h) Simpson’s</strong>
                        <br />
                        <strong>(i) RulePartial Fraction</strong>
                        <br />
                        <strong>(j) Decomposition</strong>
                        <br />
                        <strong>(k) Integration by Parts</strong>
                        <br />
                        <strong>(l) Advanced Trigonometric IntegrationTrig Substitution</strong>
                        <br />
                        <strong>(m) Improper Integrals</strong>
                      </span>
                    )
                  },
                  {
                    tabButton: "applications of integrals",
                    tabContent: (
                      <span>
                        <strong>
                          (a)Area
                        </strong>
                        <br />
                        <strong>
                          (b)Volume
                        </strong>
                        <br />
                        <strong>
                          (c)And other topics
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
