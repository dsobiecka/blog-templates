import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { Form } from './Search.styled';
import { useState } from 'react';

const Search = (props) => {
  const [inputText, setInputText] = useState('');
  const inputTextHandler = (e) => setInputText(e.target.value);
  const inputKeyDownHandler = (e) => e.key === 'Enter' && props.onSearch(inputText);

  return (
    <Form action="">
      <SearchIcon className="searchIcon" />
      <input type="text" value={inputText} placeholder="search" onChange={inputTextHandler} onKeyDown={inputKeyDownHandler} />
      <button>Search</button>
    </Form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
