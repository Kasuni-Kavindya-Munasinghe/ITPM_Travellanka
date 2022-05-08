import React, { Component} from 'react';

// import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import swal from "sweetalert2";
import Table from "react-bootstrap/Table"
import NumericInput from 'react-numeric-input';
// import NumericInput from "react-bootstrap/"
import { AcroFormCheckBox } from 'jspdf';

// const styles = {

//     border: '20px solid rgba(0, 0, 0, 0.05)', 
  
  
//   };

const initialState = {
    firstName: '',
    secondName: '',
    email:'',
    contactNumber:'',
    Camping: [],
    emailError:'',
    contactNumberError:'',

    torchSelected:false,
    torchQty:0,
    torchTotal:0,

    tentSelected:false,
    tentQty:0,
    tentTotal:0,

    waterBottleSelected:false,
    waterBottleQty:0,
    waterBottleTotal:0,

    firstaidkitSelected:false,
    firstaidkitQty:0,
    firstaidkitTotal:0,

    campingpillowSelected:false,
    campingpillowQty:0,
    campingpillowTotal:0,

    sleepingbagsSelected:false,
    sleepingbagsQty:0,
    sleepingbagsTotal:0,

    sleepingpadsSelected:false,
    sleepingpadsQty:0,
    sleepingpadsTotal:0,

    flashlightSelected:false,
    flashlightQty:0,
    flashlightTotal:0,

    campchairsSelected:false,
    campchairsQty:0,
    campchairsTotal:0,

    compassSelected:false,
    compassQty:0,
    compassTotal:0,

    totalValue:0
    
    
    }





class Addcamping extends Component{
constructor(props) {
super(props);



this.onChangefirstName = this.onChangefirstName.bind(this);
this.onChangesecondName = this.onChangesecondName.bind(this);
this.onChangeemail = this.onChangeemail.bind(this);
this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
this.onSubmit = this.onSubmit.bind(this);
this.state = initialState;
}
//execute the react
componentDidMount(){
    this.setState({
    Camping:['test user'],
    name : 'test user'
    })
    }
    
    
    onChangefirstName(e){
    this.setState({
    firstName: e.target.value
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
    contactNumber: e.target.value
    });
    }
    onItemQtyChanged(rowid,qty){
        if(qty>20){
            qty=20;
        }
        if(rowid==1){
            this.setState({torchQty:qty});

            var price=400;
            var total=qty*price;
            this.setState({torchTotal:total});

            // console.log("Total torch : "+this.state.torchTotal);
        }else if(rowid==2){
            this.setState({tentQty:qty});

            var price=550;
            var total=qty*price;
            this.setState({tentTotal:total});

        }else if(rowid==3){
            this.setState({waterBottleQty:qty});

            var price=100;
            var total=qty*price;
            this.setState({waterBottleTotal:total});

        }else if(rowid==4){
            this.setState({firstaidkitQty:qty});

            var price=250;
            var total=qty*price;
            this.setState({firstaidkitTotal:total});

        }else if(rowid==5){
            this.setState({campingpillowQty:qty});

            var price=500;
            var total=qty*price;
            this.setState({campingpillowTotal:total});

        }else if(rowid==6){
            this.setState({sleepingbagsQty:qty});

            var price=100;
            var total=qty*price;
            this.setState({sleepingbagsTotal:total});

        }else if(rowid==7){
            this.setState({sleepingpadsQty:qty});

            var price=200;
            var total=qty*price;
            this.setState({sleepingpadsTotal:total});

        }else if(rowid==8){
            this.setState({flashlightQty:qty});

            var price=300;
            var total=qty*price;
            this.setState({flashlightTotal:total});

        }else if(rowid==9){
            this.setState({campchairsQty:qty});

            var price=250;
            var total=qty*price;
            this.setState({campchairsTotal:total});

        }else if(rowid==10){
            this.setState({compassQty:qty});

            var price=300;
            var total=qty*price;
            this.setState({compassTotal:total});
        }else{
            console.log("Invalid row it : "+rowid);
        }
    }
    componentDidUpdate(){
        this.setTotal();
        console.log("CDU : "+this.state.totalValue);
    }

