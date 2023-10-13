
function Pagination ({count, onPage}) {
    
    function countButton () {
        let arr = []
        let page = 0
        for (let i = 1; page < count; i++) {
            arr.push(i)
            page += onPage
        }
        return arr
    }

    return (
      <div className="container">
        <button>Previous</button>
        {countButton().map(el => (
            <button>{el}</button>
        ))}
        <button>Next</button>
      </div>
    )   
  }
  
  export default Pagination