import React  from "react";



function MySelect({option, defValue, value, onChange}) {
  
 
  return (
      
    <select value={value} onChange={e=>onChange(e.target.value)}>
        <option key={option.value} value=''>{defValue}</option>
        {
            option.map(opt => <option value={opt.value}>{opt.name}</option>)
        }
    </select>
  );
}

export default MySelect;
