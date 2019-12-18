import React, { Component } from "react";

class VisitorItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, notes, signout_date, is_signout, id } = this.props.visitor;
    //const dateFields = signout_date.split(/:|T/);
    return (
      <React.Fragment>
        <tr key={id}>
          <td align="left">{name}</td>
          <td align="left">{notes}</td>
          {is_signout ? (
            <td align="left">
              {signout_date}
              {/* {dateFields[0].replace(/-/g, "/") +
                " " +
                dateFields[1] +
                ":" +
                dateFields[2]} */}
            </td>
          ) : (
            <td align="left">
              <button
                className="btn btn-info"
                onClick={() => this.props.handleSignOut(this.props.visitor)}
              >
                Sign Out
              </button>
            </td>
          )}
        </tr>
      </React.Fragment>
    );
  }
}

export default VisitorItem;
