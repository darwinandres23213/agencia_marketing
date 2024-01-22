import { Link } from "react-router-dom";
function IndexServices(){
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto lg:mx-12 max-w-full xl:mx-12 xl:pt-40 lg:pb-64 lg:pt-40 lg:bt-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight pb-16  sm:text-6xl" >
                      Case Studies
                </h1>
                <p className="mt-36 text-2xl leading-8 text-gray-900">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
            </div>
            </div>
          </div>
        </div>
      </main>
    )
}
export default IndexServices