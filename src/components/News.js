

const News = (prop) => {
  return (
<>
  <a href={prop.url} style={{textDecoration:"none", margin:"5%"}}>
   <section  style={{ backgroundColor:"black", color:"white", textAlign:"center", display:"inline-flex", width:"90%" , height:"130px", margin:"10px"  ,borderRadius:"10px" , marginTop:"3%" }} >
<div > <img src={prop.urlToImage} alt="" style={{ borderRadius:"10px", height:"100%"}}/> </div>
<div > {prop.title}</div>
</section>
    </a>
 </>  ) 

}

export default News;
