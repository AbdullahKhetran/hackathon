export default function Copyright() {
    return (
        <div className="flex flex-col md:flex-row justify-between
        border-4 border-yellow-500 text-xl my-8 gap-8">
            <div className="flex md:flex-col text-neutral-500">
                <h1>Copyright &copy; 2022&nbsp;</h1>
                <h2>Dine Market</h2>
            </div>
            <div className="flex md:flex-col">
                <h1 className="text-neutral-500">Design by.&nbsp;</h1>
                <h2 className="font-bold text-lg">Weird Design Studio</h2>
            </div>
            <div className="flex md:flex-col">
                <h1 className="text-neutral-500">Code by.&nbsp;</h1>
                <h2 className="font-bold text-lg">wds12 on github</h2>
            </div>
        </div>
    )
}