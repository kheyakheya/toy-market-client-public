

const Banner = () => {
    return (
        <div  className='h-[100vh] pb-32 flex flex-col md:flex-row justify-center items-center  md:justify-around '>
            
            <div className="md:ps-44">
                     <h1 className="text-5xl italic tracking-wider text-secondary font-bold">TOYOMOY</h1>
                     <p className=" ps-2 mb-5 text-xl  pt-6">A Happy Place for Your Little One </p>
            </div>
            <div className="md:pe-40" >
                <img className="h-96 w-92"  src={'https://t3.ftcdn.net/jpg/00/62/18/54/240_F_62185421_cVM7RxbG5c2GAeJWMDtgyOiEM1iHyTOR.jpg'} alt="" />
            </div>
        </div>
        // <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/cCtJvBX/My-project-1.jpg")`, backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode: 'overlay'  }}>
        //     <div className="hero-overlay bg-opacity-40"></div>
        //     <div className="text-neutral-content">
        //         <div>
        //             <h1 className="md:-ms-96 text-5xl italic tracking-wider text-secondary font-bold">TOYOMOY</h1>
        //             <p className="md:-ms-96 ps-2 mb-5 text-xl  pt-6">A Happy Place for Your Little One </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;