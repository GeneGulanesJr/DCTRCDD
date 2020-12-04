import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page/view
import JavaScript from "views/IndexSections/JavaScript.jsx";
import Examples from "views/IndexSections/Examples.jsx";
import NucleoIcons from "views/IndexSections/NucleoIcons.jsx";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <JavaScript />
            <NucleoIcons />
            <Examples />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
