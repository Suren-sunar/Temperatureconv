import '../Components/Input.css'
const Input = ({temp , value , onChange}) => {
    
  return (
    <>
    <div className='container1'>
        <label>
        {temp}
         <br />
        <input
        type="text"
        value={value}
        onChange={onChange}
        
        
        />

        </label>
      </div>
    </>
  )
}

export default Input




