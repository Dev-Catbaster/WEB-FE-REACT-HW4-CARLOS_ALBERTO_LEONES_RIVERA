import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DofaElement from "./DofaElement";
import Table from "./Table";
import { dofa_data, org_iden_data, objectives_data, introduction_data } from "../utils/data";

const Main = () => {
    return <>
        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-orange-500">
                    Introducción
                </h1>
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                    Descripción general
                </h2>
                <p className="text-base text-white">
                AI FitPredict es una plataforma que utiliza inteligencia artificial para ofrecer planes de alimentación y actividad física personalizados para estudiantes universitarios. Su enfoque se adapta a las necesidades individuales, ayudando a combatir la inseguridad alimentaria y promover hábitos saludables. Además, fomenta una comunidad donde los usuarios pueden compartir logros y motivarse entre sí.
                </p>
                <div class="my-1"> 
                <h2 className="text-2xl font-bold mb-4 text-orange-500">
                    Componentes clave
                </h2>
                <article className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {introduction_data.map((org_iden, index) => <article class="bg-[#505050] rounded p-2" key={index}>
                            <h3 className="text-2x1 font-bold text-orange-500">{org_iden.name}</h3>
                            <p className="text-white">{org_iden.description}</p>
                        </article>)}
                    </div>
                </article>
                </div>
                
            </article>
        </section>

        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">1. Actual Diagnosis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dofa_data.map(dd => <DofaElement key={dd.id} data={dd} />)}
                </div>
            </article>
        </section>


        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">2. Identidad Organizacional</h2>
                <ul className="list-disc pl-5 space-y-4">
                    {org_iden_data.map((org_iden, index) => <li class="list-none" key={index}>
                        <h3 className="text-xl font-bold text-amber-500">{org_iden.name}</h3>
                        <p className="text-white">{org_iden.description}</p>
                    </li>)}
                </ul>
            </article>
        </section>

        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">3. Objetivos Estratégicos</h2>
                <Table data={objectives_data} />
            </article>
        </section>
    </>
}

export default Main
