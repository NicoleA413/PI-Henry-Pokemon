import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        hp: 0,
        attack: 0,
        defence: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
        image: "",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        // if(event.target.type === "checkbox"){
        //     if(form[property] === ""){
        //         setForm({ ...form, [property]:[value] });
        //         console.log("me creé");
        //         console.log(form);
        //     }else if(form[property][1] == value){
        //         setForm({ ...form, [property]:form[property][0] });
        //         console.log("me desactivé")
        //         console.log(form);
        //     }else if(form[property][0] == value && !!form[property][1]){
        //         setForm({ ...form, [property]:form[property][1] });
        //         console.log(form);
        //     }else if(form[property][0] == value){
        //         setForm({ ...form, [property]:"" });
        //         console.log(form);
        //     }else{
        //         setForm({ ...form, [property]:[form[property][0],value] });
        //         console.log("agregué un tipo");
        //         console.log(form);
        //     }
        // }else{
            setForm({ ...form, [property]:value });
            // validate({ ...form, [property]:value });
        // }
    }

    const [errors, setErrors] = useState({
        name: "",
        hp: 0,
        attack: 0,
        defence: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
        image: "",
    })

    // const validate = (form) => {
    //     if(.test(form.)){
    //         console.log("todo bien");
    //     }else{
    //         console.log("hay errores");
    //     }
    // }

    return (
        <form>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={changeHandler} />
            </div>

            <div>
                <label>HP:</label>
                <input type="number" min="20" max="150" name="hp" value={form.hp} onChange={changeHandler} />
            </div>

            <div>
                <label>Attack:</label>
                <input type="number" min="10" max="150" name="attack" value={form.attack} onChange={changeHandler} />
            </div>

            <div>
                <label>Defence:</label>
                <input type="number" min="10" max="150" name="defence" value={form.defence} onChange={changeHandler} />
            </div>

            <div>
                <label>Speed:</label>
                <input type="number" min="10" max="150" name="speed" value={form.speed} onChange={changeHandler} />
            </div>

            <div>
                <label>Height:</label>
                <input type="number" min="1" max="50" name="height" value={form.height} onChange={changeHandler} />
            </div>
            
            <div>
                <label>Weight:</label>
                <input type="number" min="10" max="1000" name="weight" value={form.weight} onChange={changeHandler} />
            </div>
            {/* <p>Types:</p> */}
            <div>
                <label>Types:</label>
                <input type="text" name="types" value={form.types} onChange={changeHandler} />
            </div>
            {/* <div>
                <label>fighting</label>
                <input type="checkbox" name="types" value="fighting" onChange={changeHandler} />
            </div> */}

            <div>
                <label>Image:</label>
                <input type="file" name="image" value={form.image} onChange={changeHandler} />
            </div>

            
        </form>
    );
};

export default Form;