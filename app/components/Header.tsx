import MainMenu from "./MainMenu";

export default function Header(props: {isMenuOpen : boolean, clickMenu: () => void}) {
    return (
        <div>
            <div className="relative">
                <div className="w-full py-6 flex justify-between items-center md:p-0 md:mt-[2.5rem]">
                    <div className="md:ml-[4rem]">
                        <img src="Logo.svg" alt="logo space" className="img-fluid" />
                    </div>
                    <div className="hidden md:block md:absolute left-[12.5rem] bottom-8 z-10 w-3xl">
                        <div className="h-1 border-b border-b-white"></div>
                    </div>
                    <div className="md:w-1/2">
                        <MainMenu isMenuOpen={props.isMenuOpen} clickMenu={props.clickMenu}/>
                    </div>
                </div>
            </div>

        </div>
    )
}