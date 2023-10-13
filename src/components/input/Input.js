
function Input ({type, placeholder, value, borderColor, borderRadius}) {
  return (
    <div>
        <input style={{borderColor, borderRadius}} type={type} placeholder={placeholder} value={value}></input>
    </div>
  )   
}

export default Input