import React, {Component} from 'react'
import classes from './WeatherPage.css'

export default class WeatherPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null
        };
    
    }

    componentDidMount() {
        // const data = await /* через ajax-запрос */
        // this.setState({ loaded: true, data: data })
        fetch("https://www.metaweather.com/924938/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      
    render() {
        if (!this.state.isLoaded) console.log('No data');

    }
}