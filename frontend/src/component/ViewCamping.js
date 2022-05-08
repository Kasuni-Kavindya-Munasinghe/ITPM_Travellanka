import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import jspdf from "jspdf";
import 'jspdf-autotable';
import swal from "sweetalert2";
import { useRef } from 'react/cjs/react.production.min';
import Table from "react-bootstrap/Table"




const selesctedStates={
    torch:false,
    tent:true
}

const generatePDF = camping=> {

    const doc = new jspdf();
    const tableColumn = ["First Name", "Last Name", "Email", "Contact Number","Total"];
    const tableRows = [];
   

    camping.map(camp => {
         const campData = [
             camp.firstName,
            camp.secondName,
            camp.email,
            camp.contactNumber,
            camp.totalValue
             
        ];
        tableRows.push(campData);
    })

    doc.text("Total amount of Camping items details Report", 14, 8).setFontSize(13);

    
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save(" Total amount of Camping items details Report.pdf");
};

const Camping = props =>(
    
   
    <tr className='tableParent' id={props.id}>
        
        <td id={props.id} className='fname' style={{color:'white'}}>{props.camping.firstName}</td>
        <td  id={props.id} className='lname' style={{color:'white'}}>{props.camping.secondName}</td>
        <td id={props.id}  className='email' style={{color:'white'}}>{props.camping.email}</td>
        <td id={props.id}  className='number' style={{color:'white'}}>{props.camping.contactNumber}</td>
       
        <td id='itemList' style={{color:'white',whiteSpace:'nowrap'}}>
            {/* ---------------------------------------------------------------------------- */}
            <tr id={props.id} class='torch_col' className='torch_col'>Torch</tr>
            <tr id={props.id} class='tent_col' className="tent_col">Tent</tr>
            <tr id={props.id} class='wbottle_col' className="wbottle_col">Water bottles</tr>
            <tr id={props.id} class='firstaidkit_col' className='firstaidkit_col'>First Aid Kit</tr>
            <tr id={props.id} class='campingpillow_col' className='campingpillow_col'>Camping pillow</tr>
            <tr id={props.id} class='sleepingbags_col' className='sleepingbags_col'>Sleeping bags</tr>
            <tr id={props.id} class='sleepingpads_col' className='sleepingpads_col'>Slepping pads</tr>
            <tr id={props.id} class='flashlight_col' className='flashlight_col'>Flashlight</tr>
            <tr id={props.id} class='campchairs_col' className='campchairs_col'>Camp chairs</tr>
            <tr id={props.id} class='compass_col' className='compass_col'>Compass</tr>

            {/* ---------------------------------------------------------------------------- */}
        </td>

        <td id='itemPrices'>
            <tr id={props.id} class='torch_col' className='torch_col'>400</tr>
            <tr id={props.id} class='tent_col' className='tent_col'>550</tr>
            <tr id={props.id} class='wbottle_col' className='wbottle_col'>100</tr>
            <tr id={props.id} class='firstaidkit_col' className='firstaidkit_col'>250</tr>
            <tr id={props.id} class='campingpillow_col' className='campingpillow_col'>500</tr>
            <tr id={props.id} class='sleepingbags_col' className='sleepingbags_col'>100</tr>
            <tr id={props.id} class='sleepingpads_col' className='sleepingpads_col'>200</tr>
            <tr id={props.id} class='flashlight_col' className='flashlight_col'>300</tr>
            <tr id={props.id} class='campchairs_col' className='campchairs_col'>250</tr>
            <tr id={props.id} class='compass_col' className='compass_col'>300</tr>
        </td>

        <td id='itemCodes'>
            <tr id={props.id} class='torch_col' className='torch_col'>F511</tr>
            <tr id={props.id} class='tent_col' className='tent_col'>T526</tr>
            <tr id={props.id} class='wbottle_col' className='wbottle_col'>W536</tr>
            <tr id={props.id} class='firstaidkit_col' className='firstaidkit_col'>WE3</tr>
            <tr id={props.id} class='campingpillow_col' className='campingpillow_col'>SD3</tr>
            <tr id={props.id} class='sleepingbags_col' className='sleepingbags_col'>ASS</tr>
            <tr id={props.id} class='sleepingpads_col' className='sleepingpads_col'>E23</tr>
            <tr id={props.id} class='flashlight_col' className='flashlight_col'>233</tr>
            <tr id={props.id} class='campchairs_col' className='campchairs_col'>AS2</tr>
            <tr id={props.id} class='compass_col' className='compass_col'>D23</tr>
        </td>

        <td id='itemQty'>
            <tr id={props.id} class='torch_col' className='torch_col'display='none'>{props.camping.torchQty}</tr>
            <tr id={props.id} class='tent_col' className='tent_col'>{props.camping.tentQty}</tr>
            <tr id={props.id} class='wbottle_col' className='wbottle_col'>{props.camping.waterBottleQty}</tr>
            <tr id={props.id} class='firstaidkit_col' className='firstaidkit_col'>{props.camping.firstaidkitQty}</tr>
            <tr id={props.id} class='campingpillow_col' className='campingpillow_col'>{props.camping.campingpillowQty}</tr>
            <tr id={props.id} class='sleepingbags_col' className='sleepingbags_col'>{props.camping.sleepingbagsQty}</tr>
            <tr id={props.id} class='sleepingpads_col' className='sleepingpads_col'>{props.camping.sleepingpadsQty}</tr>
            <tr id={props.id} class='flashlight_col' className='flashlight_col'>{props.camping.flashlightQty}</tr>
            <tr id={props.id} class='campchairs_col' className='campchairs_col'>{props.camping.campchairsQty}</tr>
            <tr id={props.id} class='compass_col' className='compass_col'>{props.camping.compassQty}</tr>


        </td>
        <td id='total'>
            <tr id={props.id}>{props.camping.totalValue}</tr>
        </td>
    

        
        {/*<td>{props.staff.password}</td>*/}
        
    
        {/*<td >

        <Link to ={"/updateStaff/"+props.staff._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteStaff(props.staff._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updateCamping/${props.camping._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Update
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteCamping(props.camping._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
      <td class='hidden'> <input class='selectedStatusClass' type='hidden' 
            id={props.id} 
            data-torchselected={props.camping.torchSelected}
            data-tentselected={props.camping.tentSelected}
            data-waterbottleselected={props.camping.waterBottleSelected} 
            data-firstaidkitselected={props.camping.firstaidkitSelected} 
            data-campingpillowselected={props.camping.campingpillowSelected}
            data-sleepingbagsselected={props.camping.sleepingbagsSelected}
            data-sleepingpadsselected={props.camping.sleepingpadsSelected}
            data-flashlightselected={props.camping.flashlightSelected}
            data-campchairsselected={props.camping.campchairsSelected}
            data-compassselected={props.camping.compassSelected}

            ></input></td>
       </tr>
)

const Items=props=>(
    <tr>
       <td style={{color:'white'}}>{props.items.torchQty}</td>
    </tr>
)


export default class EditCamping extends Component{
    constructor(props){
        super(props);

        //this.DeleteCamping = this.DeleteCamping.bind(this);
        this.state = {camping: [],
                     searchText : '',}
        // this.tcl=React.createRef();
        // var tcl=null;
    }

    componentDidMount(){

        axios.get('http://localhost:8070/Camping/')
        .then(response => {
            this.setState({camping: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
        
    }

    componentDidUpdate(){
        this.setItemRowVisibility();
        const hlist=document.getElementsByClassName('hidden');
        for(let n=0;n<hlist.length;n++){
            hlist[n].style.display='none';
        }
    }

    DeleteCamping(id){
        axios.delete('http://localhost:8070/Camping/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Camping Details successfully Deleted","success")
        .then((res=>{if(res.isConfirmed){window.location='/listS'}}));
         
        // this.setState({
        //     camping: this.state.camping.filter(el => el._id !== id)
        // })
    }

    

    

       
      
    // CurrentCampingTable(){
        
    //     return this.state.camping.map((currentexercise,index) => {
    //         selesctedStates.tent=false;
    //         // console.log("Torch qty: "+currentexercise.torchQty);
    //         return <Camping camping={currentexercise} DeleteCamping={this.DeleteCamping} key={currentexercise._id} id={index}/>
            

    //     })
        
    // }
    CurrentCampingTable(stext){
        if((stext!='null') && ( stext!='')){


            const list= this.state.camping.map((currentexercise,index) => {
                var searchString="";
                searchString=(stext.toString());
                // if((currentexercise.firstName).toLowerCase)

                selesctedStates.tent=false;
                var lcString="";
                var nString="";
                nString=currentexercise.firstName;
                nString=nString.toLowerCase();
                lcString=searchString.toString().toLowerCase();
                if(nString.includes(lcString)){
                    console.log("Found string : "+nString);
                    return <Camping camping={currentexercise} DeleteCamping={this.DeleteCamping} key={currentexercise._id} id={index} hidden={true}/>
                }else{
                    return <Camping camping={currentexercise} DeleteCamping={this.DeleteCamping} key={currentexercise._id} id={index}/>;
                }
                // console.log("Current user : "+typeof(currentexercise.firstName));
                // console.log("Search string : "+(lcString));
                // console.log("Found string : "+searchString.toString().toLowerCase());
                // return <Camping camping={currentexercise} DeleteCamping={this.DeleteCamping} key={currentexercise._id} id={index}/>
                
    
            });
            return list;

        }else if(stext=="null"){
            return this.state.camping.map((currentexercise,index) => {
                selesctedStates.tent=false;
                console.log("Found string : "+stext);
                return <Camping camping={currentexercise} DeleteCamping={this.DeleteCamping} key={currentexercise._id} id={index}/>
                
    
            })
        }
        
        
    }
     handleSearch=(obj)=>{
        //  console.log("Searching : "+obj.target.value);
         this.setState({searchText:obj.target.value},()=>{this.filterResults()});

     }
   
    setItemRowVisibility(){
        const torchlist=document.getElementsByClassName('torch_col');
        const tentlist=document.getElementsByClassName('tent_col');
        const waterBottlelist=document.getElementsByClassName('wbottle_col');
        const firstaidkitlist=document.getElementsByClassName('firstaidkit_col');
        const campingpillowlist=document.getElementsByClassName('campingpillow_col');
        const sleepingbagslist=document.getElementsByClassName('sleepingbags_col');
        const sleepingpadslist=document.getElementsByClassName('sleepingpads_col');
        const flashlightlist=document.getElementsByClassName('flashlight_col');
        const campchairslist=document.getElementsByClassName('campchairs_col');
        const compasslist=document.getElementsByClassName('compass_col');

       const listStatus=document.getElementsByClassName('selectedStatusClass');
        // console.log("Liststts: "+listStatus.length);
        // console.log("OBJ:");
        // console.log(listStatus[0].getAttribute('data-torchselected'));
        
        const lists=[torchlist,tentlist,waterBottlelist,firstaidkitlist,campingpillowlist,sleepingbagslist,sleepingpadslist,flashlightlist,campchairslist,compasslist];
        const listids=['data-torchselected','data-tentselected', 'data-waterbottleselected', 'data-firstaidkitselected', 'data-campingpillowselected','data-sleepingbagsselected', 'data-sleepingpadsselected', 'data-flashlightselected', 'data-campchairsselected', 'data-compassselected'];
        console.log("List length : "+lists.length);
        for(let n=0;n<lists.length;n++){
            console.log("l : "+n);
            console.log("List size : "+lists[n].length);
            for(let c=0;c<lists[n].length;c++){
               
                // console.log("list "+ n + " attrib " + c + lists[n][c]);
                console.log("ID : "+lists[n][c].id);
                if(listStatus[(lists[n][c].id)].getAttribute(listids[n])=='true'){
                    console.log(listids[n]+" for user "+lists[n][c].id+" = TRUE");
                    lists[n][c].style.display='';
                }else{
                    console.log(listids[n]+" : "+listStatus[(lists[n][c].id)].getAttribute(listids[n]));
                    lists[n][c].style.display='none';
                }
            }
            
            // if(listStatus[n].torchSelected==false){
            //     torchlist[n].style.display='none';
            // }
            // console.log("Id : "+torchlist[n].id);
            
        }

    }

    filterResults=()=>{
            const userRows=document.getElementsByClassName('tableParent');
            const fnameList=document.getElementsByClassName('fname');
            const lnameList=document.getElementsByClassName('lname');
            const emailList=document.getElementsByClassName('email');
        // this.setState({searchText:e.target.value})
        if(this.state.searchText!=''){
            
            console.log("Usres : "+userRows.length);
            for(let n=0;n<userRows.length;n++){
                var fname,lname,email="";
                fname=fnameList[n].innerHTML;
                lname=lnameList[n].innerHTML;
                email=emailList[n].innerHTML;

                fname=fname.toLowerCase();
                lname=lname.toLowerCase();
                email=email.toLowerCase();

                var searchText="";
                searchText=this.state.searchText;
                searchText=searchText.toLowerCase();

                if((fname.includes(searchText))||(lname.includes(searchText))||(email.includes(searchText))){
                    console.log('Found : '+fname);
                    userRows[n].removeAttribute('hidden');
                }else{
                    var hideId=0;
                    var idString="";
                    idString=fnameList[n].id;
                    hideId=parseInt(idString);
                    console.log("Hiding : "+hideId);
                    userRows[n].hidden='true';
                    // this.setState({searchText:'null'});
                }
                // console.log("User name 353 :"+name);
            }
        }else{
            for(var n=0;n<userRows.length;n++){
                userRows[n].removeAttribute('hidden');
            }
        }
    }

   toggleSearch(){
       
   }

    

   render(){
       return (

           <div  className = "container">
               
               <br></br>
               <center><h1>All Camping Items Details</h1></center>
               <div className="container">



<div className="row">

    <div className="col-lg-9 mt-2 mb-2"/>

    <div className="col-lg-3 mt-2 mb-2">

        <input value={this.state.searchText} className="form-control" type="text" placeholder="Search" name="searchEmployee" onChange={this.handleSearch}>                                

        </input>

    </div>

</div>

<Table striped bordered hover variant="dark">
                   <thead className="thead-light">
                       <tr>
                       <th >First Name</th>
                       <th >Last Name</th>
                       <th >Email</th>
                       <th >Contact Number</th>
                       <th>Camping items</th> 
                       <th>Price</th>
                       <th>Code</th>
                       <th>Qty</th>
                       <th>Total</th>
                       <th>Action</th>
                       
                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentCampingTable("deesh")  }
                           {/* {this.setItemRowVisibility()} */}
                           {/* {this.CurrentItemsTable()} */}
                       </tbody>
               </Table>
           </div>
           <div class="button">
         <button type ="button" class = "btn btn-secondary btn-sm" onClick={()=> generatePDF(this.state.camping)}>GenerateReport</button>
            </div>
           </div>


           
       )
        
   }
}