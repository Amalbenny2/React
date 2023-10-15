import React from 'react'


function Task() {
  return (
    <div>
      <div style={{backgroundColor:'darkslateblue',height:'500px',width:'800px',marginLeft:"auto",marginRight:"auto",fontSize:'30px',fontFamily:'bold',paddingTop:"2%",marginTop:'10%',borderWidth:'1px',borderStyle:'solid',borderColor:"black",}}>
        <h1 style={{paddingLeft:'20%',paddingTop:'2%',color:"white"}}>CSS Inline Style</h1>
        <table style={{backgroundColor:'White',color:"black",width:'400px',height:"200px",fontSize:'30px',fontFamily:'fantasy',padding:"15px",borderWidth:'7px',borderStyle:'solid',borderColor:"lightblue",marginLeft:"45%",marginRight:"auto"}}>
          <tr>
          <td>
            This is Test for inline CSS:
          </td>
          </tr>
          <tr>
          <td style={{fontSize:'25px'}}>
            This is Test for inline CSS
          </td>
          </tr>
          <tr>
          <td style={{fontSize:'23px',opacity:0.8}}>
          This is Test for inline CSS
          </td>
          </tr>
          <tr>
          <td style={{fontSize:'20px',opacity:0.4}}>
          This is Test for inline CSS
          </td>
          </tr>
          <tr>
          <td style={{fontSize:'19px',opacity:0.3}}>
          This is Test for inline CSS
          </td>
          </tr>
        </table>
        <h6 style={{paddingLeft:'88%',fontSize:'12px'} }>www.educba.com</h6>
        <img style={{height:"50px",paddingBottom:'50%',paddingLeft:'10%'}} src='https://tse4.mm.bing.net/th?id=OIP.yA9s5IVSSd9DCcgc8o3J3QHaHa&pid=Api&P=0&h=180'></img>
        
      </div>

    </div>
  )
}

export default Task