    setTotal(){
        console.log("T : "+this.state.torchTotal);
        let tot=0;
        tot=this.state.torchTotal+this.state.tentTotal+this.state.waterBottleTotal+this.state.firstaidkitTotal+this.state.campingpillowTotal+this.state.sleepingbagsTotal+this.state.sleepingpadsTotal+this.state.flashlightTotal+this.state.campchairsTotal+this.state.compassTotal;
        if(tot!=this.state.totalValue){
            this.setState({totalValue:tot});
        }
       
        // console.log("Total : "+this.state.totalValue);
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
    
    
    validate = () =>{
        let emailError=false;
        let contactNumberError=false;
       

        
        

          if(!this.state.email){
            emailError=true;
          }

          if(this.state.contactNumber.trim().length != 10){
        
            contactNumberError="Contact number length should be 10";
        
          }
          
         
        
          if(  emailError || contactNumberError  ){
        
              this.setState({ emailError ,contactNumberError  });
              console.log("EMAIL: "+emailError);
              console.log("NUM : "+contactNumberError+" : "+this.state.contactNumber.trim().length);
        
              return false
        
          } 
        
          return true;

    };

    onSubmit(e){
        e.preventDefault();
        
        
        
        const camping ={
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
        
        
        }
        const isValid = this.validate()

        if(isValid){
            console.log(camping);
            axios.post('http://localhost:8070/Camping/add',camping)
            .then(()=>{
                console.log("Submit success");
            alert("Camping Item Details successfully Added")
            swal.fire("Inserted","Camping items successfully Added to the cart","success")
            }).catch((err)=>{
                console.log("Submit error : "+err);
            alert(err)
            })
            this.setState(initialState);
            
        }else{
        alert("Invalid")
        }
    }



    btnDemo = (e) => {
        e.preventDefault();
        
        
        
        const {firstName ,secondName,email,contactNumber} = this.state;
        
        
        
        const data = {
        firstName: firstName,
        secondName: secondName,
        email:email,
        contactNumber : contactNumber
        
        }
        
        
        
        console.log(data)
        
        
        
        this.setState(
        {
        firstName: "Dilki",
        secondName: "Nuwansara",
        email:"dilki99@gmail.com",
        contactNumber:"0773456238"
        

        }
        )
        }    


render(){
return(
<div className = "container"  style={{backgroundColor:"rgb(150,150,150,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}} >
<center><h3>Booking Camping Items</h3></center>
<form onSubmit={this.onSubmit}>



<div className="form-group">

<label> First Name</label>
<input
type="text"
placeholder="Enter Your First Name"
className="form-control"
value={this.state.firstName}
onChange={this.onChangefirstName}
/>

</div>
<div className="form-group">

<label>Last Name</label>
<input
type="text"
placeholder="Enter Your Last Name"
className="form-control"
value={this.state.secondName}
onChange={this.onChangesecondName}
/>
</div>



<div className="form-group">

                         

                         <label>Email</label> 

                         <input 

                            type="email"
                            placeholder="Enter Your Email"

                            className="form-control"

                            

                            value={this.state.email}

                            onChange={this.onChangeemail}

                                

                            />  
                            {}
                            {/* <Form.Text className="text-muted" >

                                 Enter valid email address

                            </Form.Text> */}

                            

                    </div>



<div className="form-group">

<label>Contact Number</label>
<input
type="text"
placeholder="Enter Your Contact Number"
className="form-control"
value={this.state.contactNumber}
onChange={this.onChangecontactNumber}
/>
<div style={{color:"red"}}>

    {this.state.contactNumberError}

</div> 
</div>






{/*<div className="form-group">

<label>Password</label>
<input
type="text"
placeholder="Enter Your Password"
className="form-control"
value={this.state.password}
onChange={this.onChangepassword}
/>
<div style={{color:"red"}}>

    {this.state.passwordError}

</div> 
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
            <td><Form.Check type="checkbox" label=" " id="row1_chekbox" onChange={(e)=>{this.onCheckedChanged(1,e.target.checked)}}></Form.Check></td>
            <td>Torch</td>
            <td>400</td>
            <td>F511</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(1,val)} value={this.state.torchQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.torchSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row2_chekbox" onChange={(e)=>{this.onCheckedChanged(2,e.target.checked)}}></Form.Check></td>
            <td>Tent</td>
            <td>550</td>
            <td>T526</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(2,val)} value={this.state.tentQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.tentSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row3_chekbox" onChange={(e)=>{this.onCheckedChanged(3,e.target.checked)}}></Form.Check></td>
            <td>Water Bottle</td>
            <td>100</td>
            <td>W536</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(3,val)} value={this.state.waterBottleQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.waterBottleSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row4_chekbox" onChange={(e)=>{this.onCheckedChanged(4,e.target.checked)}}></Form.Check></td>
            <td>First Aid Kit</td>
            <td>250</td>
            <td>F673</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(4,val)} value={this.state.firstaidkitQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.firstaidkitSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row5_chekbox" onChange={(e)=>{this.onCheckedChanged(5,e.target.checked)}}></Form.Check></td>
            <td>Camping pillow</td>
            <td>500</td>
            <td>C678</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(5,val)} value={this.state.campingpillowQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.campingpillowSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row6_chekbox" onChange={(e)=>{this.onCheckedChanged(6,e.target.checked)}}></Form.Check>       </td>
            <td>Sleeping bags</td>
            <td>100</td>
            <td>S287</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(6,val)} value={this.state.sleepingbagsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.sleepingbagsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row7_chekbox" onChange={(e)=>{this.onCheckedChanged(7,e.target.checked)}}></Form.Check>       </td>
            <td>Sleeping pads</td>
            <td>200</td>
            <td>S254</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(7,val)} value={this.state.sleepingpadsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.sleepingpadsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row8_chekbox" onChange={(e)=>{this.onCheckedChanged(8,e.target.checked)}}></Form.Check>       </td>
            <td>flashlight</td>
            <td>300</td>
            <td>F145</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(8,val)} value={this.state.flashlightQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.flashlightSelected}/></td>
        </tr>


        <tr>
            <td><Form.Check type="checkbox" label=" " id="row9_chekbox" onChange={(e)=>{this.onCheckedChanged(9,e.target.checked)}}></Form.Check>       </td>
            <td>Camp chairs</td>
            <td>250</td>
            <td>CA562</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(9,val)} value={this.state.campchairsQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.campchairsSelected}/></td>
        </tr>

        <tr>
            <td><Form.Check type="checkbox" label=" " id="row10_chekbox" onChange={(e)=>{this.onCheckedChanged(10,e.target.checked)}}></Form.Check>       </td>
            <td>Compass</td>
            <td>300</td>
            <td>B637</td>
            <td><NumericInput onChange={val=>this.onItemQtyChanged(10,val)} value={this.state.compassQty} className="form-control"  min={ 0 } max={ 20 } step={ 1 } size={ 3 } disabled={!this.state.compassSelected}/></td>
        </tr>
    </thead>
</Table>

<div>
    <label>Total : </label>
    <label id='total_vale'>{this.state.totalValue}</label>
</div>

<div className="form-group" align="center">
<input type="submit" value="Add to cart" className="btn btn-primary"/>
</div>

<button className="btn btn-warning" style={{ marginTop: '15px', marginLeft:'5px' }} onClick={this.btnDemo}>
<i className="far far-check-square"></i>
&nbsp; <b>Demo</b>
</button>


</form>
</div>
)
}



}

export default Addcamping;