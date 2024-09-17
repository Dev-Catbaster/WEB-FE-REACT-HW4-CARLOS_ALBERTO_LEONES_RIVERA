import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DofaElement from "./DofaElement";
import Table from "./Table";
import { dofa_data, org_iden_data, objectives_data } from "../utils/data";

const Main = () => {
    return <>
        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-orange-500">Introduction & Description</h1>
                <p className="text-base text-white">
                FitPredict Elite Pro Plus Ultimate Edition: Revolutionize your health with the best FitPredict Elite plan ever created, featuring cutting-edge technology and access to the best, most precise, and optimized artificial intelligence models. Get ready for a total transformation with the most advanced edition of FitPredict Elite: FitPredict Elite Pro Plus Ultimate, the most advanced health and wellness platform ever created. This comprehensive solution uses predictive models and machine learning algorithms to process vast amounts of biometric, genetic, and lifestyle data. FitPredict Elite Pro Plus Edition offers fully personalized nutrition and training plans, adapting even to specific restrictions such as kosher diets or any other particular needs. With our intuitive mobile app and our web and desktop application, you can monitor your progress in real-time, receive instant feedback, and join a supportive community that will drive you to achieve your goals. Imagine having a personal trainer who not only understands your needs but also adapts to every aspect of your life, guiding you towards optimal health and unprecedented well-being. FitPredict Elite is not just a platform; it’s a revolution in your pocket, designed to radically and effectively change your life. And the Pro Plus Ultimate Edition unlocks all your potential.
                </p>
            </article>
        </section>

        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">1. Actual Diagnosis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dofa_data.map(dd => <DofaElement key={dd.id} data={dd} />)}
                </div>
            </article>
        </section>


        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">2. Identidad Organizacional</h2>
                <ul className="list-disc pl-5 space-y-4">
                    {org_iden_data.map((org_iden, index) => <li key={index}>
                        <h3 className="text-xl font-bold">{org_iden.name}</h3>
                        <p className="text-gray-700">{org_iden.description}</p>
                    </li>)}
                </ul>
            </article>
        </section>

        <section className="px-4 py-8">
            <article className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-amber-500">3. Objetivos Estratégicos</h2>
                <Table data={objectives_data} />
            </article>
        </section>
    </>
}

export default Main
