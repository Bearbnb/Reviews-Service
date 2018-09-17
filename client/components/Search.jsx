import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }


  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleKeyPress(e) {
    const searchFunc = this.props.onClick;
    if (e.key === 'Enter') {
      e.target.value = '';
      searchFunc(this.state.term);
    }
  }

  render() {
    return (
      <div className={styles.searchDiv}>
        <div id={styles.searchIcon}>
          <i className="fas fa-search" />
        </div>
        <div className={styles.searchContainer}>
          <input
            id={styles.searchInput}
            value={this.state.name}
            placeholder="Search reviews:"
            onChange={this.onChange.bind(this)}
            onKeyPress={e => this.handleKeyPress(e)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
