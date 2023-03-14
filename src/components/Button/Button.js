import Loader from "../Products/Loader"
import "./Button.css"

const Button = ({isUserLoggedIn, handleLogin,isLoading,ifUserLoggedIn,ifUserLoggedOut}) => {
    if(isLoading){
        return(
            <>
                <button className="login">
                    <Loader component={"Login"}/>
                </button>
            </>
        )
    } else {
        return(
            <>
                <button className="login" onClick={handleLogin}>
                    {isUserLoggedIn ? ifUserLoggedIn : ifUserLoggedOut}
                </button>
            </>
        )
    }
    
}

export default Button