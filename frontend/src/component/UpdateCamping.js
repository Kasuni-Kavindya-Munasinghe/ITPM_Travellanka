import React, { Component } from 'react';
import axios from 'axios';

import { Form } from 'react-bootstrap';
import Table from "react-bootstrap/Table"
import NumericInput from 'react-numeric-input';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class updateCamping extends Component{
    constructor(props) {
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangesecondName = this.onChangesecondName.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
        
        //this.onChangepassword = this.onChangepassword.bind(this);



        this.onSubmit = this.onSubmit.bind(this);
         

        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            contactNumber:'',
            torchQty:0,
            torchSelected:false,
            torchTotal:0,
            tentQty:0,
            tentSelected:false,
            tentTotal:0,
            waterBottleQty:0,
            waterBottleSelected:false,
            waterBottleTotal:0,
            firstaidkitQty:0,
            firstaidkitSelected:false,
            firstaidkitTotal:0,
            campingpillowQty:0,
            campingpillowSelected:false,
            campingpillowTotal:0,
            sleepingbagsQty:0,
            sleepingbagsSelected:false,
            sleepingbagsTotal:0,
            sleepingpadsQty:0,
            sleepingpadsSelected:false,
            sleepingpadsTotal:0,
            flashlightQty:0,
            flashlightSelected:false,
            flashlightTotal:0,
            campchairsQty:0,
            campchairsSelected:false,
            campchairsTotal:0,
            compassQty:0,
            compassSelected:false,
            compassTotal:0,
            totalValue:0,
            //password: '',
            
            
            Camping: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Camping/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                firstName: response.data.firstName,
                secondName: response.data.secondName,
                email: response.data.email,
                contactNumber:response.data.contactNumber,

                torchQty:response.data.torchQty,
                torchSelected:response.data.torchSelected,
                torchTotal:400*response.data.torchQty,

                tentQty:response.data.tentQty,
                tentSelected:response.data.tentSelected,
                tentTotal:550*response.data.tentQty,

                waterBottleQty:response.data.waterBottleQty,
                waterBottleSelected:response.data.waterBottleSelected,
                waterBottleTotal:100*response.data.waterBottleQty,

                firstaidkitQty:response.data.firstaidkitQty,
                firstaidkitSelected:response.data.firstaidkitSelected,
                firstaidkitTotal:250*response.data.firstaidkitQty,

                campingpillowQty:response.data.campingpillowQty,
                campingpillowSelected:response.data.campingpillowSelected,
                campingpillowTotal:500*response.data.campingpillowQty,

                sleepingbagsQty:response.data.sleepingbagsQty,
                sleepingbagsSelected:response.data.sleepingbagsSelected,
                sleepingbagsTotal:100*response.data.sleepingbagsQty,

                sleepingpadsQty:response.data.sleepingpadsQty,
                sleepingpadsSelected:response.data.sleepingpadsSelected,
                sleepingpadsTotal:200*response.data.sleepingpadsQty,

                flashlightQty:response.data.flashlightQty,
                flashlightSelected:response.data.flashlightSelected,
                flashlightTotal:300*response.data.flashlightQty,

                campchairsQty:response.data.campchairsQty,
                campchairsSelected:response.data.campchairsSelected,
                campchairsTotal:250*response.data.campchairsQty,
                
                compassQty:response.data.compassQty,
                compassSelected:response.data.compassSelected,
                compassTotal:300*response.data.compassQty,

                totalValue:response.data.totalValue,
                // totalValue:0


                
                //password: response.data.password,

               
               })
        })
        .catch(function (error){
            console.log(error);
        })
        let x=0;
        // this.setState({torchTotal:x})
        console.log(this.state.torchQty+" : ttotal");

    }
    
    onChangefirstName(e){
        this.setState({
            firstName : e.target.value
        });
    }
    onChangesecondName(e){
        this.setState({
            secondName: e.target.value
        });
    }

    onChangeemail(e){
        this.setState({
            email: e.target.value
        });
    } 
    
    onChangecontactNumber(e){
        this.setState({
            contactNumber : e.target.value
            
        });
        
        console.log("State : "+this.state.firstaidkitSelected);
    } 

   
    /*onChangepassword(e){
        this.setState({
            password : e.target.value
        });
    }*/
    
    onItemQtyChanged(rowid,qty){
        if(qty>20){
            qty=20;
        }
        if(rowid==1){
            this.setState({torchQty:qty});

            var price=400;
            var total=qty*price;
            this.setState({torchTotal:total},()=>{console.log("Total torch : "+this.state.torchTotal);});

            // console.log("Total torch : "+this.state.torchTotal);
        }else if(rowid==2){
            this.setState({tentQty:qty});

            var price=550;
            var total=qty*price;
            this.setState({tentTotal:total},()=>{console.log("Tent total : "+this.state.tentTotal)});
            

        }else if(rowid==3){
            this.setState({waterBottleQty:qty});

            var price=100;
            var total=qty*price;
            this.setState({waterBottleTotal:total},()=>{console.log("Water b total : "+this.state.waterBottleTotal)});
            

        }else if(rowid==4){
            this.setState({firstaidkitQty:qty});

            var price=250;
            var total=qty*price;
            this.setState({firstaidkitTotal:total},()=>{console.log("Firstaid total : "+this.state.firstaidkitTotal)});
            

        }else if(rowid==5){
            this.setState({campingpillowQty:qty});

            var price=500;
            var total=qty*price;
            this.setState({campingpillowTotal:total},()=>{ console.log("Camping pillowtotal : "+this.state.campingpillowTotal)});
           

        }else if(rowid==6){
            this.setState({sleepingbagsQty:qty});

            var price=100;
            var total=qty*price;
            this.setState({sleepingbagsTotal:total},()=>{console.log("Sleeping bag total : "+this.state.sleepingbagsTotal)});
            

        }else if(rowid==7){
            this.setState({sleepingpadsQty:qty});

            var price=200;
            var total=qty*price;
            this.setState({sleepingpadsTotal:total},()=>{console.log("Sleeping pad total : "+total)});
            

        }else if(rowid==8){
            this.setState({flashlightQty:qty});

            var price=300;
            var total=qty*price;
            this.setState({flashlightTotal:total},()=>{ console.log("Flashlight ttal : "+this.state.flashlightTotal)});
           

        }else if(rowid==9){
            this.setState({campchairsQty:qty});

            var price=250;
            var total=qty*price;
            this.setState({campchairsTotal:total},()=>{ console.log("Camping chai total : "+this.state.campchairsTotal)});
           

        }else if(rowid==10){
            this.setState({compassQty:qty});

            var price=300;
            var total=qty*price;
            this.setState({compassTotal:total},()=>{console.log("Compass total : "+this.state.compassTotal)});
            
        }else{
            console.log("Invalid row it : "+rowid);
        }
    }

    onCheckedChanged(rowid,checkedState){
        if(rowid==1){
            this.setState({torchSelected:checkedState});
        }else if(rowid==2){
            this.setState({tentSelected:checkedState});
        }else if(rowid==3){
            this.setState({waterBottleSelected:checkedState});
        }else if(rowid==4){
            this.setState({firstaidkitSelected:checkedState});
        }else if(rowid==5){
            this.setState({campingpillowSelected:checkedState});
        }else if(rowid==6){
            this.setState({sleepingbagsSelected:checkedState});
        }else if(rowid==7){
            this.setState({sleepingpadsSelected:checkedState});
        }else if(rowid==8){
            this.setState({flashlightSelected:checkedState});
        }else if(rowid==9){
            this.setState({campchairsSelected:checkedState});
        }else if(rowid==10){
            this.setState({compassSelected:checkedState});
        }else{
            console.log("Invalid row id : "+rowid);
        }
    }

    componentDidUpdate(){
        

        this.setTotal();
        console.log("CDU : "+this.state.totalValue);
    }

    setTotal(){
        
        let tot=0;
        console.log("Torch t : "+this.state.torchTotal);
        console.log("Tent t : "+this.state.tentTotal);

        tot=this.state.torchTotal+this.state.tentTotal+this.state.waterBottleTotal+this.state.firstaidkitTotal+this.state.campingpillowTotal+this.state.sleepingbagsTotal+this.state.sleepingpadsTotal+this.state.flashlightTotal+this.state.campchairsTotal+this.state.compassTotal;
        // tot=500;
        console.log("tot : "+tot);
        if(tot!=this.state.totalValue){
            this.setState({totalValue:tot},()=>{console.log("Total 305 : "+this.state.totalValue)});
            
            console.log("T : "+this.state.totalValue);
        }
    }

    onSubmit(e){
        e.preventDefault();
        const Camping ={
            firstName : this.state.firstName,
            secondName : this.state.secondName,
            email : this.state.email,
            contactNumber : this.state.contactNumber,
            torchSelected : this.state.torchSelected,
            torchQty : this.state.torchQty,
            tentSelected : this.state.tentSelected,
            tentQty : this.state.tentQty,
            waterBottleSelected : this.state.waterBottleSelected,
            waterBottleQty : this.state.waterBottleQty,
            firstaidkitSelected : this.state.firstaidkitSelected,
            firstaidkitQty : this.state.firstaidkitQty,
            campingpillowSelected : this.state.campingpillowSelected,
            campingpillowQty : this.state.campingpillowQty,
            sleepingbagsSelected : this.state.sleepingbagsSelected,
            sleepingbagsQty : this.state.sleepingbagsQty,
            sleepingpadsSelected : this.state.sleepingpadsSelected,
            sleepingpadsQty : this.state.sleepingpadsQty,
            flashlightSelected : this.state.flashlightSelected,
            flashlightQty : this.state.flashlightQty,
            campchairsSelected : this.state.campchairsSelected,
            campchairsQty : this.state.campchairsQty,
            compassSelected : this.state.compassSelected,
            compassQty : this.state.compassQty,
    
            totalValue:this.state.totalValue
            
            //password:this.state.password,
        }

    
       console.log(Camping);

       axios.put('http://localhost:8070/Camping/update/'+this.props.match.params.id ,Camping)
       .then(res => console.log(res.data));

       window.location='/listS'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <center><h3>Update Camping Details</h3></center>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                         
                         <label>First Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstName}
                            />      
                        
                    </div> 
                    <div className="form-group">
                         
                         <label>Last Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.secondName}
                            onChange={this.onChangesecondName}
                            />      
                        
                    </div> 
                    

