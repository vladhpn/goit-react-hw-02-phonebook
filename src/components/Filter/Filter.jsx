const Filter = ({value, onChange}) => {
    return(<>
    <h2>Contacts</h2>  
     <label>
        Find contacts by name
        
          <input type='text' value={value} onChange={onChange} />
        
      </label> </>)}

export default Filter;