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
        brand="Tawjihi"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/examples/tawjihe.jpg")}>
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
                href="https://www.youtube.com/playlist?list=PLB3f_vIVi3cDpAm3L2138Je_T81zyOEEp"
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
                    tabButton: "Dashboard",
                    tabContent: (
                      <span >
                        <p >
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "rida",
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
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
