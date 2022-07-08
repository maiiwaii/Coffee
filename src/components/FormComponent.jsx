import axios from "axios"
import { useState } from "react"

const FormComponent = () => {
    const [test, setTest] = useState("Waii")
    const [Coffee, setCoffee] = useState()
    
    const dd = (email,name) => {
        axios.get("https://api.sampleapis.com/coffee/hot").then((Response)=>{
            console.log(Response.data);
            setCoffee(
                Response.data
            )
        })
    }

    const cl = () => {
        // document.getElementById("coffee1").innerHTML = "" 
        setCoffee()

    }


    
    return(
        <div>
            <div>
                <div>
                    <div className="download_button" onClick={()=> dd()}>
                    {/* <div className="download_button" onClick={()=> setTest("form button")}> */}
                        Button
                    </div>
                </div>

                <div className="back_button" onClick={()=> cl()}>
                    Back
                </div>
            </div>
            <div className="polaroid">
                {Coffee
                    ?Coffee.map((value, index)=> 
                        <div key={"container"+index} className="container">
                            
                            <div className="left-side">
                                <div className="image-container">
                                    <img className="real-image" src={value.image} width={200} alt="" />
                                </div>
                            </div>

                            <div className="right-side">
                                <div className="name">
                                    {value.title}
                                </div>
                                <div>
                                    Ingredients: {value.ingredients.join(", ")}
                                </div>
                                <div>
                                    Description: {value.description}
                                </div>
                            </div>

                        </div>
                    )
                    :
                    <div>No Coffee</div>
                }
            </div>
        </div>
        
        
    )
}

export default FormComponent