import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title}
				onClick={() => this.props.selectBook(book)}
				className="list-group-item">
				{book.title}
				</li>
				);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
		)
	}
} 

function mapStateToProps(state){
	return{
		books: state.books
	};
}

//Anything returned from this function will end up as props on thr BookList container
function mapDispatchToProps(dispatch){
	//Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch);
}


//promote book list from a component to a contrainer - it needs to know
//about this new dispatch method, selectBook. Make it avaliable as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);