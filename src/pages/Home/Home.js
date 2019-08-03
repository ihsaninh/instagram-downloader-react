import React, { Component, Fragment } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Description from "../../components/Description";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      photo: "",
      value: "",
      isLoading: false,
      isError: false,
      isSingle: false,
      apikey: "Z6OIZrudRcWtEuScCI9Nc38qx"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Instagram Photos Downloader";
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });
    axios
      .get("https://rest.farzain.com/api/ig_post.php", {
        params: {
          apikey: this.state.apikey,
          id: this.state.value
        }
      })
      .then(res => {
        if ("pict_url" in res.data) {
          this.setState({
            isLoading: false,
            photos: res.data.pict_url,
            isSingle: false
          });
        } else {
          this.setState({
            isLoading: false,
            photo: res.data.first_pict,
            isSingle: true
          });
        }
      })
      .catch(err => {
        this.setState({ isError: true });
      });

    event.preventDefault();
  }

  render() {
    const { photo, photos, value, isError, isLoading, isSingle } = this.state;
    return (
      <Fragment>
        <div className="container mtop content">
          <Input onSubmit={this.handleSubmit} placeholder="Enter Instagram Post URL..." value={value} onChange={this.handleChange} />
          {isError ? (
            <div className="row mt-5">
              <div className="col">
                <h5 className="text-center text-danger pb-3">
                  Hasil tidak ditemukan
                </h5>
              </div>
            </div>
          ) : isLoading ? (
            <div
              className="row mt-5"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row mt-5">
              {isSingle ? (
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img src={photo} className="card-img" alt={photo} />
                  </div>
                  <div className="card-body text-center">
                    <a href={photo} className="btn btn-success" download>
                      <i className="fas fa-download" /> Download
                    </a>
                  </div>
                </div>
              ) : (
                photos.map((photo, i) => (
                  <div className="col-md-4 mb-3" key={i}>
                    <div className="card">
                      <img src={photo} className="card-img" alt={photo} />
                    </div>
                    <div className="card-body text-center">
                      <a href={photo} className="btn btn-success" download>
                        <i className="fas fa-download" /> Download
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
          <Description
            title="Photos"
            thirdStep="Copy the URL of that Image or Video or copy the URL of profile."
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
