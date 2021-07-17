const passwordCheck = (pwd1, pwd2) => {
    if(pwd1.length < 6){
        return false;
    }
    return pwd1 === pwd2
}

export default passwordCheck;