import axios from 'axios';
import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Footerhome from './Footerhome';
const Submitpage=()=>{
    const [user,setUser]=useState({
        movie_name:"",
        movie_review:"",
        author:""
    });
    const {movie_name, movie_review,author}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/posts",user);
        alert('Request Sent');
    }
    return(
        <div className="App">
        <header className="App-header">
        <Link to='/'><button style={{float:'right',marginRight:'20px',color:'white',marginTop:'-25px', width:'150px'}}>Review page</button></Link>
         <Header title="Movies Site"/>
          <form onSubmit={e=>onSubmit(e)}>
             <p><label>Movie Name:</label>
            <input type="text" name='movie_name' placeholder='silicon valley' value={movie_name} onChange={e=>onInputChange(e)} required/> 
            <label>Author:</label>
            <input type="text" name='author' placeholder=" Your Name" value={author} onChange={e=>onInputChange(e)}/> 
            <label>Movie Review:</label>
            <textarea name='movie_review' placeholder=" was good" value={movie_review} onChange={e=>onInputChange(e)} required/> 
           </p>
            <Footer/>
            </form>
            </header>  
            <Footerhome/>
            </div>

    );
}
export default Submitpage;