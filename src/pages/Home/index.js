const Home = () => {
    document.body.className = "home"
    return ( 
        <div className="container grid sm:grid-cols-2 mx-auto sm:mt-36 ">
            <div className="text-center mx-4 my-6 text-gray-400 sm:text-left sm:w-1/2 sm:mx-auto">
                <h2 className="font-extralight tracking-widest text-xl mb-4">So, you want to travel to</h2> 
                <h1 className="uppercase text-white tracking-widest text-7xl sm:text-9xl mb-8">Space</h1> 
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
                    and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="flex place-items-center bg-white text-slate-900 text-4xl w-min h-min py-20 px-10 rounded-full mx-auto my-14 sm:px-14 sm:py-24">Explore</div>
        </div>
     );
}
 
export default Home;