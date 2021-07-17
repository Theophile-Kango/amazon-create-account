import React, {useState} from 'react'
import amazon from './../images/amazon.png'
import passwordCheck from './../helpers/passwordCheck'

const Registration = () => {
    const initialValues = {
        name: "",
        email: "",
        password1: "",
        password2: "",
    }
    
    const [state, setState] = useState(initialValues);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { password1, password2, name, email } = state;
    
    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const submit = e => {
        e.preventDefault();
        if(passwordCheck(password1,password2)){
            setIsSubmitted(true)
        }
    }

    return (
        <div>
            <header>
                <img src={amazon} alt="Amazon" />
            </header>
            <form onSubmit={submit}>
                <h2>Create account</h2>
                <div className="isSubmitted">
                    <p>Name : <span>{name}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>Password: <span>{password1}</span></p>
                </div>
                <div>
                    <label>Your name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        name="password1"
                        value={password1}
                        placeholder="At least 6 characters" 
                        type="password" 
                        onChange={handleChange}
                        required 
                    />
                    <p><small><i>i</i>Passwords must be at least 6 characters.</small></p>
                </div>
                <div>
                    <label>Re-enter password</label>
                    <input
                        name="password2"
                        value={password2}
                        type="password"
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <button>Create your Amazon account</button>
                </div>
                <div>
                    <p>
                        By creating an account, you agree to Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> 
                        and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
                    </p>
                </div>
                <hr/>
                <p>Already have an account? <a href="https://www.amazon.com/ap/signin?clientContext=130-4649631-2400710&openid.return_to=https%3A%2F%2Ftrack.amazon.com%2F&prevRID=ZTBKEEAKPEPRZ2VJNMKK&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_shippingrecipientcentral_us&openid.mode=checkid_setup&siteState=clientContext%3D133-5959651-2511706%2CsourceUrl%3Dhttps%253A%252F%252Ftrack.amazon.com%252F%2Csignature%3DaIjtVnII3EuhLKiVpJY6BuFeqXYj3D&marketPlaceId=A2BR6UVHX99FEC&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_shippingrecipientcentral_us_amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">Sign-in</a></p>
            </form>
            <hr/>
            <footer>
                <div>
                    <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088">Conditions of Use</a>
                    <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>
                    <a href="https://www.amazon.com/help">Help</a>
                </div>
                <p>
                    &copy; 1996-2021, Amazon.com, Inc or its affiliates
                </p>
            </footer>
        </div>
    )
}

export default Registration
