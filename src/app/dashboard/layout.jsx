import Providers from "./provider";

const layout = ({children})=>{
    return (
        <Providers>
        <div>
            <h1>Dashboard Layout</h1>
            {children}
        </div>
        </Providers>
    )
}
export default layout;