<label>Email</label> 

<input 

   type="email"
   placeholder="Enter Your Email"

   className="form-control"

   

   value={this.state.email}

   onChange={this.onChangeemail}

       

   /> 
                    <div className="form-group">
                         
                         <label>Contact Number</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.contactNumber}
                            onChange={this.onChangecontactNumber}
                            />      
                        
                    </div>
                    
                    {/*<div className="form-group">
                         
                         <label>User Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeusername}
                            />      
                        
                    </div> 
                    
                    <div className="form-group">
                         
                         <label>Password</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangepassword}
                            />      
        </div>*/}



                    
<br/>
<Table striped bordered hover variant="dark">
    <thead>
        <tr id="table_heading">
            <td></td>
            <td>Items</td>
            <td>Price(Rs.)</td>
            <td>Code number</td>
            <td>Quantity</td>
        </tr>

        <tr id="row1">
            <td><Form.Check type="checkbox" checked={this.state.torchSelected} label=" " id="row1_chekbox" onChange={(e)=>{this.onCheckedChanged(1,e.target.checked)}}></Form.Check></td>
            <td>Torch</td>
            <td>400</td>
            <td>F511</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(1,val)} value={this.state.torchQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.torchSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" checked={this.state.tentSelected} label=" " id="row2_chekbox" onChange={(e)=>{this.onCheckedChanged(2,e.target.checked)}}></Form.Check></td>
            <td>Tent</td>
            <td>550</td>
            <td>T526</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(2,val)} value={this.state.tentQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.tentSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.waterBottleSelected} type="checkbox" label=" " id="row3_chekbox" onChange={(e)=>{this.onCheckedChanged(3,e.target.checked)}}></Form.Check></td>
            <td>Water Bottle</td>
            <td>100</td>
            <td>W536</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(3,val)} value={this.state.waterBottleQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.waterBottleSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.firstaidkitSelected} type="checkbox" label=" " id="row4_chekbox" onChange={(e)=>{this.onCheckedChanged(4,e.target.checked)}}></Form.Check></td>
            <td>First Aid Kit</td>
            <td>250</td>
            <td>F673</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(4,val)} value={this.state.firstaidkitQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.firstaidkitSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.campingpillowSelected} type="checkbox" label=" " id="row5_chekbox" onChange={(e)=>{this.onCheckedChanged(5,e.target.checked)}}></Form.Check></td>
            <td>Camping pillow</td>
            <td>500</td>
            <td>C678</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(5,val)} value={this.state.campingpillowQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.campingpillowSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.sleepingbagsSelected} type="checkbox" label=" " id="row6_chekbox" onChange={(e)=>{this.onCheckedChanged(6,e.target.checked)}}></Form.Check>       </td>
            <td>Sleeping bags</td>
            <td>100</td>
            <td>S287</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(6,val)} value={this.state.sleepingbagsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.sleepingbagsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.sleepingpadsSelected} type="checkbox" label=" " id="row7_chekbox" onChange={(e)=>{this.onCheckedChanged(7,e.target.checked)}}></Form.Check>       </td>
            <td>Sleeping pads</td>
            <td>200</td>
            <td>S254</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(7,val)} value={this.state.sleepingpadsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.sleepingpadsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.flashlightSelected} type="checkbox" label=" " id="row8_chekbox" onChange={(e)=>{this.onCheckedChanged(8,e.target.checked)}}></Form.Check>       </td>
            <td>flashlight</td>
            <td>300</td>
            <td>F145</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(8,val)} value={this.state.flashlightQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.flashlightSelected}/></td>
        </tr>


        <tr>
            <td><Form.Check checked={this.state.campchairsSelected} type="checkbox" label=" " id="row9_chekbox" onChange={(e)=>{this.onCheckedChanged(9,e.target.checked)}}></Form.Check>       </td>
            <td>Camp chairs</td>
            <td>250</td>
            <td>CA562</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(9,val)} value={this.state.campchairsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.campchairsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check checked={this.state.compassSelected} type="checkbox" label=" " id="row10_chekbox" onChange={(e)=>{this.onCheckedChanged(10,e.target.checked)}}></Form.Check>       </td>
            <td>Compass</td>
            <td>300</td>
            <td>B637</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(10,val)} value={this.state.compassQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.compassSelected}/></td>
        </tr>
    </thead>
</Table>
                    <div className="form-group" align="center">
                            <input type="submit" value="Update" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}