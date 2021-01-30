import React, { Component } from 'react'
import kisobran from '../img/rainbow.jpg'
import {Container,Row,Col,Form, FormGroup, FormControl ,Button,Card,Navbar,Nav} from 'react-bootstrap';

import axios from 'axios';





const x =['novi sad','maribor','podgorica','belgrad']

const t =Math.floor(Math.random()*x.length)




export default class Weather extends Component {
    constructor(){
        super()
        this.state={
            city:x[t],
            temp:[],
            description:[],
            nowImage:[],
            wind:[],
            humidity:[],


            fistDayDate:[],
            secondDayDate:[],
            threedDayDate:[],
            fourDayDate:[],
            fiveDayDate:[],

            fistDayImage:[],
            secondDayImage:[],
            threedDayImage:[],
            fourDayImage:[],
            fiveDayImage:[],


            fistDayMaxTemp:[],
            secondDayMaxTemp:[],
            thredDayMaxTemp:[],
            fourDayMaxTemp:[],
            fiveDayMaxTemp:[],


            fistDayPressure:[],
            secondDayPressure:[],
            thredDayPressure:[],
            fourDayPressure:[],
            fiveDayPressure:[],

            fistDayDescripton:[],
            secondDayDescripton:[],
            thredDayDescripton:[],
            fourDayDescripton:[],
            fiveDayDescripton:[],

            fistDayWind:[],
            secondDayWind:[],
            threedDayWind:[],
            fourDayWind:[],
            fiveDayWind:[],


            userInput:[]

         

        }
        this.getUserInput=this.getUserInput.bind(this)
        this.sendUserCity=this.sendUserCity.bind(this)
       
    
      
    

    }


async  componentDidMount(){
  const inputClassValue = document.querySelector('.inputClassValue')

  axios.all([axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`),
           axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)])
          
     .then(axios.spread((firstResponse, secondResponse) => {  
        //  console.log(firstResponse.data,secondResponse.data);
        inputClassValue.value=''

         setTimeout(()=>{

          this.setState({

            fistDayDate:secondResponse.data.list[6].dt_txt,
            secondDayDate:secondResponse.data.list[14].dt_txt,
            threedDayDate:secondResponse.data.list[22].dt_txt,
            fourDayDate:secondResponse.data.list[30].dt_txt,
            fiveDayDate:secondResponse.data.list[38].dt_txt,


            fistDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[6].weather[0].icon}.png`,
            secondDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[14].weather[0].icon}.png`,
            threedDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[22].weather[0].icon}.png`,
            fourDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[30].weather[0].icon}.png`,
            fiveDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[38].weather[0].icon}.png`,


           
            fistDayMaxTemp:secondResponse.data.list[6].main.temp_max,
           secondDayMaxTemp:secondResponse.data.list[14].main.temp_max,
            thredDayMaxTemp:secondResponse.data.list[22].main.temp_max,
            fourDayMaxTemp:secondResponse.data.list[30].main.temp_max,
            fiveDayMaxTemp:secondResponse.data.list[38].main.temp_max,



            fistDayPressure:secondResponse.data.list[6].main.pressure,
            secondDayPressure:secondResponse.data.list[14].main.pressure,
            thredDayPressure:secondResponse.data.list[22].main.pressure,
            fourDayPressure:secondResponse.data.list[30].main.pressure,
            fiveDayPressure:secondResponse.data.list[38].main.pressure,


            fistDayDescripton:secondResponse.data.list[6].weather[0].description,
            secondDayDescripton:secondResponse.data.list[14].weather[0].description,
            thredDayDescripton:secondResponse.data.list[22].weather[0].description,
            fourDayDescripton:secondResponse.data.list[30].weather[0].description,
            fiveDayDescripton:secondResponse.data.list[38].weather[0].description,

            fistDayWind:secondResponse.data.list[6].wind.speed,
            secondDayWind:secondResponse.data.list[14].wind.speed,
            threedDayWind:secondResponse.data.list[22].wind.speed,
            fourDayWind:secondResponse.data.list[30].wind.speed,
            fiveDayWind:secondResponse.data.list[38].wind.speed,


          



              

          })


         },100)

         this.setState({
           city:firstResponse.data.name,
           temp:firstResponse.data.main.temp,
           description:firstResponse.data.weather[0].description,
           nowImage:firstResponse.data.weather[0].icon,
           wind:firstResponse.data.wind.speed,
           humidity:firstResponse.data.main.humidity

     
     
        });
    


     }))
     .catch(error => console.log(error));
  




}

getUserInput(e){
  this.setState({
    userInput:e.target.value
  })
  


}

