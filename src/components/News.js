import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import imgNewsJunction from "./News Junction (1).png";

export class News extends Component {
  static defaultProps={
    country : "us",
    pageSize: 9,
    category: "general"
  }

  static PropType = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category :PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults : [],
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bb358f9fd6e46f7bf1da9e42d5a6f82&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading : false
    });
  }
  handleNextClick = async () => {
    
        console.log("n");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bb358f9fd6e46f7bf1da9e42d5a6f82&page=${
          this.state.page +1
        }&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState
        ({
          page: this.state.page + 1,
          articles: parseData.articles,
          loading : false 
        });
      
  };
  handlePrevClick = async () => {
    console.log("p");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8bb358f9fd6e46f7bf1da9e42d5a6f82&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({Spinner : true})

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading : false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top HEadlines</h2>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  discription={element.description}
                  imgUrl={element.urlToImage || imgNewsJunction}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-primary mx-1"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-outline-primary "
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
