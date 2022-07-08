import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex'
import toast, { Toaster } from 'react-hot-toast';


export const EnHash = (context , loginAuth ,  logoutAuth , dispatch) => {
    
    const verify = import.meta.env.VITE_KEY

    const hashDigest = sha256(context);
    const hexDigest = Hex.stringify(hashDigest);


    if(context !== ''){

        if(hexDigest === verify){
            toast.success("Verified")
            setTimeout(() => {
                dispatch(loginAuth())
            } , 2000)
        }else {
            dispatch(logoutAuth())
            toast.error("You are not allowed")
        }

    }
    else{
        dispatch(logoutAuth())
        toast("Please fill your key" , {
            icon: '🔑',
        })
    }

    
}