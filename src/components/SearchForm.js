import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchTerm from '../redux/actions/searchTermAction';

const searchForm = ({ setSearchTerm }) => {
  const searchValue = React.useRef('');
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleChange = () => setSearchTerm(searchValue.current.value);

  const handleSubmit = e => e.preventDefault();

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search your favorite meal
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

searchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch(SearchTerm(term)),
});

export default connect(null, mapDispatchToProps)(searchForm);
