import { useEffect, useState } from "react"
import { useDebounce } from "../utils/useDebounce";
import axios from 'axios';

export default function AutoComplete() {
  const [searchValue, setSearchValue] = useState("");
  const [accounts, setAccounts] = useState("");
  const params = useDebounce(searchValue, 1000); // // debounceValue
  
  function handleChange(event: any) {
    setSearchValue(event.target.value)
  }

  const getSearchAccounts = async () => {
    setAccounts("");
    const res = await axios.get("data.json") as any;
    setAccounts(res.data.name)
  }

  useEffect(() => {
    if(params.length > 0) {
      getSearchAccounts()
    }
    else{
      setAccounts("");
    }
    // debounceValue变化且不为空时，发送查询请求
  }, [params])

  return(
    <>
    <input onChange={handleChange}/>
    <p>输入内容：{searchValue}</p>
    <p>搜索结果：{accounts}</p>
    </>
  )
}