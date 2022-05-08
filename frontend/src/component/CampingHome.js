import React,{ Component} from 'react';
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import img from '../images/imageqq.jpg'
//import ButtonGroup from 'react-bootstrap/Image';
//import Col from 'react-bootstrap/Image';

// import library from '../images/library.jpg';



export default class CampingHome extends Component{

    render(){
        return(
            
        <div className="d-grid gap-2">
         
  

  

<Card className="bg-dark text-white">
  <Card.Img src={img} />
  <Card.ImgOverlay>
    <Card.Title ><h1>WELCOME </h1></Card.Title>
    <Card.Text>
      <h2>Travel Lanka </h2>
    </Card.Text>

    
  
  </Card.ImgOverlay>
</Card>


          <div className="d-grid gap-2"></div>
          {/*<Button variant="secondary" size="lg"  href="http://localhost:3000/add"  >
           Add Staff
</Button>*/}
         
   <a type="button"href="http://localhost:3000/add" class="btn btn-secondary btn-lg btn-block">Booking Camping Items</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Update Camping Items</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Delete Camping Items</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Search Camping Details</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">All Camping Items Details</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Camping Details Report Generation</a>
           
         
        {/*<Button variant="secondary" size="lg"  href="http://localhost:3000/listS"  variant="outline-dark">
            Update camping Details
          </Button>
       
          
        <Button variant="primary" size="lg" href="http://localhost:3000/listS" variant="outline-dark">
           Remove camping
          </Button>
       
          
        <Button variant="secondary" size="lg" href="http://localhost:3000/listS" variant="outline-dark">
            Get Report
</Button>*/}
          
          
        
          <br></br>
          <br></br>

        </div>
        )}
        

}