import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function BurgerOld() {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>three lines</DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                    {/* <DropdownMenuSeparator /> */}
                    <DropdownMenuItem>Female</DropdownMenuItem>
                    <DropdownMenuItem>Male</DropdownMenuItem>
                    <DropdownMenuItem>Kids</DropdownMenuItem>
                    <DropdownMenuItem>All Products</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}
