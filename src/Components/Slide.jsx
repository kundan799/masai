function Slide({data}) {
  //{title,description,key}
 //console.log(data)
  return (
    <div className="slide-container" data-testid="slide"  >
      <h3 data-testid="title">{data.title}</h3>
      <p data-testid="description">{data.description}</p>
    </div>
  );
}

export default Slide;
