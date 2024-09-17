import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return <>
        <div class="flex items-center justify-center gap-1">
            <figure>
                <a href="index.html">
                    <svg fill="#FFFFFF" height="38px" width="38px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve">
                        <g>
                        <path class="st0" d="M188.858,102.634c26.588,10.645,56.793-2.287,67.428-28.874C266.941,47.171,254,16.966,227.411,6.33
                        c-26.597-10.654-56.782,2.278-67.438,28.876C149.339,61.794,162.251,91.98,188.858,102.634z"/>
                        <path class="st0" d="M502.664,130.434L433.106,13.819c-5.298-9.872-16.011-14.946-26.5-13.607c-0.245,0.02-0.489,0.078-0.723,0.098
                        c-0.773,0.127-1.555,0.294-2.326,0.479c-0.46,0.127-0.929,0.225-1.378,0.371c-1.604,0.5-3.177,1.144-4.702,1.965
                        c-2.835,1.526-6.031,3.618-8.045,5.905l-76.508,59.256l-55.668,42.775c-23.382,15.122-41.496,14.389-62.58,9.56L30.582,74.052
                        C19.918,70.836,8.647,76.877,5.441,87.551c-3.206,10.664,2.834,21.935,13.509,25.151l156.39,60.624
                        c6.882,2.014,18.445,18.456,26.362,27.233c11.564,12.864,55.62,78.493,159.9,80.839c6.402,0.147,7.996,1.76,8.788,6.159
                        l19.677,200.758c0,13.078,10.606,23.684,23.685,23.684c13.069,0,23.684-10.606,23.684-23.684c0,0,2.336-257.004,2.63-261.383
                        c0.352-5.386,3.734-8.445,8.524-12.707c0,0,40.244-39.609,40.947-40.068C509.81,160.736,510.768,143.748,502.664,130.434z
                        M372.159,181.245c-4.887,3.538-22.59,6.95-29.863,6.822c-42.638-0.684-46.294-35.238-33.401-48.132l35.913-33.723l51.622-47.438
                        l36.188,74.955L372.159,181.245z"/>
                        </g>
                    </svg>
                </a>
            </figure>
            <a href="index.html">
                <span class="text-2xl font-bold text-white">
                    FitPredict AI Labs
                </span>
            </a>
        </div>
        <nav class="hidden lg:flex lg:space-x-6 justify-center w-screen">
            <ul class="p-0 m-0 list-none flex items-center gap-[5%] justify-center">
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Home
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Products
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Community
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Partners
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Support
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            FAQ
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="text-lg font-bold text-white">
                            Work With Us
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="flex">
            <figure>
                <a href="#">
                    <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </figure>
            <div class="flex justify-between text-right gap-1">
                <span class=" text-white font-bold">
                    Welcome, Guts
                </span>
                <figure>
                    <a href="#">
                        <img class="rounded-full w-[10vw] max-w-[50px] h-auto" src="src\img\guts-ppic.png"></img>
                    </a>
                </figure>  
            </div>
        </div>
    </> 
}

export default Header;
