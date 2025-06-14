import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import "./navStyle.css"
const Navbar = () => {
  return (
    <div className='navbar shadow flex justify-between h-16 items-center px-18 shadow-gray-500'>

    {/* ----------{ Nav Logo section }----------- */}
      <div className=''>
        <Link href="/" className="scroll-m-20 text-3xl tracking-tight first:mt-0 font-bold ">
            Daily News 24
        </Link>
      </div>

    {/* ----------{ Nav Menu section }----------- */}
      <div>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="inline-flex">
                    <NavigationMenuLink className="text-md font-semibold" asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                    <NavigationMenuTrigger className="ml-1 pt-3 text-md font-semibold">services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink className="mx-2 block w-32 px-4 py-2" href="/services/link1">Link 1</NavigationMenuLink>
                        <NavigationMenuLink className="mx-2 block w-32 px-4 py-2" href="/services/link2">Link 2</NavigationMenuLink>
                        <NavigationMenuLink className="mx-2 block w-32 px-4 py-2" href="/services/link3">Link 3</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuLink className="mr-2 text-md font-semibold" asChild>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="mx-1 text-md font-semibold" asChild>
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>      
      </div>

    {/* ----------{ dark theme & login button section }----------- */}
      <div>
        <Switch className="mr-6"></Switch>
        <Button variant="default">Log in</Button>
      </div>

    </div>
  )
}

export default Navbar;