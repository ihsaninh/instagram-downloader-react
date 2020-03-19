import React, { Component, Fragment } from 'react';
import { getIgVideos } from '../../services';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Description from '../../components/Description';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      video: '',
      id: '',
      isLoading: false,
      isError: false,
      isSingle: false
    };
  }

  componentDidMount() {
    document.title = 'Instagram Videos Downloader';
  }

  handleChange = e => {
    this.setState({ id: e.target.value });
  }

  getVideosData = async () => {
    const { id } = this.state;
    try {
      const res = await getIgVideos(id);
      if (res.hasOwnProperty('video_url')) {
        const videos = res.video_url.filter(n => n);
        this.setState({
          isLoading: false,
          videos,
          isSingle: false
        });
      } else {
        this.setState({
          isLoading: false,
          video: res.first_video,
          isSingle: true
        });
      };
    } catch (error) {
      this.setState({
        isError: true
      });
    };
  };

  handleSubmit = e => {
    const { id } = this.state;
    this.setState({ id, isLoading: true });
    this.getVideosData();
    e.preventDefault();
  }

  render() {
    const { video, videos, id, isError, isLoading, isSingle } = this.state;
    return (
      <Fragment>
        <div className="container mtop content">
          <Input
            onSubmit={this.handleSubmit}
            placeholder="Enter Instagram Post URL..."
            id={id}
            onChange={this.handleChange}
          />
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
              style={{ justifyContent: 'center', alignItems: 'center' }}
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
                      className="card-img-top video-custom"
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
                        className="card-img-top video-custom"
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
