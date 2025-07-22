export const Navbar=()=>{
    return (
        <div className="fixed w-screen bg-white top-0 z-1 sm:static">
            <div className="flex justify-between mx-3 items-center ">
{/*                 <img src="https://buy.icicibank.com/ucj/media/icici3.1ed6e4c0.webp" alt="ICICI Bank" className="mb-1"></img> */}
                <div className="font-extrabold text-3xl text-blue-950">My Bank</div>
                <a href="https://icicibank.com">
                    <img loading="lazy" src="https://buy.icicibank.com/ucj/media/home-orange.85fa1234.webp" alt="ICICI Bank" className="p-2.5"></img>
                </a>
            </div>
            <div className="bg-[#f27b1a] h-12"></div>
        </div>
    )
}
