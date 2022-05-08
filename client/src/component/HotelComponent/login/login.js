import React, { Component } from 'react'
//import './login.css';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
//import img from '../../../Images/Health professional team-rafiki.png';
//import img1 from '../../../Images/waving.png';

export default class login extends Component {

    constructor(props){
        super(props);
        this.state={
            
            email: "",
            Password : "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const dataset = {
            EmpId : this.state.email,
            Password : this.state.Password,

        }

        console.log(dataset);


        if(this.state.email == "SA0001" && this.state.Password == "Admin001"){
            window.location = "/addhotel";
        }
    }


    render() {
        return (
            <div>
                <HotelSideMenu/>
                <div className = "mainLoginDiv">  
                    <div className = "LoginDiv1">
                        <nav className= "Navbar">
                            <div>
                                {/* <img src={img} className = "img-fluid" alt="gal"/> */}
                            </div>
                
                        </nav>
                    </div>

                    <div className = "LoginDiv2">
                            <div>
                                {/* <img src={img1} className = "WavingImg"  alt="gal"/> */}
                            </div>
                       <div className= "LoginHead">
                            <h1>Welcome Back!</h1>
                            <h4>Please Login to access your account</h4>
                        </div> 
                <section class="vh-50">
                        
                             <div class="col-md- col-lg-5 col-xl-6 offset-xl-1">
                        <form>
                             {/* Employee ID input */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form1Example13">email<span class="text-danger">*</span></label>                              
                                <input type="email" id="form1Example13" onChange = {this.onChange}  class="form-control form-control-lg" />
                             </div>

                            {/* Password input */}
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form1Example23">Password<span class="text-danger">*</span></label>
                                <input type="password" id="form1Example23" onChange = {this.onChange}  class="form-control form-control-lg" />
                             </div>

                             <div class="d-flex justify-content-around align-items-center mb-4">
                                {/* Checkbox */}
                                <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="form1Example3"
                                    checked
                                />
                                <label class="form-check-label"  for="form1Example3"> Remember me </label>
                                </div>
                                
                            </div>

                            

                            {/* Submit button */}
                            <button type="submit" onClick={this.onSubmit}  class="LoginBtn">Login Account</button>

                        </form> 
                    </div>
                   
                    </section>
                    </div>
                  
                 </div>  

                 
                
             </div>
        )
    }
}
