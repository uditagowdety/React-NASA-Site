export default function Footer(props){
    const{showModal,handleToggleModal}=props
    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>it's a lot of stars</h2>
                <h1>apod project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}