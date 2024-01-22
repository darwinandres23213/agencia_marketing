import { Link } from 'react-router-dom';

function CaseCard({data,index}){
    return(
        <Link 
        to='/cases/id'
        onMouseEnter={()=>{
            const title_element = document.getElementById(index);
            title_element.classList.add('text-orange-500');
            title_element.classList.remove('text-gray-900');

            const img_element = document.getElementById(data.id)

            img_element.classList.add('object-scale-down')
            img_element.classList.remove('object-cover')

        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index);
            title_element.classList.remove('text-orange-500');
            title_element.classList.add('text-gray-900');

            const img_element = document.getElementById(data.id)

            img_element.classList.remove('object-scale-down')
            img_element.classList.add('object-cover')

        }} 
        
        className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img id={data.id} className="h-96 w-full object-cover transition duration-600 ease-in-out" src={data.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-xl font-medium text-black-500">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              <p id={index} className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold transition duration-300 ease-in-out text-gray-900">{data.title}</p>
              <p className="mt-3 text-2xl leading-9 text-gray-500">{data.description}</p>
            </a>
          </div> 
        </div>
      </Link>
    )
}
export default CaseCard