import Tab from "./Tab"
export default function MainMenu(props: {isMenuOpen: boolean, clickMenu: () => void})
{
    return (
        <div>
            <div onClick={props.clickMenu} className="md:hidden">
                <img src="menu-hambuger.svg" alt="menu hambuger" />
            </div>
            {/*MENU DESKTOP*/}
            <div className="hidden md:flex md:justify-around md:items-center">
                <Tab voice="HOME" url="https://www.google.com" index="00" is_menu={true}></Tab>
                <Tab voice="DESTINATION" url="https://www.google.com" index="01" is_menu={true}></Tab>
                <Tab voice="CREW" url="https://www.google.com" index="02" is_menu={true}></Tab>
                <Tab voice="TECHNOLOGY" url="https://www.google.com" index="03" is_menu={true}></Tab>
            </div>
        </div>
    )
}