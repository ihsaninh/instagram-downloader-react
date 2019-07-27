import React, { Component, Fragment } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Description from "../../components/Description";

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      photos: [],
      value: "",
      isLoading: false,
      isError: false,
      apikey: "Z6OIZrudRcWtEuScCI9Nc38qx"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Instagram Stories Downloader";
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });
    axios
      .get("https://rest.farzain.com/api/ig_story.php", {
        params: {
          apikey: this.state.apikey,
          id: this.state.value
        }
      })
      .then(res => {
        const videos = res.data.video_url;
        Object.keys(videos).forEach(
          key => videos[key] === null && delete videos[key]
        );
        this.setState({
          photos: res.data.pict_url,
          videos: videos,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ isError: true });
      });

    event.preventDefault();
  }

  render() {
    const { videos, photos, value, isError, isLoading } = this.state;
    return (
      <Fragment>
        <div className="container mtop content">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Enter Instagram Username..."
                    aria-label="Search"
                    autoComplete="off"
                    value={value}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-success"
                      type="submit"
                      value="Submit"
                    >
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
            <div>
              <div className="row mt-5">
                {photos.map((photo, i) => (
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
                ))}
              </div>
              <div className="row mt-5">
                {videos.map((video, i) => (
                  <div className="col-md-4 mb-3" key={i}>
                    <div className="card">
                      <video
                        src={video}
                        class="card-img-top video-custom"
                        controls
                      />
                    </div>
                    <div className="card-body text-center">
                      <a href={video} className="btn btn-success" download>
                        <i className="fas fa-download" /> Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Description
            title="Stories"
            thirdStep="Copy the username account you want to download the stories."
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Story;
