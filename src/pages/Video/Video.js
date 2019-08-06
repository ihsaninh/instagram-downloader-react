import React, { Component, Fragment } from "react";
import API from '../../services';
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Description from "../../components/Description";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      video: "",
      value: "",
      isLoading: false,
      isError: false,
      isSingle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Instagram Videos Downloader";
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getVideosData = () => {
    const id = this.state.value;
    API.getIgVideos(id)
    .then(res => {
      if ("video_url" in res) {
          this.setState({
            isLoading: false,
            photos: res.video_url,
            isSingle: false
          });
        } else {
          this.setState({
            isLoading: false,
            photo: res.first_video,
            isSingle: true
          });
        }
    })
  }

  handleSubmit(event) {
    this.setState({ id: this.state.value, isLoading: true });
    this.getVideosData();
    event.preventDefault();
  }

  render() {
    const { video, videos, value, isError, isLoading, isSingle } = this.state;
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
              ) : (
                videos.map((video, i) => (
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
                ))
              )}
            </div>
          )}
          <Description
            title="Videos"
            thirdStep="Copy the URL of that Video or copy the URL of profile."
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Video;
