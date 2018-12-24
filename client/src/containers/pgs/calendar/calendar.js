import * as React from "react";
import { Layout } from "../../../containers";
import './style.css';

class CalendarPage extends React.Component {
    state = {
        headline: 'this is the calendar Page'
    }

  render() {
    return (
      <Layout>
          <h1>{this.state.headline}</h1>
          <form>
            <div className='input-field'>
              <input type='text' className='datepicker' />
            </div>
          </form>
      </Layout>
    );
  }
}

export default CalendarPage;