import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate(); // For navigation
    const [isExtraContentVisible, setIsExtraContentVisible] = useState(false);

    // Navigate to /diagnose page
    const handleDiagnose = () => {
        navigate('/diagnose');
    };

    const handleShowInfo = () => {
        setIsExtraContentVisible(true);
    };

    const handleHideInfo = () => {
        setIsExtraContentVisible(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <button className="diagnose-btn" onClick={handleDiagnose}>
                📷 Diagnose a plant
            </button>

            <div className="info-box">
                <p>
                    Plant disease identification may be a complicated task for a newbie,
                    so we took our time and figured out how we could help.
                    Choose an identifier and check out this guide.
                    Plant diseases are processes that occur in a plant under the influence
                    of various causes, from pathogens to adverse environmental conditions.
                </p>

                <div 
                    className="extra-content"
                    id="extraContent"
                    style={{ display: isExtraContentVisible ? 'block' : 'none' }}
                >
                    <h3>What Are Common Plant Diseases?</h3>
                    <ul>
                        <li>Rust</li>
                        <li>Ascochitosis</li>
                        <li>Septoria</li>
                        <li>Mosaic</li>
                        <li>Bacteriosis</li>
                        <li>Rot</li>
                        <li>Fungi</li>
                        <li>Powdery mildew</li>
                        <li>Mold</li>
                        <li>Leaf curl</li>
                    </ul>

                    <h3>Diseases Identification by Plant Type</h3>
                    <p>
                        Numerous plant diseases exist, mainly distributed among peas, potatoes,
                        buckwheat, grasses, corn, flax, sunflower, rice, soybeans, and many others.
                    </p>

                    <h3>Tree Disease</h3>
                    <p>The strong framework of the trunk and branches determines the tree's vitality...</p>

                    <h3>Flower Disease</h3>
                    <p>The main reason for flower diseases is the violation of conditions of maintenance.</p>

                    <h3>Tomato Disease</h3>
                    <p>Many tomato diseases are listed above, as they are very common.</p>

                    <h3>Crop Disease</h3>
                    <p>Viral diseases cause the greatest damage to cereal crops.</p>

                    <h3>Houseplant Diseases</h3>
                    <p>Diseases of indoor plants require immediate treatment, as the disease spreads quickly in a limited space.</p>

                    <h3>How to Identify Plant Diseases?</h3>
                    <ul>
                        <li>Leaf fall</li>
                        <li>Brown leaf tips</li>
                        <li>Spots on leaves</li>
                        <li>Wilting of leaves</li>
                        <li>Soft stem or leaves</li>
                    </ul>

                    <button className="btn hide-btn" id="hideInfoBtn" onClick={handleHideInfo}>
                        Hide Info
                    </button>
                </div>

                <button
                    className="btn"
                    id="showInfoBtn"
                    onClick={handleShowInfo}
                    style={{ display: isExtraContentVisible ? 'none' : 'inline-block' }}
                >
                    More Info
                </button>
            </div>

            <main>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c7a4b' }}>
                    Common Plant Diseases
                </h2>

                <section className="disease-gallery">

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_Example_of_Shot_Hole_Disease_b1f61159b2.webp" alt="Shot Hole Disease" />
                        <div className="card-body">
                            <h3>Shot Hole Disease</h3>
                            <p>The disease's name couldn't be more evident because it is about the holes...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_Peach_Leaves_affected_by_Leaf_Curl_fcf405fc24.webp" alt="Peach Leaf Curl" />
                        <div className="card-body">
                            <h3>Peach Leaf Curl</h3>
                            <p>The fungus Taphrina deformans causes this plant’s disease. As you can guess...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_shutterstock_1087283084_cde52730dc.webp" alt="Nutrient Excess" />
                        <div className="card-body">
                            <h3>Nutrient Excess</h3>
                            <p>The most common issues for plants are nutrient-related. And they can be caused...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_physical_injury1_a6a975d513.webp" alt="Mechanical Damage" />
                        <div className="card-body">
                            <h3>Mechanical Damage</h3>
                            <p>Mechanical damage is a physical violation of the integrity of the plant...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_Chill_Injury_Figure_4_3692f95411.webp" alt="Chilling and Frost Injury" />
                        <div className="card-body">
                            <h3>Chilling and Frost Injury</h3>
                            <p>Frost damage occurs if the plant stays in unacceptably low-temperature conditions...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_Heat_Damage_1024x675_d37ee42fcd.webp" alt="Light or Heat Source Damage" />
                        <div className="card-body">
                            <h3>Light or Heat Source Damage</h3>
                            <p>The increased temperature of the environment in which your plant grows can ...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_main_light_damage_be5a63948a.webp" alt="Light Excess" />
                        <div className="card-body">
                            <h3>Light Excess</h3>
                            <p>When the light exposure level is too intense for a particular plant, the ch...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_main_chromista_2_fc2948ec92.webp" alt="Chromista" />
                        <div className="card-body">
                            <h3>Chromista</h3>
                            <p>Chromista, also known as water molds, are fungus-like eukaryotic organisms...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_air_related_issues1_1bd5c37084.webp" alt="Finished flowering period" />
                        <div className="card-body">
                            <h3>Finished Flowering Period</h3>
                            <p>Like all living things, plants have their own life cycle. The flowering sta...</p>
                        </div>
                    </div>

                    <div className="disease-card">
                        <img src="https://strapi.myplantin.com/small_airrelated1_5ddcc02494.webp" alt="Air-Related Issues" />
                        <div className="card-body">
                            <h3>Air-Related Issues</h3>
                            <p>Humidity and drafts can become major troubles for your plant friends. Both ...</p>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};
