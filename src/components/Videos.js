
function Videos(props){
       console.log(props);
       let {title}=props;
    return <>
      <h1>{title}</h1>
      <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      className="photo"
    />
    </>

}

export default Videos;