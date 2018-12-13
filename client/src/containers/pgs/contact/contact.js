import * as React from "react";
import { Layout } from "../../../containers";
import './style.css';

class ContactPage extends React.Component {
    state = {
        headline: 'this is the concact Page'
    }

  render() {
    return (
      <Layout>
          <h1>{this.state.headline}</h1>
      </Layout>
    );
  }
}

export default ContactPage;