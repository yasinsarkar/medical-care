import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Login/firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    const auth = getAuth();
    

    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {          
           setUser(result.user) ;            
        })
        .finally(()=> setIsLoading(false));
    }

   

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    } ,[])

    const logOut = () => { 
        setIsLoading(true)       
        signOut(auth)
        .then(() => {})
        .finally(()=>setIsLoading(false))
    }

    const handleRegistration = (e) =>{
        e.preventDefault();
        console.log(email,password)
        if(password.length<6){
            setError('Password must be 6 Charecter')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have a minimum of two upper cases ')
            return;
        }
        if(isLogin){
            processLogin(email, password)
        } 
        else{
            createNewUser(email, password)
        }
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
                setError('')
                setUserName()
                
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        }) 
    }

    const toggolLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    
    return{
        user,
        signInWithGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggolLogin,
        isLogin,
        handleNameChange,
        name,
        setUserName,
        isLoading     
        
    }
}

export default useFirebase;