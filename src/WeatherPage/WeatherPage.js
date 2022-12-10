import React, {Component, useState, useEffect} from 'react'
import './WeatherPage.css'
import WeatherCard from './WeatherCard';

export default class WeatherPage extends Component {
  
  state = {
    days: []
  }

  componentDidMount = () => {
    const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"
    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {this.setState({days: data.list.filter(reading => reading.dt_txt.includes("12:00:00"))})
    })
  }

  render() {
    return (
      <div className="container">
      <h1 className="title">5 Days of Kyiv weather</h1>
        <div className="cards">

          {this.state.days.map((day, index) => <WeatherCard day={day} key={index}/>)}

        </div>
      </div>
    )
  }
}

  // const [days,setDays] = useState([])
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [weatherPerPage] = useState(10)

  //      useEffect (()=> {
  //       const getWeather = async() =>{
  //         setLoading(true)
  //         const res = await axios.get('')
  //         console.log(res.data)
  //       }
  //       getWeather()
  //     }, [])



// export default class WeatherPage extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             data: null
//         };
    
//     }
    



//     componentDidMount() {
//         // const data = await /* через ajax-запрос */
//         // this.setState({ loaded: true, data: data })
//         fetch("https://www.metaweather.com/924938/")
//           .then(res => res.json())
//           .then(
//             (result) => {
//               this.setState({
//                 isLoaded: true,
//                 items: result.items
//               });
//             },
            
//             (error) => {
//               this.setState({
//                 isLoaded: true,
//                 error
//               });
//             }
//           )
//       }
      
//     render() {
//        //if (!this.state.isLoaded) console.log('No data');
//        const [loading, setLoading] = useState(false);
//        useEffect (()=> {
//         const getWeather = async() =>{
//           setLoading(true)
//           const res = await axios.get('')
//           console.log(res.data)
//         }
//       }, [])
//        return(
//         <div className='Authority'>
           
//         </div>
//     )
//     }
// }