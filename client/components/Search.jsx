import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleKeyPress (e) {
    let searchFunc  = this.props.onClick
    if (e.key === 'Enter') {
      searchFunc(this.state.term)
    }
  }
  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  render() {
    return (
        <div className ={styles.seachDiv}>
        <div id={styles.searchIcon}>
          <i class="fas fa-search"></i>
        </div>
        <div className ={styles.searchContainer}>
          <input value={this.state.name} placeholder="Search reviews:" onChange={this.onChange.bind(this)} 
            onKeyPress={(e)=>this.handleKeyPress(e)}
          />
        </div>
        </div>
    )
  }
}

export default Search;
