import React, { Component, Fragment } from 'react';
import { getIgPhotos } from '../../services';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Description from '../../components/Description';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      photo: '',
      id: '',
      isLoading: false,
      isError: false,
      isSingle: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Instagram Photos Downloader';
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  getPhotosData = () => {
    const id = this.state.id;
    getIgPhotos(id)
      .then(res => {
        if ('pict_url' in res) {
          this.setState({
            isLoading: false,
            photos: res.pict_url,
            isSingle: false
          });
        } else {
          this.setState({
            isLoading: false,
            photo: res.first_pict,
            isSingle: true
          });
        }
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  };

  handleSubmit(event) {
    this.setState({ id: this.state.id, isLoading: true });
    this.getPhotosData();
    event.preventDefault();
  }

  render() {
    const { photo, photos, id, isError, isLoading, isSingle } = this.state;
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
                  Result Not Found
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
