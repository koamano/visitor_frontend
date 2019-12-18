import React, { Component } from "react";
import submitHandler from "../utils/helperFunctions";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleChange = e => {
    let { value } = e.target;
    // if (value.toUpperCase() === "ALL") {
    //   value = "";
    // }
    const searchValue = value;
    this.setState({ searchValue });
  };

  render() {
    return (
      <div className="container">
        <a className="navbar-brand float-left my-1" href="#">
          <img
            src="https://dashboard.envoy.com/assets/images/logo-small-red-ba0cf4a025dd5296cf6e002e28ad38be.svg"
            alt="Envoy Logo"
            //   width="31"
            //   className="py3 block"
          />
        </a>
        <button
          className="btn btn-danger my-2 float-left"
          type="button"
          onClick={this.props.handleAdd}
        >
          <i className="fa fa-user"></i>&nbsp;&nbsp;New visitor
        </button>
        <div className="float-right ">
          <form className="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
            <input
              className="form-control mr-sm-2 my-2"
              type="text"
              placeholder="Search"
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
            <button
              class="btn btn-outline-info my-2 my-sm-0"
              onClick={() => this.props.handleSearch(this.state.searchValue)}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
// function Header() {
//   //   const { handleAdd } = this.props;
//   return (
//     <div className="container header-color">
//       <a className="navbar-brand float-left" href="#">
//         <img
//           src="https://dashboard.envoy.com/assets/images/logo-small-red-ba0cf4a025dd5296cf6e002e28ad38be.svg"
//           alt="Envoy Logo"
//           //   width="31"
//           //   className="py3 block"
//         />
//       </a>
//       <div className="float-right ">
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2 my-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-danger my-2"
//             type="button"
//             onClick={this.props.handleAdd}
//           >
//             <i className="fa fa-user"></i>&nbsp;&nbsp;New visitor
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Header;
