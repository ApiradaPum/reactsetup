import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFoods, createOrder } from '../actions';
import { Link } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';

class Foods extends Component{
    static propTypes = {
      cookies: instanceOf(Cookies).isRequired
    };

	  componentDidMount() {
      const { id } = this.props.match.params;
   		this.props.fetchFoods(id);
    }

    onAddFoodClick(values){
      this.props.createOrder(values);
    }
    
    renderPosts() {
      return _.map(this.props.posts, post => {
        return (
          <div key={post.id}>
              <button 
              className="btn btn-danger pull-xs-right margin-l-15" >
                  -
              </button>
              <button 
              className="btn btn-danger pull-xs-right margin-l-15" 
              onClick={this.onAddFoodClick.bind(post.id)}>
                  +
              </button>
                  
            <h3>{post.name_food}</h3>
            <h6>Price: {post.price} Baht</h6>
        </div>
        );
      });
    }


    
    render() {
        return (
          <div>
            <Link className="btn btn-primary" to="/">
                Back To Index
            </Link>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </div>
        );
      }
    }
    
    function mapStateToProps(state) {
      return { posts: state.posts };
    }
    
    export default connect(mapStateToProps, { fetchFoods, createOrder })(Foods);