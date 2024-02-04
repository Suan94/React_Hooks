import React from 'react';
import { 
    Route,
    Routes,
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';




export const AppRouter = () => {




    




    return (

        <>

            <div>
                
                <NavBar />
                
                <div className='container'>
                    <Routes>
                        
                        
                        <Route path='/' element={ <HomeScreen />}/>
                        <Route path='/login' element={ <LoginScreen />}/>
                        <Route path='/about' element={ <AboutScreen />}/>

                    </Routes>
                </div>

                
                

            </div>

        </>
            




    );
};
