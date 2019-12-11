import React, { Component, Fragment } from 'react';
import API from '../../services';
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
  }

  componentDidMount() {
    document.title = 'Instagram Photos Downloader';
  }

  handleChange = e => {
    this.setState({ id: e.target.value });
  };

  getPhotosData = () => {
    const { id } = this.state;
    API.getIgPhotos(id)
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ id: this.state.id, isLoading: true });
    this.getPhotosData();
  };

  renderSearchBar = () => {
    const { id } = this.state;
    return (
      <Input
        onSubmit={this.handleSubmit}
        placeholder="Enter Instagram Post URL..."
        id={id}
        onChange={this.handleChange}
      />
    );
  };

  renderContent = () => {
    const { isError, isLoading } = this.state;

    if (isError) {
      return this.renderError();
    } else if (isLoading) {
      return this.renderLoading();
    } else {
      return this.renderAllResult();
    }
  };

  renderAllResult = () => {
    const { isSingle } = this.state;
    return (
      <div className="row mt-5">
        {isSingle ? this.renderSingleResult() : this.renderResult()}
      </div>
    );
  };

  renderDescription = () => {
    return (
      <Description
        title="Photos"
        thirdStep="Copy the URL of that Image or Video or copy the URL of profile."
      />
    );
  };

  renderLoading = () => {
    return (
      <div
        className="row mt-5"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  renderError = () => {
    return (
      <div className="row mt-5">
        <div className="col">
          <h5 className="text-center text-danger pb-3">Result Not Found</h5>
        </div>
      </div>
    );
  };

  renderSingleResult = () => {
    const { photo } = this.state;
    return (
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
    );
  };

  renderAllResult = () => {
    const { photos } = this.state;
    return photos.map((photo, i) => (
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
    ));
  };

  render() {
    return (
      <Fragment>
        <div className="container mtop content">
          {this.renderSearchBar()}
          {this.renderContent()}
          {this.renderDescription()}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
