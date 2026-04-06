import Tab from "./Tab"

export default function MenuMobile(props : {isMenuOpen: boolean, clickMenu : () => void}) {
    return(
        <div>
            <div className={`${props.isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed right-0 top-0 h-screen w-2/3 transition-transform duration-300 backdrop-blur-md bg-white/10 pr-6 pl-8 py-8 z-10`}>
              <div onClick={props.clickMenu} className="flex justify-end mb-1000">
                  <img src="close.svg" alt="close logo" />
              </div>
              <div className="text-left">
                <Tab voice="HOME" url="https://www.google.com" index="00" is_menu={true}></Tab>
                <Tab voice="DESTINATION" url="https://www.google.com" index="01" is_menu={true}></Tab>
                <Tab voice="CREW" url="https://www.google.com" index="02" is_menu={true}></Tab>
                <Tab voice="TECHNOLOGY" url="https://www.google.com" index="03" is_menu={true}></Tab>
              </div>
          </div>
        </div>
    )
}