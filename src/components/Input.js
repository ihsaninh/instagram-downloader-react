import React, { Fragment } from 'react';

const Input = props => {
  const { onSubmit, placeholder, id, onChange } = props;
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder={placeholder}
                aria-label="Search"
                autoComplete="off"
                value={id}
                onChange={onChange}
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
    </Fragment>
  );
};

export default Input;
