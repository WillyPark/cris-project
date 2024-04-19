import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Regions = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div className="contenedor-contenido-principal">
                <main className="contenedor fadeOut">
                    <div className="regiones-img">
                        <img className="regiones-img" src="./img/world.png" alt="Mapa Mundo" />
                    </div>
                </main>
            </div>

            <section className="contenedor contenedor-regiones-spain">
                <h2>{language.regions.countryOne.title}</h2>
                <p><em>{language.regions.countryOne.textOne}</em></p>
                <p>{language.regions.countryOne.textTwo[0]} <strong className="activo-claro">{language.regions.countryOne.textTwo[1]}</strong> {language.regions.countryOne.textTwo[2]}</p>

                <div className="regiones__ciudades-spain">
                    <div className="hospitales-spain">
                        <h3>Barcelona</h3>

                        <ul>
                            <li>Hospital U. Vall d'Hebron (VHIO)</li>
                            <li>Hospital Clínic Barcelona</li>
                            <li>Hospital del Mar</li>
                            <li>Hospital U. Trias y Pujol</li>
                            <li>Institut Català d'Oncologia (ICO)</li>
                            <li>Hospital Quirónsalud</li>
                        </ul>
                    </div>

                    <div className="hospitales-spain">
                        <h3>Madrid</h3>

                        <ul>
                            <li>Clínica Universidad de Navarra</li>
                            <li>Hospital U. La Paz</li>
                            <li>Hospital U. Ramón y Cajal</li>
                            <li>Hospital U. 12 de Octubre</li>
                            <li>Hospital G. U. Gregorio Marañón</li>
                            <li>Hospital Universitario Fundación Jiménez Díaz</li>
                            <li>Hospital U. HM Sanchinarro / Centro Integral Oncológico Clara Campal (HM CIOCC)</li>
                            <li>Hospital U. HM Puerta del Sur</li>
                            <li>Hospital U. Puerta de Hierro</li>
                        </ul>
                    </div>

                    <div className="hospitales-spain">
                        <h3>Valencia</h3>

                        <ul>
                            <li>Hospital Clínico U. de Valencia (INCLIVA)</li>
                            <li>Hospital U. y Politécnico La Fe Valencia</li>
                            <li>Instituto Valenciano de Oncología (IVO)</li>
                        </ul>
                    </div>
                </div>

                <div className="regiones__norte-sur-spain">
                    <div className="hospitales-spain">
                        <h3>{language.regions.countryOne.north}</h3>

                        <ul>
                            <li>Hospital Clínico U. de Santiago (CHUS)</li>
                            <li>Clínica Universidad de Navarra (Pamplona)</li>
                            <li>Hospital U. Basurto - Basurtuko Universitate Ospitalea</li>
                        </ul>
                    </div>

                    <div className="hospitales-spain">
                        <h3>{language.regions.countryOne.south}</h3>

                        <ul>
                            <li>Hospital U. Virgen del Roció (Seville)</li>
                            <li>Hospital U. Virgen Macarena (Seville)</li>
                            <li>Hospital U. Virgen de las Nieves (Granada)</li>
                            <li>Hospital Regional U. de Málaga</li>
                            <li>Hospital Quirónsalud Málaga</li>
                            <li>Hospital U. Reina Sofía (Córdoba)</li>
                            <li>Hospital Virgen de la Arrixaca</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="contenedor contenedor-regiones-paises">
                <div className="regiones__paises">
                    <h3>{language.regions.countryTwo.title}</h3>

                    <div className="regiones__paises-texto">
                        <p>{language.regions.countryTwo.text[0]}</p>
                        <p>{language.regions.countryTwo.text[1]}</p>
                        <p>{language.regions.countryTwo.text[2]}</p>
                    </div>
                </div>


                <ul className="regiones__paises-hospitales">
                    <li>Insitut Gustave Roussy</li>
                    <li>Centre Léon Bérard</li>
                    <li>Institut de cancérologie | Hospices Civils de Lyon</li>
                    <li>Institut du Cancer de Montpellier</li>
                    <li>Institut de cancérologie Strasbourg Europe (ICANS)</li>
                </ul>
            </section>

            <section className="contenedor contenedor-regiones-paises">
                <div className="regiones__paises">
                    <h3>{language.regions.countryTree.title}</h3>

                    <div className="regiones__paises-texto">
                        <p>{language.regions.countryTree.text[0]}</p>
                        <p>{language.regions.countryTree.text[1]}</p>
                    </div>
                </div>

                <ul className="regiones__paises-hospitales">
                    <li>Centro Médico Siglo XXI</li>
                    <li>Instituto Nacional de Ciencias Médicas y Nutrición "Salvador Zubirán"</li>
                    <li>Instituto Nacional de Cancerología</li>
                    <li>Instituto Nacional de Neurología y Neurocirugía</li>
                    <li>Instituto de Oftalmología Conde de Valenciana</li>
                    <li>Centro Dermatológico "Dr. Ladislao de la Pascua"</li>
                    <li>Médica Sur</li>
                    <li>Hospital Ángeles México</li>
                </ul>
            </section>
        </>
    )
}
