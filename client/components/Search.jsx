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

  render() {
    return (
        <div className ={styles.seachDiv}>
        <div className ={styles.searchContainer}>
        Search reviews: <input value={this.state.name} onChange={this.onChange.bind(this)} />
            <button className ={styles.searchInput} onClick={()=>this.props.onClick(this.state.term)}> Add Cat </button>
        </div>
        </div>
    )
  }
}

export default Search;
