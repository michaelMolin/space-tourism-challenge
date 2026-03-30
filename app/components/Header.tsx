import MainMenu from "./MainMenu";

export default function Header(props: {isMenuOpen : boolean, clickMenu: () => void}) {
    return (
        <div>
            <div className="w-full py-6 flex justify-between items-center">
                <div>
                    <img src="Logo.svg" alt="logo space" className="img-fluid"></img>
                </div>
                <MainMenu isMenuOpen={props.isMenuOpen} clickMenu={props.clickMenu}/>
            </div>
           
        </div>
    )
}