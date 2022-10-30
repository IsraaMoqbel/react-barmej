import React from "react";
import DetailPage from "../components/details/detailsPage";

class DetailsPage extends React.Component {
  render() {
    return (
      <>
        <DetailPage
          card={this.props.match.params.id}
          addToCart={this.props.addToCart}
        />
      </>
    );
  }
}

export default DetailsPage;
