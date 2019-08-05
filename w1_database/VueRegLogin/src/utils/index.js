exports.formData = (obj={})=>{
    let {data=[],code=1000,msg="success"} = obj;
    if(code === 250 && !obj.msg){
        msg = 'login fail';
    }
    return {
        code,
        data,
        msg
    }
}