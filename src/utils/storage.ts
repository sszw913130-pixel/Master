const storage={
      get:(key:string)=>{
        return localStorage.getItem(key)
    },
    set:(key:string,value:any)=>{
        return localStorage.setItem(key,JSON.stringify(JSON.parse(value)))
    },
    remove:(key:string)=>{
        return localStorage.removeItem(key)
    },
    clear:()=>{
        return localStorage.clear()
    }
}
export default storage
