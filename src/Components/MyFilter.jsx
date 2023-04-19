import React from "react";
import MyInput from "./UI/MyInput";
import MySelect from "./MySelect";

const MyFilter = ({filter,setFilter}) => {

    const opts = [
        {value:'title', name: 'По названию'},
        {value:'body', name:'По содержанию'}
        ]

    return (
        <div>
        <MyInput placeholder='Поиск...' value={filter.query} 
        onChange={e=>setFilter({...filter, query: e.target.value})}/>
        <MySelect value={filter.sort} onChange={selSort=>setFilter({...filter, sort: selSort})}  
        defValue={'Сортировка по'} option={opts}/>
        </div>
    )
}

export default MyFilter