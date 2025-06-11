import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='shadow flex justify-between h-16 items-center'>
    {/* ----------{ Nav Logo section }----------- */}
      <div className=''>
        <h2 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 font-bold">
            Daily News
        </h2>
      </div>
    {/* ----------{ Nav Menu section }----------- */}
      <div>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="inline-flex">
                    <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                    <NavigationMenuTrigger>services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="/services/link1">Link 1</NavigationMenuLink>
                        <NavigationMenuLink href="/services/link2">Link 2</NavigationMenuLink>
                        <NavigationMenuLink href="/services/link3">Link 3</NavigationMenuLink>
                    </NavigationMenuContent>
                    <NavigationMenuLink asChild>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>      </div>
    {/* ----------{ dark theme & login button section }----------- */}
      <div>
        <h2>button section</h2>
      </div>
    </div>
  )
}

export default Navbar
