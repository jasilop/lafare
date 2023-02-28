import React,{useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
// import Contactform from ' ./components/Contactform.css'
const ContactForm = () => {
    // const hideContact=()=>{
    //     document.getElementById("right-section").style.display="none"
    // }
    const closeContact=()=>{
        let modal = document.getElementById("contact_modal")
        modal.style.visibility="hidden";
        }
  const successAlert=() =>{
    Swal.fire({
        title:'Thank You!',
        text:'We will Be in Touch Soon..',
        icon:'success'
    }).then(()=>{
        closeContact()
    })
  }
    const products = ["Chicken curry paste","Pepper chicken paste","Beaf roast paste","Fish curry paste"]
    const [product, setProduct]=useState('');
    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    // submit event
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(product, name,phone,email,message );

        const data={
            Name:name,
            Phone:phone,
            Email:email,
            Product:product,
            Message:message
        }
        axios.post('https://sheet.best/api/sheets/ede38398-90ad-4949-ac9a-eb9a7ea4441e', data).then(( response )=>{})
        // console.log(response);
        // clearing form field
        setProduct('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }

  return (
    <div className='right-section' >
     <form id="contact_form"   onSubmit={handleSubmit} >
        

                 {/* <div className="input-group">
                    <label for="Data_sets">Product</label>
                    <select id="Data_sets" name="product" onChange={(e)=>setProduct(e.target.value)} value={product} >
                        {products.map((item,key) => (
                        <option>{item}</option> 
                         ))}
                      </select>
                    
                      
                </div> */}
                <div className="input-group">
                    <label htmlFor="fname"> Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name" 
                    // value={name}
                    // onChange={handleChange}
                    onChange={(e)=>setName(e.target.value)} value={name}
                    />
                </div> 

                <div className="input-group">
                    <label htmlFor="fname"> Phone</label>
                    <input type="tel" id="fname" name="phone" placeholder="Mobile Number" 
                    // value={phone}
                    // onChange={handleChange}
                    onChange={(e)=>setPhone(e.target.value)} value={phone}
                    />
  
                </div>

                <div className="input-group">
                    <label htmlFor="fname"> Email</label>
                    <input type="text" id="fname" name="email" placeholder="Your Mail Id"
                    // value={email}
                    // onChange={handleChange}
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                 
                </div>
                
                
                <div className="input-group">

                    <label  htmlFor="fname"> Message</label>
                    <textarea type="text" id="fname" name="text" placeholder="Enter your message"
                    // value={message}
                    // onChange={handleChange}
                    onChange={(e)=>setMessage(e.target.value)} value={message}
                    />

                  
                </div>

                
                
                
                <div className="submit-section enquire_button">
                    {/* <input type="submit" value="Submit"/> */}
                    
                     <button className='buttonsubmit' onClick={successAlert} >submit</button> 
                     {/* <button className='buttonsubmit' onClick={() => hideContact()} >submit</button>  */}
                     {/* <!-- <input type="submit" className="submit-button"/> --> */}
                     {/* onClick={successAlert} */}
                </div>


            </form>

        
    </div>
  )
}

export default ContactForm