sendUserCity(){

   const inputClassValue = document.querySelector('.inputClassValue')
 axios.all([axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`),
 axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.userInput}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)])

.then(axios.spread((firstResponse, secondResponse) => {  
// console.log(firstResponse.data,secondResponse.data);
 inputClassValue.value=''
setTimeout(()=>{

this.setState({

  fistDayDate:secondResponse.data.list[6].dt_txt,
  secondDayDate:secondResponse.data.list[14].dt_txt,
  threedDayDate:secondResponse.data.list[22].dt_txt,
  fourDayDate:secondResponse.data.list[30].dt_txt,
  fiveDayDate:secondResponse.data.list[38].dt_txt,


  fistDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[6].weather[0].icon}.png`,
  secondDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[14].weather[0].icon}.png`,
  threedDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[22].weather[0].icon}.png`,
  fourDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[30].weather[0].icon}.png`,
  fiveDayImage:`https://openweathermap.org/img/w/${secondResponse.data.list[38].weather[0].icon}.png`,


 
  fistDayMaxTemp:secondResponse.data.list[6].main.temp_max,
 secondDayMaxTemp:secondResponse.data.list[14].main.temp_max,
  thredDayMaxTemp:secondResponse.data.list[22].main.temp_max,
  fourDayMaxTemp:secondResponse.data.list[30].main.temp_max,
  fiveDayMaxTemp:secondResponse.data.list[38].main.temp_max,



  fistDayPressure:secondResponse.data.list[6].main.pressure,
  secondDayPressure:secondResponse.data.list[14].main.pressure,
  thredDayPressure:secondResponse.data.list[22].main.pressure,
  fourDayPressure:secondResponse.data.list[30].main.pressure,
  fiveDayPressure:secondResponse.data.list[38].main.pressure,


  fistDayDescripton:secondResponse.data.list[6].weather[0].description,
  secondDayDescripton:secondResponse.data.list[14].weather[0].description,
  thredDayDescripton:secondResponse.data.list[22].weather[0].description,
  fourDayDescripton:secondResponse.data.list[30].weather[0].description,
  fiveDayDescripton:secondResponse.data.list[38].weather[0].description,

  fistDayWind:secondResponse.data.list[6].wind.speed,
  secondDayWind:secondResponse.data.list[14].wind.speed,
  threedDayWind:secondResponse.data.list[22].wind.speed,
  fourDayWind:secondResponse.data.list[30].wind.speed,
  fiveDayWind:secondResponse.data.list[38].wind.speed,






    

})


},100)

this.setState({
 city:firstResponse.data.name,
 temp:firstResponse.data.main.temp,
 description:firstResponse.data.weather[0].description,
 nowImage:firstResponse.data.weather[0].icon,
 wind:firstResponse.data.wind.speed,
 humidity:firstResponse.data.main.humidity



});



}))
.catch(error=>{ console.log(error)

  window.location='/'
})



}








    render() {
const bac={
  backgrundColor:"red",
 
}
  const borderRadius={
    borderRadius:"15px",
    border:"1px solid",
    marginBottom:'10px'
   
   
  }
   
      
        return ( 
            
             <div className="mainWeatherDiv">
         <img src={kisobran} alt="adada" className="slika" /> 
             
            
    
               <Container className="weatherNav" fluid>
                  
                 <Row>
                  
                   <Col className="col-sm-4">
                 
                     <h5 className="text-light">Weather App</h5>
                   </Col>
                   <Col className="col-sm-8 col-12 allForm">
                  
                   <Form inline className="float-right">
                     <FormControl type="text"className="inputClassValue" onChange={this.getUserInput}></FormControl>
                     <Button className="inputClassValue" onClick={this.sendUserCity}>Search</Button>

                   </Form>
                   </Col>
                 </Row>
               </Container>
           
    
          
               <Container className="weatherHouers" fluid>
                 <Row>
                   <Col className="col-12" >
                   <br></br>
                   <br></br>
               <br></br>
                 
                   
                   <h2 className="text-center text-light">{this.state.city.slice(0,1).toString().toUpperCase()+this.state.city.slice(1,15)}</h2>
                   <h1 className="text-center text-light">{Math.floor(this.state.temp)+ '\xB0'}</h1>
                   <h3 className="text-center text-light">{this.state.description.slice(0,1).toString().toUpperCase()+this.state.description.slice(1,15)}</h3>
                   <h4 className="text-center text-light">Wind:{this.state.wind} m/s</h4>
                   <h3 className="text-center text-light">Humidity:{this.state.humidity} %</h3>
                   
                   </Col>
                 </Row>

               </Container>











               <Container className="fiveDaysDiv" fluid>
               
            
                 <Row className="fiveDasysDivRows">
                
                   <Col  lg={2} md={6} sm={10} style={borderRadius} >

                   <h3 className="text-center text-black">{this.state.fistDayDate.slice(8,10)}.{this.state.fistDayDate.slice(6,7)} | {this.state.secondDayDate.slice(0,4)}</h3>
                   <h3 className="text-center text-black">{this.state.fistDayDate.slice(10,16)}</h3>
                   <h5 className="text-center text-black"><img src={this.state.fistDayImage} /></h5>
                   <h3 className="text-center text-black">{Math.floor(this.state.fistDayMaxTemp)+'\xB0'}</h3>
                   <h5 className="text-center text-black">{this.state.fistDayDescripton}</h5>
                   <h5 className="text-center text-black">Wind:{this.state.fistDayWind} m/s</h5>
                   <h5 className="text-center text-black">Press:{this.state.fistDayPressure} mb </h5>
           



                   
                   </Col>


                   <Col style={borderRadius} lg={2} md={6} sm={10}  >
                     
                   <h3 className="text-center text-black">{this.state.secondDayDate.slice(8,10)}.{this.state.secondDayDate.slice(6,7)} | {this.state.secondDayDate.slice(0,4)}</h3>
                   <h3 className="text-center text-black">{this.state.secondDayDate.slice(10,16)}</h3>
                   <h5 className="text-center text-black"><img src={this.state.secondDayImage} /></h5>
                   <h3 className="text-center text-black">{Math.floor(this.state.secondDayMaxTemp)+'\xB0'}</h3>
                   <h5 className="text-center text-black">{this.state.fistDayDescripton}</h5>
                   <h5 className="text-center text-black">Wind:{this.state.fistDayWind} m/s</h5>
                   <h5 className="text-center text-black">Press:{this.state.secondDayPressure} mb </h5>

                  

                    

                   
                   </Col>

                   <Col  style={borderRadius} lg={2} md={6}  sm={10} >

                       
                   <h3 className="text-center text-black">{this.state.threedDayDate.slice(8,10)}.{this.state.threedDayDate.slice(6,7)} | {this.state.secondDayDate.slice(0,4)}</h3>
                   <h3 className="text-center text-black">{this.state.threedDayDate.slice(10,16)}</h3>
                   <h5 className="text-center text-black"><img src={this.state.threedDayImage} /></h5>
                   <h3 className="text-center text-black">{Math.floor(this.state.thredDayMaxTemp)+'\xB0'}</h3>
                   <h5 className="text-center text-black">{this.state.thredDayDescripton}</h5>
                   <h5 className="text-center text-black">Wind:{this.state.threedDayWind} m/s</h5>
                   <h5 className="text-center text-black">Press:{this.state.thredDayPressure} mb</h5>

                     

                   
                   </Col>


                   <Col style={borderRadius}lg={2} md={6}  sm={10}>
                          
                   <h3 className="text-center text-black">{this.state.fourDayDate.slice(8,10)}.{this.state.fourDayDate.slice(6,7)} | {this.state.secondDayDate.slice(0,4)}</h3>
                   <h3 className="text-center text-black">{this.state.fourDayDate.slice(10,16)}</h3>
                   <h5 className="text-center text-black"><img src={this.state.fourDayImage} /></h5>
                   <h3 className="text-center text-black">{Math.floor(this.state.fourDayMaxTemp)+'\xB0'}</h3>
                   <h5 className="text-center text-black">{this.state.fourDayDescripton}</h5>
                   <h5 className="text-center text-black">Wind:{this.state.fourDayWind} m/s</h5>
                   <h5 className="text-center text-black">Press:{this.state.fourDayPressure} mb</h5>
                     
                     

                   
                   </Col>


                   <Col style={borderRadius} lg={2} md={6} sm={10} >

                   <h3 className="text-center text-black">{this.state.fiveDayDate.slice(8,10)}.{this.state.fiveDayDate.slice(6,7)} |  {this.state.secondDayDate.slice(0,4)}</h3>
                   <h3 className="text-center text-black">{this.state.fiveDayDate.slice(10,16)}</h3>
                   <h5 className="text-center text-black"><img src={this.state.fiveDayImage} /></h5>
                   <h3 className="text-center text-black">{Math.floor(this.state.fiveDayMaxTemp)+'\xB0'}</h3>
                   <h5 className="text-center text-black">{this.state.fiveDayDescripton}</h5>
                   <h5 className="text-center text-black">Wind:{this.state.fiveDayWind} m/s</h5>
                   <h5 className="text-center text-black">Press:{this.state.fiveDayPressure} mb</h5>
                     

                   
                   </Col>

                 



                 </Row>
               </Container>
               <br></br>
               <br></br>
             
         
            
            </div>
             
            
           
        )
    }
}
