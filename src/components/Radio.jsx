function Radio(props) {
  return <div className="radio">
    <label>
      <input 
        name={props.name} 
        type="radio" 
        checked={props.checked} 
        value={props.value}
        onChange={(e) => {
          props.cb(e)
        }
        } 
      />
      <span>{props.value}</span>
    </label>
  </div>
}

export {Radio}