import React, { Fragment } from 'react';

const Input = (props) => {
	return (
		<Fragment>
			<div className="row justify-content-center">
	            <div className="col-lg-6">
	              <form onSubmit={props.onSubmit}>
	                <div className="input-group">
	                  <input
	                    type="text"
	                    className="form-control bg-light border-0 small"
	                    placeholder={props.placeholder}
	                    aria-label="Search"
	                    autoComplete="off"
	                    value={props.id}
	                    onChange={props.onChange}
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
}

export default Input;