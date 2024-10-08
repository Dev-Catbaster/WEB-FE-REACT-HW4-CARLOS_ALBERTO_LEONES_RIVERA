import Header from "./Header";
import Main from "./Main";
import Aside from "./Aside";
import Footer from "./Footer";

const Body = () => {
    return <>
        <body class="index-body grid-areas  text-[#cecece] h-[100vh]  font-['Roboto',_sans-serif]">
            <header class="grid-area-header bg-[#1F1F1F] flex items-center justify-center">
                <Header />
            </header>
            <main class="grid-area-main bg-[#2A2A2A] p-[2%]">
                <Main />
            </main>
            <aside class="grid-area-aside bg-[#333333] overflow-y-auto">
                <Aside />
            </aside>
            <footer class="grid-area-footer">
                <Footer />
            </footer>
        </body>
    </>
}

export default Body