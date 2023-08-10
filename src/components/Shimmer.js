

const Shimmer = () => {
  return (
    <>



      <div className="restaurant-list">

        {Array(10).fill("").map((e, index) => <div key={index} className="shimmer-card">
          <div className="h-4 w-20 bg-slate-500">
            <div className=""></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-cuisine"></div>
            <div className="shimmer-distance"></div>


          </div> </div>)}
      </div>
    </>
  )
};
export default Shimmer;
