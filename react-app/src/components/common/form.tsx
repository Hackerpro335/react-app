import { useForm } from "react-hook-form";

function AppForm() {
    const {register} = useForm();
    return (
        <div style={styles.container}>
            <h4>Signup</h4>
            <form>
                <input ref={register} placeholder="Username" style={styles.input} />
                <input ref={register} placeholder="Password" style={styles.input} />
                <input ref={register} placeholder="Email" style={styles.input} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}