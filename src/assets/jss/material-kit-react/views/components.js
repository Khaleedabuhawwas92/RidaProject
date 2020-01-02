import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    top:"40px",
    fontFamily:"Times New Roman",
    letterSpacing: "4px",
  },
  subtitle: {
    fontSize: "20px",
    maxWidth: "600px",
    margin: "10px 0 0",
    position: "relative",
    top:"50px",
    color:"#ecf0f1",
    letterSpacing:"2px"
  
  },
  main: {
    background: "#FFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
     
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
