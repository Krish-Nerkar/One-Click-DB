import React from 'react'
import './style.css'
import LogoutButton from '../Buttons/logout';
import firestore from '../Base/firestore.js';
import Profile from '../Buttons/profile.js'


class NewHome extends React.Component
{
    removerow = (id) =>
    {
        console.log("======================REMOVE ROW=====================")
        var row = document.getElementById(id)
        
        // var txt;
        var r = window.confirm("Press OK to Confirm Row Delete");
        if (r === true) {
            // txt = "You pressed OK!";
            row.remove()
        } else {
            // txt = "You pressed Cancel!";
        }
        // document.getElementById("demo").innerHTML = txt;
        // this.upload()
        // window.location.reload()
    }

    addrow = (key, value) =>
    {
       
        // console.log(values)
        console.log("====================================ADDROW CALLED================================")

        
        var table = document.getElementById('table')
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        // console.log(rowCount)
        row.id = rowCount.toString()
        var cell1 = row.insertCell(0);
        var element1 = document.createElement("input");
        element1.className = "key"
        element1.setAttribute("placeholder", "Key")
        cell1.appendChild(element1);
        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.className = "value"
        element2.setAttribute("placeholder", "Value")


        cell2.appendChild(element2);
        var cell3 = row.insertCell(2);
        var element3 = document.createElement("button");
        element3.className = "cross"
        var img = document.createElement("box-icon")
        img.setAttribute("name", "trash-alt")
        element3.appendChild(img)
        element3.addEventListener("click", () => this.removerow(rowCount))
        cell3.appendChild(element3)

        

    }

    componentDidMount(){
        this.func()
    }


    func = async() =>{
        await new Promise(r => setTimeout(r, 1000));
        this.get()
    }

    get = async() => {
        console.log("====================================GET CALLED================================")

        const db = firestore.firestore();
        const userid = localStorage.getItem('userid')
        
       
        const userRef = db.collection('Users').doc(userid);
        const doc = await userRef.get();

        if (!doc.exists) {
            // console.log("NO DOCUMENT")
            this.addrow("key", "value")
            this.upload()
        } 
        else
        {
            // console.log('Document data:', doc.data());
            let obj = doc.data()
            let values = obj["values"]
                
            for(let i = 0; i < values.length ; i++){
                let row = values[i]
                let key = row["key"]
                let value = row["value"]
                this.addrow(key, value)
            }
        }
            
        
    }
    

    upload = () => {
        console.log("====================================UPLOAD CALLED================================")
        const db = firestore.firestore();
        
        var table = document.getElementById('table')
        var rowCount = table.rows.length;
        const userid = localStorage.getItem('userid')
            
        let array = []
        
        rowCount = rowCount.toString()
        for(let i = 0; i < rowCount; i++){
            // console.log(i)
            var key = document.getElementsByClassName('key')[i].value
            var value = document.getElementsByClassName('value')[i].value
            // console.log(key)
            let data = {key : key, value : value}
            array.push(data)
            
        }

        // console.log(array)

        const data = {
  
            values: array,
 
        };

        db.collection('Users').doc(userid).set(data);
       

    }

    visit = () =>
    {
        console.log('=============================VISIT CALLED==============')
        const userid = localStorage.getItem('userid')
        let url = "https://oneclick-db.herokuapp.com/user/"+userid
        window.open(url)
    }

    render = () =>
    {
        return(
            <div>
                <Profile/>
                <div className="topnav" id="myTopnav">
                    <a  className="active" href = "/">
                       <span className = "black-logo">OneClick <span className = "grey-logo">Database</span> </span>
                    </a>
                    {/* <a> */}
                    <a href = "#">
                    
                    </a>
                    
                    <a href = "#">
                    <LogoutButton/>
                    <button className = "namee">Hi Krish!</button>
                    {/* <LogoutButton/> */}
                    {/* <LogoutButton/> */}
                    </a>
                    {/* <a> */}
                    {/* <h1>Hi Krish!</h1> */}
                    {/* </a> */}
                    {/* </a> */}
                    {/* <LogoutButton/> */}
                    {/* <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a> */}
                    {/* <a href="javascript:void(0);" class="icon" onClick = {this.myFunction}>
                        <i class="fa fa-bars"></i>
                    </a> */}
                </div>
                
                <div className = "main">
                    <div className="topnav alt" id="myTopnav">
                    <a href = "#">
                        <button className = "add" onClick = {this.addrow.bind(this, "", "")}>Add New Row +</button>
                       {/* <span class = "black-logo">OneClick <span className = "grey-logo">Database</span> </span> */}
                    </a>
                    <a href = "#">
                        <button className = "add save" onClick = {this.upload}><box-icon className = "i" name='save' ></box-icon></button>


                        <button className = "add view">View API Documentation</button>

                        <button className = "add share" onClick = {this.visit}>Share URL 🔗</button>

                       {/* <span class = "black-logo">OneClick <span className = "grey-logo">Database</span> </span> */}
                    
                       {/* <span class = "black-logo">OneClick <span className = "grey-logo">Database</span> </span> */}
                    
                       {/* <span class = "black-logo">OneClick <span className = "grey-logo">Database</span> </span> */}
                    </a>
                    </div>
                    <div className = "main1">
                    <table>
                        <thead>
                            <tr>
                                <th><h1>Key</h1></th>
                                <th><h1>Value</h1></th>
                            </tr>
                        </thead>
                        <tbody id = "table">
                            {/* <tr id = "0">
                                <td><input placeholder = "Key" className = "key" type = "text"/></td>
                                <td><input placeholder = "Value" className = "value" type = "text"/></td>
                                <td className = "trash"><button className = "cross" ><box-icon name='trash-alt'></box-icon></button></td>
                            </tr> */}
                        </tbody>
                    </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewHome