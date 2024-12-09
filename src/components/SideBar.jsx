export default function SideBar(props){
    const {handleToggleModal}=props

    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>stars</h2>
                <div>
                    <p>description</p>
                    <p>blalksdaslkhdas;dljahido;ajsdis;djadio;kjlasbhdgyuhasjdhasuid</p>
                </div>
                <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}