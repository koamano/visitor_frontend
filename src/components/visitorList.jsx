import React, { Component } from "react";
import Loader from "react-loader-spinner";
import VisitorItem from "./visitorItem";
import Header from "./header";
import AddNewModal from "./addNewModal";
import http from "./../services/httpService";

class VisitorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitors: [],
      loading: true,
      modal: false
    };
  }

  componentDidMount() {
    this.refreshList();
    // this.setState({ viewList: this.state.requestList });
  }

  refreshList = async () => {
    this.handleGet();
  };

  handleGet = async searchParam => {
    const loading = false;
    if (searchParam) {
      try {
        const result = await http.get("/entries/${searchParam}");
        this.setState({
          visitors: result.data,
          loading
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const result = await http.get("/entries");
        this.setState({
          visitors: result.data,
          loading
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleSignOut = visitor => {
    visitor.is_signout = true;
    this.handleUpdate(visitor);
  };

  handleUpdate = async visitor => {
    try {
      const result = await http.put(`/entries/${visitor.id}/`, visitor);

      if (result.status === 200) {
        this.refreshList();
      }
    } catch (ex) {
      console.log(ex.data);
    }
  };

  handleSubmit = async visitor => {
    try {
      const result = await http.post("/entries/", visitor);
      if (result.status === 201) {
        this.refreshList();
      }
    } catch (ex) {
      console.log(ex.data);
    }
    this.toggle();
  };

  handleAdd = () => {
    this.toggle();
  };

  handleSearch = async searchValue => {
    let searchParam = "";
    if (
      searchValue.includes("name=") ||
      searchValue.includes("notes=") ||
      searchValue.includes("signed_out=") ||
      searchValue.includes("signout_date=")
    ) {
      searchParam = `?${searchValue}`;
    } else {
      searchParam = `?filter=${searchValue}`;
    }
    try {
      const result = await http.get(`/entries/${searchParam}`);
      this.setState({
        visitors: result.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <div>
          <Header
            handleAdd={this.handleAdd}
            handleSearch={this.handleSearch}
          ></Header>
          <div className="container container-margin ">
            <table className="table">
              <thead className="header-color">
                <tr>
                  <th className="th-align-left">Name</th>
                  <th className="th-align-left">Notes</th>
                  <th className="th-align-left">Signed Out</th>
                </tr>
              </thead>
              <tbody>
                {this.state.visitors.map(visitor => (
                  <VisitorItem
                    visitor={visitor}
                    handleSignOut={this.handleSignOut}
                  ></VisitorItem>
                ))}
                <Loader
                  className="center"
                  type="Oval"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  visible={this.state.loading}
                />
              </tbody>
            </table>
          </div>
        </div>

        {this.state.modal ? (
          <AddNewModal
            toggle={this.toggle}
            handleSubmit={this.handleSubmit}
          ></AddNewModal>
        ) : null}
      </div>
    );
  }
}

export default VisitorList;
