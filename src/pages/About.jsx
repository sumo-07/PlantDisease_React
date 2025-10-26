import "../css/about.css";

export const About = () => {
    return (
        <section className="about">
            <h1>About Us</h1>
            <p>
                Welcome to the <strong>🌿PlantCare</strong>  – a project developed to
                assist farmers, gardeners, and plant lovers in protecting their crops and plants from harmful diseases.
                By simply uploading an image of a plant leaf, our system identifies the possible disease affecting
                the plant and provides recommended solutions.
            </p>
            <p>
                Currently, our project supports a selected number of <strong>crop plants</strong>. However,
                we are continuously working to expand our system so that it can cover a wide variety of plants and
                provide more accurate, AI-powered results.
            </p>

            <h2>Our Current Features</h2>
            <ul>
                <li>Upload a plant leaf image and get the disease name</li>
                <li>Receive suggested solutions and treatments</li>
                <li>User-friendly and quick identification process</li>
            </ul>

            <h2>Future Goals</h2>
            <ul>
                <li>Adding support for more crops and plant species</li>
                <li>Improving disease detection accuracy with AI models</li>
                <li>Providing preventive measures and early warnings</li>
                <li>Building a community-driven knowledge base for plant care</li>
            </ul>

            <p>
                Our mission is simple: <strong>to help people grow healthier plants and ensure sustainable farming
                    practices by reducing crop losses due to diseases</strong>. 🌍🌿
            </p>
        </section>
    );
}