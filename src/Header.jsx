export const Header = () => {
    return (
        <nav className="flex bg-black h-14 w-screen justify-between px-12 items-center text-xl/8 py-10 relative top-0">
            <section className="left-nav p">
                <ul className="flex gap-4 items-center">
                    <li className="text-white font-bold">Abstract</li>
                    <li className="text-white border-left border-s-2 pl-4">Help Center</li>
                </ul>
            </section>
            <section className="right-nav">
                <ul className="flex gap-4 items-center">
                    <li className="text-white border border-solid border-white px-4 py-2 rounded-md">
                        Submit Request
                    </li>
                    <li className="text-white">
                        <button className="pointer bg-[#4C5FD5] hover:bg-white hover:text-black px-4 py-2 rounded-md" type="button">
                            Sign in
                        </button>
                    </li>
                </ul>
            </section>
        </nav>
    )
}