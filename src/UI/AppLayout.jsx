import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";


const AppLayout= ()=>{

    const navigation= useNavigation(); // useNavigation()----> navigation.state----> ki 3 states hoti hai---> idle, submitting(yeh wali state tb ati hai jb form submit hora hota hai), loading
    // console.log(navigation)

    if(navigation.state ==="loading") return <Loading />

    return(
        <>
            <Header />
            {/* outlet ka use yeh hai ki, parent component ke andar jitne bhi child component bnaaye hai, unhe yeh one by one render krdega */}
            <Outlet /> 
            <Footer />
        </>
    );
};

export default AppLayout;